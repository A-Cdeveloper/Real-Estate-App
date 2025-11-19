import prisma from "@/server/prisma";
import { getSession } from "@/server/auth/session";
import type { CurrentUser } from "@/types/user";

export async function getCurrentUserFromSession(): Promise<CurrentUser | null> {
  const session = await getSession();

  if (!session?.userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.userId,
    },
  });

  return user;
}
