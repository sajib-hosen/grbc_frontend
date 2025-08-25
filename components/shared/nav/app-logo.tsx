import { IMAGES } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const AppLogo = () => {
  return (
    <Link href={`/`} title="Go Home">
      <div className="flex items-center gap-2">
        {/* Logo Image */}
        <div>
          <Image
            src={IMAGES.logo}
            alt="logo"
            width={38}
            height={20}
            className="h-10"
          />
        </div>

        {/* Text */}
        <div className="font-sans">
          <h1 className="font-bold text-md sm:text-xl md:text-2xl bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
            RGBC
          </h1>

          <p className="text-[12px] sm:text-xs md:text-sm">Cricket System</p>
        </div>
      </div>
    </Link>
  );
};

export default AppLogo;
