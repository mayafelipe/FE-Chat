import { httpClient } from "../../../lib/http-client";
import { Message, SendMessageInput } from "../types/chat.type";

export async function sendMessageRequest(
  payload: SendMessageInput,
): Promise<Message> {
  const response = await httpClient<Message>("/api/v1/messages", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log("Sda", response)
  return response;
}

export async function getMessagesRequest(): Promise<Message[]> {
  const response = await httpClient<Message[]>("/api/v1/messages", {
    method: "GET",
  });

  return response;
}
