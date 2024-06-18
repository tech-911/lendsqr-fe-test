"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Back from "./components/goBack";
import { Button } from "@/components/ui/button";

export default function UserDetail({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const id = searchParams?.get("id");

  return (
    <div className="px-[60px] py-[60px] w-full bg-[#FBFBFB] box-border">
      <Back />
      <div className="mt-5 w-full flex flex-row items-center justify-between gap-8">
        <p className="text-headerColor text-[24px] leading-[28.15px] font-[500]">
          Users
        </p>
        <div className="flex flex-row items-center gap-5">
          <Button variant="outline" className=""></Button>
        </div>
      </div>
    </div>
  );
}
