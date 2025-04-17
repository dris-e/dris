import { cn } from "@/lib/utils";

export default function ComponentContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "w-full flex justify-start items-start max-w-md gap-3 mb-8 space-y-1 flex-wrap not-prose",
        className
      )}
    >
      {children}
    </div>
  );
}
