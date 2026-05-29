"use client";
import React, { FC, JSX, useEffect, useRef } from "react";
import { MessageListProps } from "../types/chat.type";
import { AUTHOR_BY_DEFAULT } from "../constants/chat-constants";
import { useChatStore } from "../store/chat-store";

const MessageList: FC<MessageListProps> = ({ messages }): JSX.Element => {
  const { retryMessage, isLoading } = useChatStore();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleRetryMessage = async (messageId: string) =>
    await retryMessage(messageId);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-160 flex-col gap-4 px-6 lg:px-0 pt-4">
        {messages?.map((message) => (
          <div key={message._id} className={
                message.author === AUTHOR_BY_DEFAULT
                  ? "lg:max-w-[60%] max-w-[68%] self-end min-w-37.5"
                  : "lg:max-w-[60%] max-w-[68%] self-start min-w-37.5"
              }>
            <div
              className={
                message.author === AUTHOR_BY_DEFAULT
                  ? "w-full self-end rounded-2xl bg-yellow-100 border border-gray-300"
                  : "w-full self-start rounded-2xl bg-white border-gray-300 p-4"
              }
            >
              <span
                className={
                  message.author === AUTHOR_BY_DEFAULT
                    ? "hidden"
                    : "text-gray-400 text-[0.9rem]"
                }
              >
                {message.author}
              </span>
              <p className={message.author === AUTHOR_BY_DEFAULT ? "p-4" : ""}>
                {message.message}
              </p>
              <time
                className={
                  message.author === AUTHOR_BY_DEFAULT
                    ? "text-gray-400 text-[0.9rem] block text-end pr-2 pb-1"
                    : "text-gray-400 text-[0.9rem] block pr-2 pb-1"
                }
              >
                {new Date(message.createdAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",

                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </time>
            </div>
            {message.status === "error" && (
              <div className="flex items-center gap-2 text-sm w-full justify-end">
                <span className="text-red-400">Failed to send</span>

                <button
                  onClick={() => handleRetryMessage(message._id)}
                  disabled={isLoading}
                  title="Retry"
                  className="rounded-lg text-red-500 cursor-pointer"
                >
                  ⟳
                </button>
              </div>
            )}
            {message.status === "sending" && (
              <div className="mt-2 text-sm text-slate-400 text-right">Sending...</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;
