"use client";

import React, { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <div className="bg-cyan-600 p-4">
      <div className="mx-auto flex max-w-4xl">
        <input
          className="flex-1 rounded-md border-2 border-cyan-700 bg-white p-[8px] my-[8px] ml-[8px] mr-[4px] outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button
        className="rounded-md bg-red-400 px-6 py-3 font-semibold text-white my-[8px] ml-[4px] mr-[8px]"
        >Send</button>
      </div>
    </div>
  );
};

export default MessageInput;
