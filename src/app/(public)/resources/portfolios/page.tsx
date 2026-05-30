import { Metadata } from "next";
import Portfolios from "./portfolios.mdx";

export const metadata: Metadata = {
  title: "PORTFOLIOS",
  description: "sites i think are cool",
};

export default function PortfoliosPage() {
  return <Portfolios />;
}
