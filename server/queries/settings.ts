import { cache } from "react";
import prisma from "../prisma";
import { getPrismaErrorMessage } from "../prisma-errors";

/**
 * Get settings
 * Cached function - will only fetch once per request
 * @returns Settings
 * @throws Error if database error occurs
 * @throws Error if settings not found
 */
export const getSettings = cache(async () => {
  try {
    // Settings is a singleton - there should only be one record
    const settings = await prisma.settings.findFirst();
    return settings;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error(getPrismaErrorMessage(error));
  }
});
