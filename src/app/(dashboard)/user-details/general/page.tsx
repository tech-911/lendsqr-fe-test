"use client";

import React from "react";
import GroupedComponent from "../components/groupedInformation";
import { generalnfoData } from "./components/generalnfoData";

export default function General() {
  return (
    <div className="w-full flex flex-col items-start gap-[30px]">
      {generalnfoData?.map((data, id) => {
        return <GroupedComponent key={id} data={data} />;
      })}
    </div>
  );
}
