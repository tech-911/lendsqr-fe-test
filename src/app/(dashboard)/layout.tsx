"use client";

// import type { Metadata } from "next";
import React from "react";
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
  let isAuth = false;
  const router = useRouter();

  if (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  ) {
    // LocalStorage is available, perform operations
    // Read or write data using window.localStorage
    isAuth = !!localStorage.getItem("token");
  }

  if (!isAuth && typeof window !== "undefined") {
    router.push("/signin");
  }
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
          <ScrollArea className={styles.childrenContainer}>
            {children}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
