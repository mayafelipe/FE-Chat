"use client";

import { useChatStore } from "@/app/store/chat-store";
import React, { JSX, KeyboardEvent, useState } from "react";

const MessageInput = (): JSX.Element => {
  const [message, setMessage] = useState<string>("");
  const { sendMessage } = useChatStore();

  const handleSendMessage = async() => {
    if (!message.trim()) return;
    const currentMessage = message;
    setMessage("");
    await sendMessage({
      message: currentMessage,
      author: "Felipe Maya"
    });
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await handleSendMessage();
    }
  };
  return (
    <div className="bg-cyan-600 p-2">
      <div className="mx-auto flex max-w-160 gap-2">
        <input
          className="flex-1 rounded-md border-2 border-cyan-700 bg-white p-2 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="rounded-md bg-red-400 px-6 py-3 font-semibold text-white "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
