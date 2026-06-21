import { Metadata } from "next";
import Impossible from "./impossible.mdx";

export const metadata: Metadata = {
  title: "IMPOSSIBLE",
  description: "do the impossible",
};

export default function ImpossiblePage() {
  return <Impossible />;
}
