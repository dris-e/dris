import { Metadata } from "next";
import Startups from "./startups.mdx";

export const metadata: Metadata = {
  title: "STARTUPS",
  description: "links to resources for startups",
};

export default function StartupsPage() {
  return <Startups />;
}
