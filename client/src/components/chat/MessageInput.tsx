import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  onFileUpload: () => void;
  isLoading: boolean;
  category: string;
}

const quickTemplates = {
  website: [
    "Create a responsive navbar",
    "Fix CSS alignment issues", 
    "Add smooth animations"
  ],
  video: [
    "Add smooth transitions",
    "Color grading tips",
    "Export for social media"
  ],
  graphics: [
    "Design a modern logo",
    "Create a color palette",
    "Design principles guide"
  ],
  general: [
    "Help with project planning",
    "Creative inspiration",
    "Tool recommendations"
  ]
};

const categoryTemplates = {
  website: "Create a semantic HTML structure for ",
  video: "Help me edit a video to ",
  graphics: "Design graphics for ",
  general: "I need help with "
};

export function MessageInput({ onSendMessage, onFileUpload, isLoading, category }: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
    }
  };

  useEffect(() => {
    autoResize();
  }, [message]);

  const addTemplate = (template: string) => {
    setMessage(template);
    textareaRef.current?.focus();
  };

  const useSuggestion = (suggestion: string) => {
    setMessage(suggestion);
    setShowSuggestions(false);
    textareaRef.current?.focus();
  };

  const suggestions = quickTemplates[category as keyof typeof quickTemplates] || quickTemplates.general;

  return (
    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
      {/* Quick Actions Bar */}
      <div className="flex items-center space-x-2 mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => addTemplate(categoryTemplates.website)}
          className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-900/50"
        >
          HTML Template
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => addTemplate(categoryTemplates.video)}
          className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full hover:bg-accent-200 dark:hover:bg-accent-900/50"
        >
          CSS Helper
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-success/20 text-success rounded-full hover:bg-success/30"
        >
          Suggestions
        </Button>
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-end space-x-4">
          {/* File Upload Button */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onFileUpload}
            className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Button>

          {/* Message Input */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Press Shift+Enter for new line, Enter to send)"
              className="w-full p-4 pr-20 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              rows={1}
              style={{ minHeight: "52px", maxHeight: "120px" }}
              disabled={isLoading}
            />
            
            {/* Character Counter */}
            <div className="absolute bottom-2 left-4 text-xs text-gray-400 dark:text-gray-500">
              {message.length}/2000
            </div>

            {/* Send Button */}
            <Button
              type="submit"
              disabled={!message.trim() || isLoading}
              className="absolute right-2 bottom-2 p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>

          {/* Voice Input Button */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <Mic className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>
      </form>

      {/* Input Suggestions */}
      {showSuggestions && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => useSuggestion(suggestion)}
                className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                "{suggestion}"
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
