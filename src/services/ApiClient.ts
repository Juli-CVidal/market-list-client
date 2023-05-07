export async function fetchJson<T>(
  url: string,
  requestMethod: string,
  requestBody?: any
): Promise<T> {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  const options: RequestInit = {
    method: requestMethod,
    headers,
  };
  if (requestBody) {
    options.body = JSON.stringify(requestBody);
  }

  return await fetch(url, options).then((response) => response.json());
}
