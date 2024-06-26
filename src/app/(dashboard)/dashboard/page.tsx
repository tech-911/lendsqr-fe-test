"use client";

import React, { useEffect, useState } from "react";
import { MiniCard } from "./components/miniCard";
import { miniCardsData } from "./components/miniCardsData";
import { DataTable } from "./components/Table/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Payment, columns } from "./components/Table/columns";
import { getTableData } from "./components/Table/data"; //-----------import mock data from MSW for 500 record
import { useRouter, useSearchParams } from "next/navigation";

export default function Dashboard() {
  const [tableData, setData] = useState<Payment[]>([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      getTableData()
        .then((res) => {
          if (res) {
            setData(JSON.parse(window.localStorage.getItem("userData") as any));
          }
        })
        .catch((error) => {
          console.log("Table data fetching error: ", error as any);
        });
    }
  }, []);

  const router = useRouter();
  return (
    <div className="sm:px-[60px] px-[20px] py-[60px] w-full bg-[#FBFBFB] box-border">
      <p className="text-headerColor text-[24px] leading-[28.15px] font-[500] mb-[40px]">
        Users
      </p>
      <ScrollArea className="mb-5">
        <div className="w-full flex flex-row items-start gap-[26px] mb-5">
          {miniCardsData.map(({ bgColor, SVGIcon, heading, id }) => {
            return (
              <MiniCard
                key={id}
                SVGIcon={SVGIcon}
                bgColor={bgColor}
                heading={heading}
                id={id}
              />
            );
          })}
        </div>
        <ScrollBar thumbColor="bg-primary/20" orientation="horizontal" />
      </ScrollArea>
      <DataTable data={tableData} columns={columns(router)} />
    </div>
  );
}
