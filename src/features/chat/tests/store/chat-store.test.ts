import { act } from "@testing-library/react";
import { useChatStore } from "../../store/chat-store";
import { describe, expect, it } from "vitest";

describe("chat store", () => {
  it("should add optimistic message", async () => {
    await act(async () => {
      await useChatStore.getState().sendMessage({
        author: "Felipe Maya",
        message: "Hello World",
      });
    });

    const messages = useChatStore.getState().messages;

    expect(messages.length).toBeGreaterThan(0);
  });
});
