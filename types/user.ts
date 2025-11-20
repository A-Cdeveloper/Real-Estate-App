import { User } from "@prisma/client";

// User types
export type LoginUser = Pick<User, "id" | "email" | "role">;

export type CurrentUser = Omit<
  User,
  "password" | "passwordResetToken" | "passwordResetTokenExpiry"
>;
export type AddUser = Pick<User, "email" | "name" | "role"> & {
  password: string;
};
export type UpdateUser = Pick<User, "id" | "email" | "name" | "role"> & {
  password?: string;
};
export type DeleteUser = Pick<User, "id">;
