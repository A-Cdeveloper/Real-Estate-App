import { Prisma } from "@prisma/client";

/**
 * Type for property with owner information (id, name, email)
 * Used for getPropertyById query result
 */
export type PropertyWithOwner = Prisma.PropertyGetPayload<{
  include: {
    owner: {
      select: {
        id: true;
        name: true;
        email: true;
      };
    };
  };
}>;
