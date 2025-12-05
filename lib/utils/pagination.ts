/**
 * Generate URL for a specific page with query parameters
 * Used by PaginationControls component to create navigation URLs
 */
export function getPageUrl(
  page: number,
  baseUrl: string = "",
  queryParams?: Record<string, string>
): string {
  const url = new URL(baseUrl, "http://localhost"); // dummy base, we only need searchParams
  url.searchParams.set("page", String(page));

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return `${baseUrl}?${url.searchParams.toString()}`;
}
