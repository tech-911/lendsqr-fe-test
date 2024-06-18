"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";

function Back() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div
      onClick={handleBack}
      className="flex flex-row items-center gap-[14.41px] text-[#545F7D] hover:text-[#545f7d8c] text-[16px] leading-[18.77px] font-[400] cursor-pointer group"
    >
      <Icon
        icon="pajamas:arrow-left"
        className="text-[#545F7D] text-[26px] group-hover:text-[#545f7d7e]"
      />
      Back to Users
    </div>
  );
}

export default Back;
