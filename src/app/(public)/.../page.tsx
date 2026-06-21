import { Metadata } from "next";
import Writing from "./writing.mdx";

export const metadata: Metadata = {
  title: "WRITING",
  description: "random thoughts, beliefs, and conclusions that might be wrong.",
};

export default function WritingPage() {
  return <Writing />;
}
