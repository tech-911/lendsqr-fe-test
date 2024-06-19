"use client";

import React, { useEffect, useState } from "react";
import styles from "./minCard.module.scss";
import { SVGIconProps, miniCardType } from "./miniCardsData";
import { Icon } from "@iconify/react";
import { getTableData } from "./Table/data";

export function MiniCard({
  SVGIcon,
  bgColor,
  heading,
  id,
}: miniCardType<SVGIconProps>) {
  let [getValue, setGetValue] = useState<any[]>([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      getTableData()
        .then((res) => {
          if (res) {
            setGetValue(
              JSON.parse(window.localStorage.getItem("userData") as any)
            );
          }
        })
        .catch((error) => {
          console.log("fetching error from mini card: ", error as any);
        });
    }
  }, []);

  const dataValue = () => {
    if (getValue?.length === 0) {
      return undefined;
    } else {
      if (heading === "USERS") {
        return getValue?.length;
      } else if (heading === "ACTIVE USERS") {
        const userNumber = getValue?.filter((values) => {
          return values?.status === "active";
        });
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

  return (
    <div className={styles.miniCardContainer}>
      <div style={{ backgroundColor: bgColor }} className={styles.iconWrap}>
        <SVGIcon />
      </div>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.value}>
        {dataValue() === undefined ? (
          <Icon
            icon="eos-icons:three-dots-loading"
            className="text-primary text-[40px]"
          />
        ) : (
          dataValue()
        )}
      </p>
    </div>
  );
}
