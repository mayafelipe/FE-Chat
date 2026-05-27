"use client"
import MessageInput from "../../message/components/message-input"
import MessageList from "../../message/components/message-list"
import { ChatSiderbar } from "./chat-sidebar"

export function ChatLayout() {
return(
    <main className="flex h-screen overflow-hidden bg-[url(/images/chat-bg.png)] bg-repeat bg-contain">
        <ChatSiderbar />
        <section className="flex flex-1 flex-col">
            <MessageList />
            <MessageInput />
        </section>
    </main>
)
}