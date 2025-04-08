import config from "@/constants/config";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="md:px-0 px-6 pt-32 pb-8 w-full mx-auto container">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row text-left">
        <div className="flex w-full max-w-96 shrink flex-col justify-between gap-6 items-start">
          <h2 className={"text-xl font-bold"}>{config.SITE_NAME}</h2>
          <p className="text-sm text-muted-foreground">{config.SITE_DESCRIPTION}</p>
          <ul className="flex items-center space-x-6 text-muted-foreground">
            <li className="font-medium hover:text-primary">
              <a href="#">
                <FaInstagram className="size-6" />
              </a>
            </li>
            <li className="font-medium hover:text-primary">
              <a href="#">
                <FaFacebook className="size-6" />
              </a>
            </li>
            <li className="font-medium hover:text-primary">
              <a href="#">
                <FaTwitter className="size-6" />
              </a>
            </li>
            <li className="font-medium hover:text-primary">
              <a href="#">
                <FaLinkedin className="size-6" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-6 lg:gap-20">
          {config.FOOTER.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-6 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary hover:underline">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
        <p>
          © {new Date().getFullYear()} {config.SITE_NAME}. All rights reserved.
        </p>
        <ul className="flex justify-center gap-4 lg:justify-start">
          <li className="hover:text-primary hover:underline">
            <Link href="/terms-of-service"> Terms of Service</Link>
          </li>
          <li className="hover:text-primary hover:underline">
            <Link href="/privacy-policy"> Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
