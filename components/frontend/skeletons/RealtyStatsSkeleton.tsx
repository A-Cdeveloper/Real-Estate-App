import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const StatWidgetSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-center justify-center gap-3 rounded-2xl bg-muted p-6 text-center shadow-lg",
        className
      )}
    >
      <Skeleton className="h-12 w-12" />
      <Skeleton className="h-4 w-32" />
    </div>
  );
};

const RealtyStatsSkeleton = () => {
  return (
    <div className="mt-0 lg:mt-15">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 h-full">
        <StatWidgetSkeleton />
        <StatWidgetSkeleton />
        <StatWidgetSkeleton />
      </div>
    </div>
  );
};

export default RealtyStatsSkeleton;
