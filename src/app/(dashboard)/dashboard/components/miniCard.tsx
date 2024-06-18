"use client";

import React from "react";
import styles from "./minCard.module.scss";
import { SVGIconProps, miniCardType } from "./miniCardsData";
import { cn } from "@/lib/utils";

export function MiniCard({
  SVGIcon,
  bgColor,
  heading,
  id,
}: miniCardType<SVGIconProps>) {
  return (
    <div className={styles.miniCardContainer}>
      <div style={{ backgroundColor: bgColor }} className={styles.iconWrap}>
        <SVGIcon />
      </div>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.value}>2,453</p>
    </div>
  );
}
