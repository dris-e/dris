import { Label as BaseLabel } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function Label({ ...props }: React.ComponentProps<typeof BaseLabel>) {
  const { className } = props;

  return <BaseLabel {...props} className={cn("text-muted-foreground font-normal text-xs", className)} />;
}
