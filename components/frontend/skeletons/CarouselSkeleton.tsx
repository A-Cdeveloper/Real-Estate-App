import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

type CarouselSkeletonProps = {
  itemsCount?: number;
  itemClassName?: string;
  renderSkeleton?: () => React.ReactNode;
};

const CarouselSkeleton = ({
  itemsCount = 3,
  itemClassName = "pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3",
  renderSkeleton,
}: CarouselSkeletonProps) => {
  const defaultSkeleton = () => (
    <Card className="overflow-hidden p-0">
      <Skeleton className="h-54 w-full" />
      <CardContent className="p-6 space-y-3">
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

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {Array.from({ length: itemsCount }).map((_, index) => (
          <CarouselItem key={index} className={itemClassName}>
            {renderSkeleton ? renderSkeleton() : defaultSkeleton()}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};

export default CarouselSkeleton;
