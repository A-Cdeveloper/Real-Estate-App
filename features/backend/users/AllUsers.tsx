"use client";
import GenericTable from "@/components/shared/GenericTable";
import { UserWithProperties } from "@/types/user";
import AddNewUser from "./add-edit/AddNewUser";
import { getColumns } from "./table/columns";
import PaginationControls from "@/components/shared/PaginationControls";

type AllUsersProps = {
  users: UserWithProperties[];
  total: number;
  currentUserId: string;
  totalPages: number;
  page: number;
};

const AllUsers = ({
  users,
  total,
  currentUserId,
  totalPages,
  page,
}: AllUsersProps) => {
  return (
    <div className="space-y-4 w-full xl:w-3/4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Total: {total}</span>
        <AddNewUser />
      </div>

      <GenericTable
        data={users}
        columns={getColumns(currentUserId)}
        currentUserId={currentUserId}
        className="text-sm text-muted-foreground w-full"
      />
      <PaginationControls
        currentPage={page}
        totalPages={totalPages}
        baseUrl="/users"
      />
    </div>
  );
};

export default AllUsers;
