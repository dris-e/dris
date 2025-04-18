import { Metadata } from "next";
import Resources from "./resources.mdx";

export const metadata: Metadata = {
  title: "RESOURCES",
  description: "links i've found interesting, helpful, inspiring, or cool (chrome bookmarks).",
};

export default function ResourcesPage() {
  return <Resources />;
}
