import { getCurrentUserFromSession } from "@/server/auth/getCurrentUserFromSession";
import Logout from "./Logout";
import UserAvatar from "./UserAvatar";

/**
 * UserArea component
 * Container component that displays user avatar and logout button
 * @returns The UserArea component
 */
const UserArea = async () => {
  const currentUser = await getCurrentUserFromSession();
  if (!currentUser) {
    return null;
  }
  return (
    <div className="flex items-center gap-3 px-3 py-1">
      <UserAvatar user={currentUser} />
      <Logout userId={currentUser.id} />
    </div>
  );
};

export default UserArea;
