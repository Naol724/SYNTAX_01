import { useState } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ChatArea } from "@/components/chat/ChatArea";
import { Sidebar } from "@/components/chat/Sidebar";
import { FileUploadModal } from "@/components/chat/FileUploadModal";
import { useConversations, useChat } from "@/hooks/use-chat";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Moon, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

function ChatHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Nile</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">AI Creative Assistant</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

function ChatPage() {
  const [selectedCategory, setSelectedCategory] = useState("website");
  const [showFileUpload, setShowFileUpload] = useState(false);
  
  const { data: conversations = [], isLoading: isLoadingConversations } = useConversations();
  const {
    currentConversationId,
    setCurrentConversationId,
    isTyping,
    startNewConversation,
    sendChatMessage,
    uploadFile,
    isLoading,
    isUploadingFile,
  } = useChat();

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Start new conversation when category changes
    if (currentConversationId) {
      setCurrentConversationId(null);
    }
  };

  const handleSendMessage = (content: string) => {
    sendChatMessage(content, selectedCategory);
  };

  const handleNewConversation = () => {
    setCurrentConversationId(null);
  };

  const handleFileUpload = async (file: File) => {
    try {
      const result = await uploadFile(file);
      // Send analysis as a message
      sendChatMessage(`I've uploaded a file: ${file.name}. ${result.analysis}`, selectedCategory);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  // Calculate task stats
  const completedTasks = conversations.filter(c => c.updatedAt).length;
  const activeTasks = currentConversationId ? 1 : 0;

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <ChatHeader />
      
      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar
          conversations={conversations}
          currentConversationId={currentConversationId}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          onConversationSelect={setCurrentConversationId}
          onNewConversation={handleNewConversation}
          onFileUpload={() => setShowFileUpload(true)}
          completedTasks={completedTasks}
          activeTasks={activeTasks}
        />
        
        <ChatArea
          conversationId={currentConversationId}
          category={selectedCategory}
          onSendMessage={handleSendMessage}
          onFileUpload={() => setShowFileUpload(true)}
          isLoading={isLoading}
          isTyping={isTyping}
        />
      </div>

      <FileUploadModal
        isOpen={showFileUpload}
        onClose={() => setShowFileUpload(false)}
        onFileUpload={handleFileUpload}
        isUploading={isUploadingFile}
      />
    </div>
  );
}

export default function Chat() {
  return (
    <ThemeProvider>
      <ChatPage />
    </ThemeProvider>
  );
}
