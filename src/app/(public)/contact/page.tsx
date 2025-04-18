import { Metadata } from "next";
import Contact from "./contact.mdx";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "contact me @ elamri [at] dris [dot] llc",
};

export default function ContactPage() {
  return <Contact />;
}
