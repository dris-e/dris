import { VariantProps } from "class-variance-authority";

import {
  Card as BaseCard,
  CardContent as BaseCardContent,
  CardDescription as BaseCardDescription,
  CardFooter as BaseCardFooter,
  CardHeader as BaseCardHeader,
  CardTitle as BaseCardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cardVariants } from "./variant-class";
import { baseStyles, defaultProps } from "./variants";

export interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  asChild?: boolean;
  size?: (typeof defaultProps)[number];
  rounded?: (typeof defaultProps)[number];
}

export function Card({ ...props }: CardProps) {
  const { className, variant, size, rounded } = props;

  return (
    <div className={cn(cardVariants({ variant, size, rounded }), baseStyles.animate, "w-full border-none", className)}>
      <BaseCard
        data-slot="card"
        {...props}
        className={cn(
          cardVariants({ rounded }),
          baseStyles.animate,
          "bg-white px-0 hover:bg-white gap-3 pb-6",
          "has-[>div[data-slot='card-footer']]:pb-3",
          className
        )}
      />
    </div>
  );
}

export function CardHeader({ ...props }: CardProps) {
  const { className } = props;

  return (
    <BaseCardHeader
      data-slot="card-header"
      {...props}
      className={cn(
        "px-4 border-b border-border [.border-b]:pb-2 has-[>div[data-slot='card-description']]:pb-3",
        className
      )}
    />
  );
}

export function CardTitle({ ...props }: CardProps) {
  const { className } = props;

  return <BaseCardTitle {...props} className={cn("font-semibold", className)} />;
}

export function CardDescription({ ...props }: CardProps) {
  const { className } = props;

  return (
    <BaseCardDescription data-slot="card-description" {...props} className={cn("font-normal text-xs", className)} />
  );
}

export function CardContent({ ...props }: CardProps) {
  const { className } = props;

  return <BaseCardContent data-slot="card-content" {...props} className={cn("px-4 font-normal", className)} />;
}

export function CardFooter({ ...props }: CardProps) {
  const { className } = props;

  return (
    <BaseCardFooter
      data-slot="card-footer"
      {...props}
      className={cn(
        "px-4 border-t border-border [.border-t]:pt-3 gap-2 justify-end",
        "[&>button]:text-xs [&>button]:px-3 [&>button]:active:shadow-sm",
        className
      )}
    />
  );
}
