"use client"
export function ChatSiderbar() {
  return (
    <aside className="hidden w-72 border-r border-cyan-900 bg-cyan-600 p-4 lg:flex">
      <div className="w-full">
        <h2 className="text-2xl text-white font-bold">Chats</h2>
        <div className="mt-6 rounded-xl text-white bg-cyan-700 p-4">General Conversation</div>
      </div>
    </aside>
  );
}
