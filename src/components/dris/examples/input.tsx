import { ArrowRightIcon } from "@radix-ui/react-icons";
import ComponentContainer from "../../component-container";
import { Button } from "../button";
import { Input } from "../input";

export function InputExample() {
  return (
    <ComponentContainer>
      <div className="flex gap-2">
        <Input variant="frosted" placeholder="Enter your email.." type="email" className="w-fit" />
        <Button variant="aqua" rounded="md">
          Join
          <ArrowRightIcon />
        </Button>
      </div>
    </ComponentContainer>
  );
}
