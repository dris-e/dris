"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

function DefaultButton({
  children,
  onClick,
  absolute,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  absolute?: boolean;
  disabled?: boolean;
}) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "p-0 rounded-none hover:text-gray-600 text-xs h-auto cursor-pointer font-mono hover:underline",
        absolute && "absolute top-2.5 right-3 underline"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export function Snippet({ children, title }: { children: React.ReactNode; title?: string }) {
  const [open, setOpened] = useState(false);

  return (
    <div className="relative w-full mb-4 shadow-xs">
      <DefaultButton onClick={() => setOpened(!open)} absolute>
        {open ? "CLOSE" : "OPEN"}
      </DefaultButton>
      <pre
        className={cn(
          "bg-gray-50 prose-p:last-of-type:mb-0 w-full font-mono text-xs p-3 py-2.5 border border-gray-200 text-gray-600 scroll-smooth overflow-auto",
          !open && "cursor-pointer hover:underline"
        )}
        onClick={!open ? () => setOpened(!open) : undefined}
      >
        <div className="w-full text-wrap">
          {open ? (
            <>
              {title}
              {children}
            </>
          ) : (
            title
          )}
        </div>
      </pre>
    </div>
  );
}

// prose-p:first-of-type:mt-0
