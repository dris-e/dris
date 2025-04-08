import config from "@/constants/config";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <Image src="/assets/images/icon.svg" alt="icon" width={28} height={28} />
      <h1 className={"text-xl font-bold"}>{config.SITE_NAME}</h1>
    </div>
  );
}
