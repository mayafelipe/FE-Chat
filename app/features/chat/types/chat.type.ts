type TAuthor = "user" | "assistant" | string;
export type MessageStatus = "sending" | "sent" | "error";

export interface Message {
  _id: string;
  message: string;
  createdAt: string;
  author: TAuthor;
  status?: MessageStatus;
}

export type SendMessageInput = Pick<Message, "message" | "author">;

export interface MessageListProps {
  messages: Message[];
}
