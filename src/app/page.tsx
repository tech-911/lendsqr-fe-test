"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  const handleDashboard = () => {
    router.push(`/dashboard`);
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      handleDashboard();
    }
  }, []);

  return (
    <main className="flex flex-col items-center w-full gap-4 pt-[20%]">
      <h1 className="text-[20px] text-[#33357D] font-extrabold">Home</h1>
      <p className="text-[#404040] text-[14px] text-center w-[30%]">
        welcome to lendsqr dashboard
      </p>
    </main>
  );
}
