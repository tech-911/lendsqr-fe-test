"use client";

import React from "react";
import DetailsTextGroup from "./detailsTextGroup";

export default function GroupedComponent({
  data,
}: {
  data: {
    heading: string;
    withBorder?: boolean;
    list: { head1: string; head2: string }[];
  };
}) {
  console.log("data?.withBorder: ", data?.withBorder);
  return (
    <div
      className={`w-full flex flex-col items-start gap-[30px]  pb-[28px] ${
        data?.withBorder === undefined || data?.withBorder === true
          ? "border-b border-b-[#E9ECF2]"
          : ""
      }`}
    >
      <p className="text-headerColor text-[16px] leading-[18.77px] font-[500]">
        {data?.heading}
      </p>
      <div className="flex flex-row items-end justify-start gap-[30px] 2xl:gap-[80px] flex-wrap w-full">
        {data?.list?.map(({ head1, head2 }, id) => {
          return <DetailsTextGroup key={id} head1={head1} head2={head2} />;
        })}
      </div>
    </div>
  );
}
