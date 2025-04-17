import config from "@/constants/config";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between font-mono items-center w-full py-4 text-gray-600" id="top">
      <Link href="/" className="font-bold text-lg hover:underline">
        {config.SITE_NAME}
      </Link>

      <div className="flex items-center gap-2 underline text-sm">
        <Link href={config.GITHUB_URL} target="_blank">
          GITHUB
        </Link>
        <Link href="https://dris.one" target="_blank">
          DRIS
        </Link>
      </div>
    </header>
  );
}
