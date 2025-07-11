import { RequestError } from '@/errors';

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string>;
};

export async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', body, headers = {}, params } = options;

  // Build URL with query params if provided
  const url = new URL(endpoint, process.env.APP_BASE_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url.toString(), config);

    // Handle error responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new RequestError(
        response.status,
        errorData?.error || `Request failed with status ${response.status}`,
        errorData
      );
    }

    // Handle empty responses (like DELETE)
    if (
      response.status === 204 ||
      response.headers.get('content-length') === '0'
    ) {
      return {} as T;
    }

    return await response.json();
  } catch (error) {
    // Re-throw ApiError instances
    if (error instanceof RequestError) {
      throw error;
    }

    // Network errors or other issues
    if (error instanceof Error) {
      throw new RequestError(0, error.message || 'Network error occurred');
    }

    throw new RequestError(0, 'An unexpected error occurred');
  }
}
