import { cva, VariantProps } from "class-variance-authority";

import { Button as ButtonBase } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sizeVariants = {
  default: "px-6",
  sm: "px-4",
  lg: "px-8",
  icon: "px-4",
};

const roundedVariants = {
  default: "rounded-full",
  sm: "rounded-md",
  lg: "rounded-lg",
};

export const buttonVariants = cva(
  "group bg-gradient-to-b active:bg-gradient-to-t border-[0.5px] shadow-sm active:shadow-md font-semibold active:scale-97 hover:scale-103 transition-scale-shadow-colors-gradient relative z-0 overflow-hidden",
  {
    variants: {
      variant: {
        lime: "from-lime-200 via-lime-500 to-lime-100 text-lime-900 border-lime-800",
        aqua: "from-cyan-200 via-cyan-500 to-cyan-100 text-cyan-900 border-cyan-800",
        lilac: "from-purple-200 via-purple-500 to-purple-100 text-purple-900 border-purple-800",
        cherry: "from-red-200 via-red-500 to-red-100 text-red-900 border-red-800",
        daisy: "from-yellow-200 via-yellow-500 to-yellow-100 text-yellow-900 border-yellow-800",
        silver: "from-gray-200 via-gray-500 to-gray-100 text-gray-900 border-gray-800",
        frosted: "from-gray-200 via-gray-300 to-gray-100 text-gray-600 border-gray-800",
        minimal: "bg-gray-50 text-gray-900 border-gray-300 hover:bg-gray-100 text-gray-600 hover:text-gray-800",
      },
      size: sizeVariants,
      rounded: roundedVariants,
    },
    defaultVariants: {
      variant: "lime",
      size: "default",
      rounded: "default",
    },
  }
);

export const innerGradientVariants = cva(
  "bg-gradient-to-b transition-colors absolute inset-[2.5px] rounded-full shadow-xs border-t-[0.5px] overflow-hidden",
  {
    variants: {
      variant: {
        lime: "from-lime-400 to-lime-200 group-hover:from-lime-500 group-hover:to-lime-300 border-lime-100",
        aqua: "from-cyan-400 to-cyan-200 group-hover:from-cyan-500 group-hover:to-cyan-300 border-cyan-100",
        lilac: "from-purple-400 to-purple-200 group-hover:from-purple-500 group-hover:to-purple-300 border-purple-100",
        cherry: "from-red-400 to-red-200 group-hover:from-red-500 group-hover:to-red-300 border-red-100",
        daisy: "from-yellow-400 to-yellow-200 group-hover:from-yellow-500 group-hover:to-yellow-300 border-yellow-100",
        frosted: "from-gray-200 to-white group-hover:from-gray-300 group-hover:to-gray-50 border-gray-100",
        silver: "from-gray-400 to-gray-200 group-hover:from-gray-500 group-hover:to-gray-300 border-gray-100",
      },
      rounded: roundedVariants,
    },
    defaultVariants: {
      variant: "lime",
    },
  }
);

export const shadowTextVariants = cva(
  "absolute select-none pointer-events-none inset-0 z-9 translate-y-[0.5px] flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        lime: "text-lime-100",
        aqua: "text-cyan-100",
        lilac: "text-purple-100",
        cherry: "text-red-100",
        daisy: "text-yellow-100",
        frosted: "text-gray-200",
        silver: "text-gray-100",
      },
      size: sizeVariants,
    },
    defaultVariants: {
      variant: "lime",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  rounded?: "default" | "sm" | "lg";
}

export function Button({ children, ...props }: ButtonProps) {
  const { variant, size, className, rounded } = props;

  return (
    <ButtonBase
      {...props}
      className={cn(buttonVariants({ variant, size, rounded }), className, "border-border")}
      size={size}
      variant="default"
    >
      <div className={cn("relative z-10 w-full flex items-center justify-center gap-2 pointer-events-none", className)}>
        {children}
      </div>
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
