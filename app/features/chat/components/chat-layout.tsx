"use client";
import { useChatStore } from "@/app/store/chat-store";
import MessageInput from "../../message/components/message-input";
import MessageList from "../../message/components/message-list";
import { ChatSiderbar } from "./chat-sidebar";
import { useEffect } from "react";

export function ChatLayout() {
  const { messages, getMessages } = useChatStore();

  const fetchMessages = async () => getMessages();

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <main className="flex h-screen overflow-hidden bg-[url(/images/chat-bg.png)] bg-repeat bg-contain">
      <ChatSiderbar />
      <section className="flex flex-1 flex-col">
        <MessageList messages={messages} />
        <MessageInput />
      </section>
    </main>
  );
}
