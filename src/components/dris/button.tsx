import { Button as ButtonBase } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { baseVariants, innerGradientVariants, shadowTextVariants } from "./variant-class";
import { baseStyles, defaultProps } from "./variants";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof baseVariants> {
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  rounded?: (typeof defaultProps)[number];
}

export function Button({ children, ...props }: ButtonProps) {
  const { variant, size, className, rounded } = props;

  return (
    <ButtonBase
      {...props}
      className={cn(baseVariants({ variant, size, rounded }), baseStyles.border, className)}
      size={size}
      variant="default"
    >
      <div className={cn(baseStyles.child, className)}>{children}</div>
      {variant !== "minimal" && (
        <>
          <div aria-hidden className={cn(shadowTextVariants({ variant, size }), className)}>
            {children}
          </div>
          <div className={cn(innerGradientVariants({ variant, rounded }))} />
        </>
      )}
    </ButtonBase>
  );
}
