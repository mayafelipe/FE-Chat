import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessageInput from "../../components/message-input";
import { describe, expect, it } from "vitest";

describe("MessageInput", () => {
  it("should send message when pressing Enter", async () => {
    render(<MessageInput />);

    const input = screen.getByPlaceholderText(/Message/i);

    await userEvent.type(input, "hello{enter}");

    expect(input).toHaveValue("");
  });
});
