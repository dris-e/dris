import { VariantProps } from "class-variance-authority";

import { Badge as BadgeBase } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { baseVariants, innerGradientVariants, shadowTextVariants } from "./variant-class";
import { baseStyles, defaultProps } from "./variants";

export interface BadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof baseVariants> {
  asChild?: boolean;
  size?: (typeof defaultProps)[number];
  rounded?: (typeof defaultProps)[number];
}

export function Badge({ children, ...props }: BadgeProps) {
  const { variant, className, size, rounded } = props;

  return (
    <BadgeBase
      {...props}
      className={cn(baseVariants({ variant, size, rounded }), baseStyles.border, "py-1.5", className)}
      variant="default"
    >
      <div className={cn(baseStyles.child, className)}>{children}</div>
      {variant !== "minimal" && (
        <>
          <div aria-hidden className={cn(shadowTextVariants({ variant }), className)}>
            {children}
          </div>
          <div className={cn(innerGradientVariants({ variant, rounded }), "inset-[2.5px]")} />
        </>
      )}
    </BadgeBase>
  );
}
