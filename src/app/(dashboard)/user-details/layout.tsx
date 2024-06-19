"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Back from "./components/goBack";
import { Button } from "@/components/ui/button";
import DetailNav from "./components/detailNav";
import styles from "./components/userdetail.module.scss";

export default function UserDetail({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const id = searchParams?.get("id");

  return (
    <div className="sm:px-[60px] px-[20px] py-[60px] w-full bg-[#FBFBFB] box-border">
      <Back />
      <div className="mt-5 w-full flex flex-row flex-wrap items-center justify-between gap-8 mb-10">
        <p className="text-headerColor text-[24px] leading-[28.15px] font-[500]">
          Users
        </p>
        <div className="flex flex-row items-center gap-5">
          <Button
            variant="outline"
            className="min-h-10 h-10 px-[16px] flex flex-col items-center justify-center hover:bg-transparent bg-transparent text-[#E4033B] hover:text-[#e4033ba2] border-[#E4033B] text-[14px] leading-[16.42px] font-[600]"
          >
            Blacklist User
          </Button>
          <Button
            variant="outline"
            className="min-h-10 h-10 px-[16px] flex flex-col items-center justify-center hover:bg-transparent bg-transparent text-[#39CDCC] hover:text-[#39cdcda6] border-[#39CDCC] text-[14px] leading-[16.42px] font-[600]"
          >
            Activate User
          </Button>
        </div>
      </div>
      <DetailNav />
      <div className={styles.detailChildrenWrapper}>{children}</div>
    </div>
  );
}
