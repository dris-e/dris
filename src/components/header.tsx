import config from "@/constants/config";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between font-mono items-start w-full py-4 text-gray-600" id="top">
      <Link href="/" className="h-6 w-6 aspect-square bg-custom hover:opacity-100 opacity-80"></Link>
      <div className="flex items-center gap-2 underline text-sm">
        {Object.entries(config.HEADER).map(([key, value]) => (
          <Link href={value} target="_blank" key={key}>
            {key.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
}
