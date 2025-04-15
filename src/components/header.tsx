import config from "@/constants/config";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between font-mono items-center w-full py-4  text-gray-600">
      <Link href="/" className="font-bold text-lg">
        {config.SITE_NAME}
      </Link>

      <div className="flex items-center gap-2 underline text-sm">
        <Link href="/">HOME</Link>
        <Link href="/">GITHUB</Link>
        <Link href="/">DRIS</Link>
      </div>
    </header>
  );
}
