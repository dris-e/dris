import ComponentContainer from "@/components/component-container";
import Link from "next/link";
import { Badge } from "../badge";

export function BadgeExample() {
  return (
    <ComponentContainer>
      <Link href="/">
        <Badge variant="lime" size="lg">
          Launching Soon!
        </Badge>
      </Link>
    </ComponentContainer>
  );
}
