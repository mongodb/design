"use client";

import { useRouter } from "next/navigation";
import React from "react";

import Button from "@leafygreen-ui/button";
import { BasicEmptyState } from "@leafygreen-ui/empty-state";
// @ts-expect-error
import ArrowLeftIcon from "@leafygreen-ui/icon/dist/ArrowLeft";
import { Error } from "@/components/glyphs";

export default function NotFoundComponent() {
  const router = useRouter();

  return (
    <div>
      <BasicEmptyState
        title="500: Server error"
        description="The page may have moved or been deleted"
        graphic={<Error />}
        primaryButton={
          <Button
            leftGlyph={<ArrowLeftIcon />}
            onClick={() => router.push("/")}
          >
            Return to home
          </Button>
        }
      />
    </div>
  );
}
