export async function httpClient<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        ...(options?.headers ?? {}),
      },
    },
  );

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}
