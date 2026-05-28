import { create } from "zustand";
import { Message } from "../types/chat.type";
import { messagesMock } from "../features/message/mock/messages.mock";

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (content: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: messagesMock,
  isLoading: false,
  sendMessage: (content) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content,
      role: "user1",
      date: new Date().toISOString(),
      user: "Felipe23",
    };

    set({
      messages: [...get().messages, userMessage],
      isLoading: false,
    });
  },
}));
