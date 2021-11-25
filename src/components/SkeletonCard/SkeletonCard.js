import { CardContent, Skeleton, Stack } from "@mui/material";
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="mb-10">
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={250} height={158} />
          <Skeleton variant="rectangular" width={250} height={20} />
          <Skeleton className="ml-20 rounded-md" variant="rectangular" width={60} height={20} />
      </Stack>
    </div>
  );
};

export default SkeletonCard;
