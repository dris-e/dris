import { VariantProps } from "class-variance-authority";

import { Textarea as TextareaBase } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { inputVariants } from "./variant-class";
import { baseStyles, defaultProps } from "./variants";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  size?: (typeof defaultProps)[number];
  rounded?: (typeof defaultProps)[number];
}

export function Textarea({ ...props }: TextareaProps) {
  const { className, size, variant, rounded, ...restProps } = props;

  return (
    <div className={cn("relative w-full", className)}>
      <TextareaBase
        {...restProps}
        className={cn(
          inputVariants({ size, variant, rounded }),
          baseStyles.border,
          baseStyles.animate,
          "resize-none h-32 py-2.5 text-sm",
          { "text-white": variant === "silver", "placeholder:text-gray-200": variant === "silver" },
          className
        )}
      />
    </div>
  );
}
