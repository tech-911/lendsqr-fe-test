"use client";

import React from "react";
import Lendsqr from "@/assets/img/lendsqrlogo.png";
import Image from "next/image";
import SearchInput from "./searchInput";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Profile from "@/assets/img/avatar.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import SideBar from "./sideBar";

const NavBar = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="w-full h-full px-[30px] flex flex-row items-center justify-between">
      <div className="hidden flex-row items-center justify-between gap-4 w-1/2 lg:flex">
        <Image className="" src={Lendsqr} alt={"Lendsqr"} />
        <SearchInput />
      </div>
      <div className="flex flex-row items-center sm:gap-[40px] gap-[20px]">
        <p className="text-[#213F7D] underline text-[16px] leading-[18.75px] font-[400] cursor-pointer">
          Docs
        </p>
        <Icon
          icon="nimbus:notification"
          className="text-[#213F7D] text-[24px] cursor-pointer"
        />
        <div className="flex flex-row items-center gap-[10px]">
          <Image className="sm:flex hidden" src={Profile} alt={"Profile"} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="text-[#213F7D] text-[16px] leading-[18.75px] font-[500] flex flex-row items-center gap-[4px] p-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-none"
                variant="ghost"
              >
                Adedeji
                <Icon
                  icon="ri:arrow-down-s-fill"
                  className="text-[#213F7D] text-[24px]"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-20 py-20">
              {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="flex lg:hidden">
            <Icon
              icon="solar:hamburger-menu-linear"
              className="text-primary text-[30px] cursor-pointer"
            />
          </Button>
        </SheetTrigger>
        <SheetContent className="pl-0 pr-0" side="left">
          <SheetHeader className="pl-[30px] pb-5">
            {/* <SheetTitle className="text-[#213F7D] text-[24px] leading-[28.15px] font-[500] pl-[30px]">
              Dashboard
            </SheetTitle> */}
            <Image src={Lendsqr} alt={"Lendsqr"} />
          </SheetHeader>
          <ScrollArea thumbColor="transparent" className="h-full w-full">
            <SideBar />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavBar;
