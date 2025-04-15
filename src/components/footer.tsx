import config from "@/constants/config";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex font-mono text-xs absolute bottom-0 w-full h-12 text-gray-600 border-t border-gray-200 bg-gray-100">
      <div className="w-full flex justify-between items-center max-w-xl mx-auto">
        <p>
          © {new Date().getFullYear()} {config.SITE_NAME}
        </p>

        <p>
          🟦 MADE BY{" "}
          <Link href="https://dris.one" target="_blank" className="underline">
            DRIS
          </Link>
          ®
        </p>
      </div>
    </footer>
  );
}
