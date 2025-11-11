import type { SortResult } from "@/types/properties";

/**
 * Parse sort string (e.g., "price_asc") into Prisma orderBy format
 * Returns default { field: "createdAt", order: "desc" } if sort is invalid or undefined
 */
export const parsePropertySort = (sort?: string): SortResult => {
  if (!sort) {
    return { field: "createdAt", order: "desc" };
  }

  const [field, order] = sort.split("_");

  // Validate field and order
  if (
    (field === "price" || field === "area" || field === "createdAt") &&
    (order === "asc" || order === "desc")
  ) {
    return {
      field: field as "price" | "area" | "createdAt",
      order: order as "asc" | "desc",
    };
  }

  // Fallback to default if invalid
  return { field: "createdAt", order: "desc" };
};
