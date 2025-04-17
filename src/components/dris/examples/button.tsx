import ComponentContainer from "@/components/component-container";
import { ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon, PlayIcon } from "@radix-ui/react-icons";
import { Button } from "../button";

export function ButtonExample() {
  return (
    <ComponentContainer className="gap-4">
      <div className="flex gap-4">
        <Button variant="silver">
          <DoubleArrowLeftIcon />
        </Button>
        <Button size="icon" rounded="sm" variant="silver">
          <PlayIcon />
        </Button>
        <Button variant="silver">
          <DoubleArrowRightIcon />
        </Button>
      </div>

      <Button rounded="sm" variant="lilac" className="font-semibold justify-between">
        Join the waitlist
        <ArrowRightIcon />
      </Button>
    </ComponentContainer>
  );
}
