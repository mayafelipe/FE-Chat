"use client";
import React, { FC, JSX } from "react";
import { MessageListProps } from "../interface/message-list.interface";

const MessageList: FC<MessageListProps> = ({ messages }): JSX.Element => {
  
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        {messages?.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user1"
                ? "lg:max-w-[60%] max-w-[68%] self-end rounded-2xl bg-yellow-100 border border-gray-300"
                : "lg:max-w-[60%] max-w-[68%] self-start rounded-2xl bg-white border-gray-300 p-4"
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
              dateTime={message.date}
            >
              {message.date}
            </time>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
