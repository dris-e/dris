"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useComponent } from "../hooks/use-component";

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
        absolute && "absolute top-2.5 right-3 underline",
        disabled && "cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export function Code({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!children) return;

    navigator.clipboard.writeText(children as string);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative w-full mb-4">
      <DefaultButton onClick={handleCopy} absolute disabled={disabled}>
        {copied ? "COPIED" : "COPY"}
      </DefaultButton>
      <pre className="bg-gray-50 not-prose w-full font-mono text-xs p-3 py-2.5 border border-gray-200 text-gray-600 scroll-smooth overflow-auto max-h-48">
        {children}
      </pre>
    </div>
  );
}

export function Snippet({ name }: { name: string }) {
  const [showCode, setShowCode] = useState(false);
  const { code, loading, error, fetchCode, hasLoaded } = useComponent(name);

  const handleToggle = async () => {
    if (!hasLoaded && !loading) {
      await fetchCode();
    }
    setShowCode(!showCode);
  };

  return (
    <Code disabled={!hasLoaded && !loading}>
      {showCode ? (
        loading ? (
          "LOADING..."
        ) : error ? (
          `ERROR: ${error}`
        ) : (
          code
        )
      ) : (
        <DefaultButton onClick={handleToggle}>LOAD SNIPPET ({name})</DefaultButton>
      )}
    </Code>
  );
}
