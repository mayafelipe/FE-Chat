export interface Message {
  _id: string;
  message: string;
  createdAt: string;
  author: string;
}

export type SendMessageInput = Pick<Message, "message" | "author">;
