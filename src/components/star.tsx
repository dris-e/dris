import config from "@/constants/config";
import { StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./dris/button";

export function Star({ text = "Star on Github" }: { text?: string }) {
  return (
    <Link href={config.GITHUB_URL} target="_blank">
      <Button variant="daisy" rounded="sm" className="text-sm">
        {text}
        <StarIcon />
      </Button>
    </Link>
  );
}
