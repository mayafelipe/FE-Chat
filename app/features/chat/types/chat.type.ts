type TAuthor = "user" | "assistant" | string;

export interface Message {
  _id: string;
  message: string;
  createdAt: string;
  author: TAuthor;
}

export type SendMessageInput = Pick<Message, "message" | "author">;

export interface MessageListProps {
  messages: Message[];
}
