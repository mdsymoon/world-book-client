import { Skeleton, Stack } from "@mui/material";
import React from "react";

const FavSkeletonCard = () => {
  return (
    <div className="mb-10">
      <Stack spacing={1}>
        <div className="flex">
          <Skeleton
            className="rounded-md w-48 sm:w-44 md:w-52"
            variant="rectangular"
            height={120}
          />
          <div className="mt-3">
            <Skeleton
              className="ml-3 rounded-md w-36 sm:w-28 md:w-32"
              variant="rectangular"
              height={15}
            />
            <Skeleton
              className="ml-3 mt-5 rounded-md w-28 sm:w-24"
              variant="rectangular"
              height={10}
            />
            <Skeleton
              className="ml-3 mt-5 rounded-md"
              variant="rectangular"
              width={60}
              height={25}
            />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default FavSkeletonCard;
