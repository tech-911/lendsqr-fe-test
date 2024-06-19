"use client";

import React, { useEffect, useState } from "react";
import styles from "./minCard.module.scss";
import { SVGIconProps, miniCardType } from "./miniCardsData";
import { cn } from "@/lib/utils";

export function MiniCard({
  SVGIcon,
  bgColor,
  heading,
  id,
}: miniCardType<SVGIconProps>) {
  const [getValue, setGetValue] = useState<any[]>();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      setGetValue(
        JSON.parse(window.localStorage.getItem("userData") as any) as any[]
      );
    }
  }, []);

  const dataValue = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      if (heading === "USERS") {
        return getValue?.length;
      } else if (heading === "ACTIVE USERS") {
        const userNumber = getValue?.filter((values) => {
          return values?.status === "active";
        });
        console.log("userNumber: ", userNumber);

        return userNumber?.length;
      } else if (heading === "USERS WITH LOANS") {
        const userNumber = getValue?.filter((values) => {
          return values?.status === "pending";
        });
        return userNumber?.length;
      } else if (heading === "USERS WITH SAVINGS") {
        const userNumber = getValue?.filter((values) => {
          return values?.status === "active";
        });
        return userNumber?.length;
      }
    }
  };

  // console.log("dataValue: ", dataValue());
  // console.log("heading: ", heading);

  return (
    <div className={styles.miniCardContainer}>
      <div style={{ backgroundColor: bgColor }} className={styles.iconWrap}>
        <SVGIcon />
      </div>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.value}>{dataValue()}</p>
      {/* <p className={styles.value}>2,453</p> */}
    </div>
  );
}
