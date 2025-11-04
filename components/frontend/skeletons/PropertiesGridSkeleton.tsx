import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { ITEMS_PER_PAGE } from "@/lib/constants";

const PropertyItemSkeleton = () => (
  <Card className="overflow-hidden p-0">
    <Skeleton className="h-54 w-full" />
    <CardContent className="p-6 pt-0 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex items-center justify-between pt-2">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-10 w-28" />
      </div>
    </CardContent>
  </Card>
);

const PropertiesGridSkeleton = () => {
  return (
    <>
      {/* Meta skeleton */}
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-10 w-40" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
          <PropertyItemSkeleton key={index} />
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-center">
        <Skeleton className="h-10 w-64" />
      </div>
    </>
  );
};

export default PropertiesGridSkeleton;
