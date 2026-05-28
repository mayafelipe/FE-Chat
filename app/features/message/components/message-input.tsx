"use client";

import React, { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <div className="bg-cyan-600 p-4">
      <div className="mx-auto flex max-w-4xl">
        <input
          className="flex-1 rounded-md border-2 border-cyan-700 bg-white p-2 my-2 ml-2 mr-1 outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button
        className="rounded-md bg-red-400 px-6 py-3 font-semibold text-white my-2 ml-1 mr-3"
        >Send</button>
      </div>
    </div>
  );
};

export default MessageInput;
