import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export interface ChatResponse {
  content: string;
  category: string;
  hasCode?: boolean;
  codeBlocks?: Array<{
    language: string;
    code: string;
    filename?: string;
  }>;
  suggestions?: string[];
}

export async function generateChatResponse(
  message: string,
  category: string,
  conversationHistory: Array<{ role: string; content: string }> = []
): Promise<ChatResponse> {
  try {
    const systemPrompts = {
      website: `You are a website editing assistant specializing in HTML, CSS, JavaScript, and web development. 
      Provide practical code solutions, responsive design advice, accessibility improvements, and modern web development best practices.
      When providing code, always include complete, working examples that users can directly use.`,
      
      video: `You are a video editing assistant specializing in video production, editing techniques, transitions, color grading, and workflow optimization.
      Provide specific, actionable advice for video editing software, techniques, and creative direction.`,
      
      graphics: `You are a graphics design assistant specializing in visual design, color theory, typography, layout principles, and digital art creation.
      Provide guidance on design tools, creative processes, and visual communication strategies.`,
      
      general: `You are a helpful AI creative assistant. Provide clear, practical advice and solutions for creative tasks across web development, video editing, graphics design, and general creative projects.`
    };

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: systemPrompts[category as keyof typeof systemPrompts] || systemPrompts.general
      },
      ...conversationHistory.map(msg => ({
        role: msg.role as "user" | "assistant",
        content: msg.content
      })),
      {
        role: "user",
        content: message
      }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
      max_tokens: 2000,
      temperature: 0.7,
    });

    const content = response.choices[0].message.content || "";
    
    // Extract code blocks from the response
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const codeBlocks: Array<{ language: string; code: string; filename?: string }> = [];
    let match;
    
    while ((match = codeBlockRegex.exec(content)) !== null) {
      const language = match[1] || "text";
      const code = match[2].trim();
      codeBlocks.push({ language, code });
    }

    // Generate helpful suggestions based on category
    const suggestions = generateSuggestions(category, message);

    return {
      content,
      category,
      hasCode: codeBlocks.length > 0,
      codeBlocks,
      suggestions
    };

  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate AI response. Please try again.");
  }
}

export async function analyzeUploadedFile(
  fileBuffer: Buffer,
  mimeType: string,
  filename: string
): Promise<string> {
  try {
    if (mimeType.startsWith('image/')) {
      const base64Image = fileBuffer.toString('base64');
      
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Analyze this image and provide insights for creative projects. Describe the visual elements, design principles, color palette, and suggest how it could be used or improved for web design, graphics, or video projects."
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:${mimeType};base64,${base64Image}`
                }
              }
            ],
          },
        ],
        max_tokens: 500,
      });

      return response.choices[0].message.content || "Could not analyze the image.";
    }
    
    if (mimeType.includes('text') || filename.endsWith('.html') || filename.endsWith('.css') || filename.endsWith('.js')) {
      const fileContent = fileBuffer.toString('utf-8');
      
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: `Analyze this code file (${filename}) and provide feedback, suggestions for improvement, and identify any potential issues:\n\n${fileContent}`
          }
        ],
        max_tokens: 500,
      });

      return response.choices[0].message.content || "Could not analyze the code file.";
    }

    return `File uploaded: ${filename}. I can help you work with this file - please let me know what you'd like to do with it.`;

  } catch (error) {
    console.error("File analysis error:", error);
    return `File uploaded: ${filename}. There was an issue analyzing the file, but I can still help you work with it.`;
  }
}

function generateSuggestions(category: string, message: string): string[] {
  const suggestions = {
    website: [
      "Create a responsive navigation bar",
      "Add CSS animations and transitions", 
      "Implement form validation",
      "Optimize for mobile devices",
      "Add accessibility features"
    ],
    video: [
      "Create smooth transitions between clips",
      "Add color grading techniques",
      "Implement motion graphics",
      "Sync audio with video",
      "Export for different platforms"
    ],
    graphics: [
      "Design a modern logo",
      "Create a color palette",
      "Design social media graphics",
      "Create vector illustrations",
      "Design a brand identity"
    ],
    general: [
      "Help with project planning",
      "Provide creative inspiration",
      "Suggest tools and workflows",
      "Review and improve content",
      "Brainstorm ideas"
    ]
  };

  return suggestions[category as keyof typeof suggestions] || suggestions.general;
}
