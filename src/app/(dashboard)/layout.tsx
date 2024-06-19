"use client";

// import type { Metadata } from "next";
import React, { useEffect, useState } from "react";
import NavBar from "./_components/nav";
import SideBar from "./_components/sideBar";
import styles from "./_components/dashboard.module.scss";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

// export const metadata: Metadata = {
//   title: "Users Dashboard",
//   description: "Users Dashboard",
// };
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      const hasToken = !!window.localStorage.getItem("token");
      if (!hasToken) {
        router.push("/signin");
      }
    }
  }, [router]);

  return (
    <div className={styles.dashboardLayoutContainer}>
      <div className={styles.navWrap}>
        <NavBar />
      </div>
      <div className={styles.bodyWrap}>
        <div className={styles.sideBarWrap}>
          <ScrollArea
            thumbColor="bg-transparent"
            className={styles.sideBarContainer}
          >
            <SideBar />
          </ScrollArea>
        </div>
        <div className={styles.childrenWrap}>
          <div className={styles.childrenContainer}>{children}</div>
        </div>
      </div>
    </div>
  );
}
