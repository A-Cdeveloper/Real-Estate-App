import prisma from "@/server/prisma";
import { CurrentUser, UserWithProperties } from "@/types/user";
import { getPrismaErrorMessage } from "../prisma-errors";
import { ensureAdminAccess } from "../auth/ensureAdminAccess";

/**
 * Fetches all users with the fields needed for backend profile views, including property counts.
 * Admin-only query - requires admin access.
 */
export const getUsers = async ({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}): Promise<{
  users: UserWithProperties[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  await ensureAdminAccess();
  try {
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        include: {
          _count: {
            select: {
              properties: true,
            },
          },
        },
        orderBy: [{ role: "asc" }, { isActive: "desc" }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.user.count(),
    ]);

    return {
      users: users.map(({ _count, ...user }) => ({
        ...user,
        propertyCount: _count?.properties ?? 0,
      })),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  } catch (error) {
    console.error("Database error:", error);
    throw new Error(getPrismaErrorMessage(error));
  }
};
/**
 * Fetches a user profile by id with the fields needed for backend profile views.
 */
export async function getUserById(userId: string): Promise<CurrentUser | null> {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}
