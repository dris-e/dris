import { Metadata } from "next";
import Human from "./human.mdx";

export const metadata: Metadata = {
  title: "HUMAN",
  description: "what if we could become 100% human?",
};

export default function HumanPage() {
  return <Human />;
}
