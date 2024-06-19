"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function UserDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const id = searchParams?.get("id");
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="px-[60px] py-[60px] w-full bg-[#FBFBFB] box-border">
      Details
    </div>
  );
}
