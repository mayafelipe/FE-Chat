"use client";
import React, { FC, JSX, useEffect, useRef } from "react";
import { MessageListProps } from "../interface/message-list.interface";

const MessageList: FC<MessageListProps> = ({ messages }): JSX.Element => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex max-w-160 flex-col gap-4 px-6 lg:px-0 pt-4">
        {messages?.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user1"
                ? "lg:max-w-[60%] max-w-[68%] self-end rounded-2xl bg-yellow-100 border border-gray-300 min-w-37.5"
                : "lg:max-w-[60%] max-w-[68%] self-start rounded-2xl bg-white border-gray-300 p-4 min-w-37.5"
            }
          >
            <span
              className={
                message.role === "user1"
                  ? "hidden"
                  : "text-gray-400 text-[0.9rem]"
              }
            >
              {message.user}
            </span>
            <p className={message.role === "user1" ? "p-4" : ""}>
              {message.content}
            </p>
            <time
              className={
                message.role === "user1"
                  ? "text-gray-400 text-[0.9rem] block text-end pr-2 pb-1"
                  : "text-gray-400 text-[0.9rem] block pr-2 pb-1"
              }
            >
              {new Date(message.date).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",

                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
              })}
            </time>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default MessageList;
