"use client";

import React, { useEffect, useState } from "react";
import styles from "../components/userdetail.module.scss";
import { Icon } from "@iconify/react";
import { detailNavLinkData } from "./linkData";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { generateId } from "@/utls/fx";
import { getTableData } from "@/(dashboard)/dashboard/components/Table/data";

type getDataType = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
};

export default function DetailNav() {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const id = searchParams?.get("id");
  const router = useRouter();
  const pathName = usePathname();
  const handleLinkRout = (route: string) => {
    router.push(route);
  };
  const [randomId, setRandomId] = useState<string | undefined>("LSQFf587g90");
  let [getValue, setGetValue] = useState<getDataType>();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      getTableData()
        .then((res) => {
          if (res) {
            const data = JSON.parse(
              window.localStorage.getItem("userData") as any
            ) as any[];
            const filteredValueById = data?.filter((value) => {
              return value?.id === Number(id);
            });
            setGetValue(filteredValueById[0] as getDataType);
          }
        })
        .catch((error) => {
          console.log("fetching error from detail page: ", error as any);
        });
    }
  }, []);

  useEffect(() => {
    if (generateId() === undefined) {
      setRandomId(undefined);
    } else {
      setRandomId(generateId());
    }
  }, []);


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
              {getValue?.username}
            </p>
            <p className="text-[#545F7D] sm:text-[14px] text-[12px] leading-[16.42px] font-[400]">
              {generateId() === undefined || randomId === undefined ? (
                <Icon
                  icon="eos-icons:three-dots-loading"
                  className="text-primary text-[40px]"
                />
              ) : (
                randomId
              )}
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
