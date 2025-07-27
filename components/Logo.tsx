import Link from "next/link";
import React from "react";

const MobileLogo = () => {
  return (
    <Link href={"/"}>
      <div className="flex uppercase tracking-wider">
        <div className="text-primary font-extrabold    px-2 text-lg p-2 border-4 border-primary bg-transparent">
          vu
        </div>
      </div>
    </Link>
  );
};

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex md:hidden">
        <MobileLogo />
      </div>
      <div className="md:flex tracking-wider uppercase text-lg hidden">
        <div className="text-primary font-extrabold border-r-0 pr-0.5    p-2 border-4 border-primary bg-transparent">
          video
        </div>
        <div className="text-white font-extrabold pl-0.5 border-l-0  p-2 border-4 border-white bg-transparent">
          uploader
        </div>
      </div>
    </Link>
  );
};

export default Logo;
