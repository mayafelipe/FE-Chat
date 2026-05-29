import { create } from "zustand";
import { Message, SendMessageInput } from "../types/chat.type";
import { messagesMock } from "../features/message/mock/messages.mock";
import {
  getMessagesRequest,
  sendMessageRequest,
} from "../services/chat-service";

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  sendMessage: (content: SendMessageInput) => Promise<void>;
  getMessages: () => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: messagesMock,
  isLoading: false,
  sendMessage: async (content) => {
    const userMessage: SendMessageInput = content;

    set({
      isLoading: true,
    });

    try {
      //Post message
      const assistantMessage = await sendMessageRequest(userMessage);

      //Update chat state
      set({
        messages: [...get().messages, assistantMessage],
      });
    } catch {
      set({
        messages: [
          ...get().messages,
          {
            _id: crypto.randomUUID(),
            message: "An error occurred while connecting to the API.",
            author: "assistant",
            createdAt: new Date().toISOString(),
          },
        ],
      });
    } finally {
      set({ isLoading: false });
    }
  },
  getMessages: async () => {
    set({
      isLoading: true,
    });
    try {
      //Get message
      const response = await getMessagesRequest();

      //Update chat state
      set({
        messages: response,
      });
    } catch {
      set({
        messages: [
          ...get().messages,
          {
            _id: crypto.randomUUID(),
            message: "An error occurred while connecting to the API.",
            author: "assistant",
            createdAt: new Date().toISOString(),
          },
        ],
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
