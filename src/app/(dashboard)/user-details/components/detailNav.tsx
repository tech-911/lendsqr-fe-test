"use client";

import React from "react";
import styles from "../components/userdetail.module.scss";
import { Icon } from "@iconify/react";
import { detailNavLinkData } from "./linkData";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function DetailNav() {
  const router = useRouter();
  const pathName = usePathname();
  const handleLinkRout = (route: string) => {
    router.push(route);
  };
  return (
    <div className={styles.detailNavContainer}>
      <div className="flex flex-row items-center gap-[30px] flex-wrap">
        <div className="flex flex-row items-center gap-5">
          <div className="flex flex-col items-center justify-center h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] bg-[#DBE0EA] rounded-full">
            <Icon
              icon="lucide:user-round"
              className="text-[#213F7D] sm:text-[40px] text-[20px]"
            />
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <p className="text-headerColor sm:text-[22px] text-[16px] leading-[28.15px] font-[500]">
              Grace Effiom
            </p>
            <p className="text-[#545F7D] sm:text-[14px] text-[12px] leading-[16.42px] font-[400]">
              LSQFf587g90
            </p>
          </div>
        </div>
        <div className="border-x-[#DDDFE5] border-x  h-[100px] px-[30px] flex flex-col items-start justify-center gap-[10px]">
          <p className="text-[#545F7D] text-[14px] leading-[16.42px] font-[500]">
            User’s Tier
          </p>
          <div className="flex flex-row items-center">
            <Icon
              icon="gridicons:star"
              className="text-[#E9B200] text-[20px] gap-[5px]"
            />
            <Icon
              icon="gridicons:star-outline"
              className="text-[#E9B200] text-[20px]"
            />
            <Icon
              icon="gridicons:star-outline"
              className="text-[#E9B200] text-[20px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[8px]">
          <p className="text-headerColor sm:text-[22px] text-[16px]] leading-[28.15px] font-[500]">
            ₦200,000.00
          </p>
          <p className="text-[#213F7D] sm:text-[14px] text-[12px] leading-[16.42px] font-[400]">
            9912345678/Providus Bank
          </p>
        </div>
      </div>
      <div className={styles.linksScroll}>
        {detailNavLinkData.map(({ heading, id, link }) => {
          return (
            <p
              key={id}
              onClick={() => handleLinkRout(link)}
              className={`cursor-pointer w-[170px] pb-[10px] border-b-2 hover:border-b-primary text-[16px] leading-[19.09px] font-[400] whitespace-nowrap text-center ${
                link === pathName
                  ? "text-primary  border-b-primary"
                  : "text-[#000000CC]  border-b-transparent"
              }`}
            >
              {heading}
            </p>
          );
        })}
      </div>
    </div>
  );
}
