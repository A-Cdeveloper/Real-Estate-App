import { User } from "@prisma/client";
import { UpdateUser } from "./user";
import { ActionState } from "./action-state";

/**
 * Profile types - for user self-service (no role changes)
 */
export type UpdateProfile = Omit<UpdateUser, "role">;

export type CurrentUser = Omit<
  User,
  "password" | "passwordResetToken" | "passwordResetTokenExpiry"
>;

export type ProfileActionState<TData = unknown> = ActionState<
  TData,
  { user?: CurrentUser }
>;
