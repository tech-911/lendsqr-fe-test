"use client";

import React from "react";

export default function DetailsTextGroup({
  head1,
  head2,
}: {
  head1: string;
  head2: string;
}) {
  return (
    <div className="flex flex-col items-start gap-[8px]">
      <p className="text-[#545F7D] text-[12px] leading-[14.08px] font-[400] whitespace-nowrap">
        {head1}
      </p>
      <p className="text-[#545F7D] text-[16px] leading-[18.77px] font-[500]  whitespace-nowrap">
        {head2}
      </p>
    </div>
  );
}
