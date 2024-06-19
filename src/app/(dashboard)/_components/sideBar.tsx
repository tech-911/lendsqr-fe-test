"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import SwitchOrganization from "@/assets/img/briefcase.png";
import Home from "@/assets/img/home.png";
import Logout from "@/assets/img/sign-out.png";
import { Icon } from "@iconify/react";
import { sidebarData } from "./sideBarData";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      window.localStorage.clear();
      router.push("/signin");
    }
  };
  return (
    <div className="w-full py-[39px]">
      <div className="w-full ml-[30px] mb-[41px] flex flex-col items-start gap-[52px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="text-[#213F7D] group hover:text-[#21407d7e] text-[16px] leading-[18.75px] font-[400] flex flex-row items-center gap-[10px] cursor-pointer">
              <Image className="" src={SwitchOrganization} alt={"switch"} />
              Switch Organization
              <Icon
                icon="iconamoon:arrow-down-2-light"
                className="text-[#213F7D] text-[26px] group-hover:text-[#21407d7e]"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-20 py-10"></DropdownMenuContent>
        </DropdownMenu>
        <div className="flex flex-row items-center gap-[10px] text-[#7A8CB1] text-[16px] leading-[18.75px] font-[400]">
          <Image className="" src={Home} alt={"Home"} />
          Dashboard
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-[30px] mb-[71px]">
        {sidebarData.map(({ section, list }, id) => {
          return (
            <div
              key={id}
              className="w-full flex flex-col items-start gap-[10px]"
            >
              <p className="text-[#545F7D] text-[12px] leading-[14.08px] pl-[30px] font-[500]">
                {section}
              </p>
              <div className="flex flex-col items-start gap-[10px] w-full">
                {list?.map(({ name, path, SVGIcon }, id) => {
                  return (
                    <div
                      key={`name${id}`}
                      className={`pl-[30px] h-[40px] w-full flex flex-row items-center gap-[10px] hover:bg-primary/10 group ${
                        pathname === path
                          ? "border-l-[3px] border-[#39CDCC] bg-primary/10"
                          : ""
                      }`}
                    >
                      <SVGIcon
                        isActive={pathname === path}
                        activeColor="#213F7D"
                        defaultColor="#7A8CB1"
                      />
                      <p
                        className={`text-[#7A8CB1] text-[16px] leading-[18.77px] font-[400] group-hover:text-[#213F7D] ${
                          pathname === path ? "" : ""
                        }`}
                      >
                        {name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full  border-t border-t-headerColor/15 pt-[24px] flex flex-col items-start gap-[29px] mb-[50px]">
        <div
          onClick={() => handleLogout()}
          className="cursor-pointer pl-[30px] flex flex-row items-center gap-[10px] text-[#7A8CB1] text-[16px] leading-[18.75px] font-[400] hover:text-[#213F7D] hover:bg-primary/10 h-[40px] w-full"
        >
          <Image className="" src={Logout} alt={"Logout"} />
          Logout
        </div>
        <p className="text-[#213F7D] text-[12px] leading-[14.08px] font-[400] pl-[30px]">
          v1.2.0
        </p>
      </div>
    </div>
  );
};

export default SideBar;
