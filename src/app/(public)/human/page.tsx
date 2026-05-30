import { Metadata } from "next";
import Human from "./human.mdx";

export const metadata: Metadata = {
  title: "HUMAN",
  description: "saving humanity",
};

export default function HumanPage() {
  return <Human />;
}
