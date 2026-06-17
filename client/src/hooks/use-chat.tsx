import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage, getConversations, getMessages, createConversation, uploadFile } from "@/lib/chat-api";
import type { Conversation, Message } from "@shared/schema";

export function useConversations() {
  return useQuery({
    queryKey: ["/api/conversations"],
    queryFn: () => getConversations(),
  });
}

export function useMessages(conversationId: string | null) {
  return useQuery({
    queryKey: ["/api/conversations", conversationId, "messages"],
    queryFn: () => conversationId ? getMessages(conversationId) : Promise.resolve([]),
    enabled: !!conversationId,
  });
}

export function useChat() {
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const queryClient = useQueryClient();

  const createConversationMutation = useMutation({
    mutationFn: createConversation,
    onSuccess: (conversation) => {
      queryClient.invalidateQueries({ queryKey: ["/api/conversations"] });
      setCurrentConversationId(conversation.id);
    },
  });

  const sendMessageMutation = useMutation({
    mutationFn: ({ conversationId, content, category }: { conversationId: string; content: string; category: string }) =>
      sendMessage(conversationId, content, category),
    onMutate: () => {
      setIsTyping(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/conversations", currentConversationId, "messages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/conversations"] });
    },
    onSettled: () => {
      setIsTyping(false);
    },
  });

  const uploadFileMutation = useMutation({
    mutationFn: uploadFile,
  });

  const startNewConversation = useCallback((category: string, title: string = "New Conversation") => {
    createConversationMutation.mutate({ title, category });
  }, [createConversationMutation]);

  const sendChatMessage = useCallback((content: string, category: string) => {
    if (!currentConversationId) {
      // Create new conversation if none exists
      const title = content.length > 50 ? content.substring(0, 50) + "..." : content;
      startNewConversation(category, title);
      // The message will be sent when the conversation is created
      setTimeout(() => {
        if (currentConversationId) {
          sendMessageMutation.mutate({ conversationId: currentConversationId, content, category });
        }
      }, 100);
    } else {
      sendMessageMutation.mutate({ conversationId: currentConversationId, content, category });
    }
  }, [currentConversationId, sendMessageMutation, startNewConversation]);

  return {
    currentConversationId,
    setCurrentConversationId,
    isTyping,
    startNewConversation,
    sendChatMessage,
    uploadFile: uploadFileMutation.mutateAsync,
    isLoading: createConversationMutation.isPending || sendMessageMutation.isPending,
    isUploadingFile: uploadFileMutation.isPending,
  };
}
