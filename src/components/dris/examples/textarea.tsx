import { ArrowRightIcon } from "@radix-ui/react-icons";
import ComponentContainer from "../../component-container";
import { Button } from "../button";
import { Label } from "../label";
import { Textarea } from "../textarea";

export function TextareaExample() {
  return (
    <ComponentContainer>
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <Label htmlFor="message">Your Message*</Label>
        <Textarea id="message" variant="minimal" placeholder="Write a message.." />
        <Button variant="cherry" rounded="md">
          Add Comment
          <ArrowRightIcon />
        </Button>
      </div>
    </ComponentContainer>
  );
}
