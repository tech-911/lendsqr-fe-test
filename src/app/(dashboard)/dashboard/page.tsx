"use client";

import React from "react";
import { MiniCard } from "./components/miniCard";
import { miniCardsData } from "./components/miniCardsData";
import { DataTable } from "./components/Table/table";

export default function Signin() {
  return (
    <div className="px-[60px] pt-[60px] w-full bg-[#FBFBFB]">
      <p className="text-headerColor text-[24px] leading-[28.15px] font-[500] mb-[50px]">
        Users
      </p>
      <div className="w-full flex flex-row items-start flex-wrap gap-[26px] mb-10">
        {miniCardsData.map(({ bgColor, SVGIcon, heading, id }) => {
          return (
            <MiniCard
              SVGIcon={SVGIcon}
              bgColor={bgColor}
              heading={heading}
              id={id}
            />
          );
        })}
      </div>
      <DataTable />
    </div>
  );
}
