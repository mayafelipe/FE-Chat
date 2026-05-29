import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const server = setupServer(
  http.get("http://localhost:3000/api/v1/messages", () => {
    return HttpResponse.json([
      {
        id: "1",
        role: "assistant",
        content: "Hello 👋",
        createdAt: new Date().toISOString()
      }
    ]);
  }),

  http.post("http://localhost:3000/api/v1/messages", async () => {
    return HttpResponse.json({
      success: true
    });
  })
);