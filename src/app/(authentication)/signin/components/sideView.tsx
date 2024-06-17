"use client";

import React from "react";
import Image from "next/image";
import LendsqrLogo from "@/assets/img/lendsqrlogo.png";
import Hero from "@/assets/img/pablo-sign-in.png";

export function SideView() {
  return (
    <div className="h-full overflow-hidden flex flex-row items-center justify-center px-[67px]">
      <Image
        className="absolute top-[106px] left-[97px]"
        src={LendsqrLogo}
        alt={"bg"}
      />
      <Image className="" src={Hero} alt={"bg"} />
    </div>
  );
}
