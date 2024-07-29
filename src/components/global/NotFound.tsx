"use client";

import { useRouter } from "next/navigation";
import React from "react";

import Button from "@leafygreen-ui/button";
import { BasicEmptyState } from "@leafygreen-ui/empty-state";
// @ts-expect-error
import ArrowLeftIcon from "@leafygreen-ui/icon/dist/ArrowLeft";
import { NotFound as NotFoundGraphic } from "@/components/glyphs";

export function NotFound() {
  const router = useRouter();

  return (
    <div>
      <BasicEmptyState
        title="Sorry, we can’t find that page"
        description="The page may have moved or been deleted"
        graphic={<NotFoundGraphic />}
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
