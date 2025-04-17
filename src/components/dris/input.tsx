import { VariantProps } from "class-variance-authority";

import { Input as InputBase } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { inputVariants } from "./variant-class";
import { baseStyles, defaultProps } from "./variants";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  size?: (typeof defaultProps)[number];
  rounded?: (typeof defaultProps)[number];
}

export function Input({ ...props }: InputProps) {
  const { className, size, variant, rounded, ...restProps } = props;

  return (
    <div className={cn("relative w-full", className)}>
      <InputBase
        {...restProps}
        className={cn(
          inputVariants({ size, variant, rounded }),
          baseStyles.border,
          baseStyles.animate,
          "text-sm",
          { "text-white": variant === "silver", "placeholder:text-gray-200": variant === "silver" },
          className
        )}
      />
    </div>
  );
}
