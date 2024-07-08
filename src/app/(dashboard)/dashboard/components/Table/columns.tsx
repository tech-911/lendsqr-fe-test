"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FilterForm } from "./filterForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { capitalizeFirst } from "@/utls/fx";

// This type is used to define the shape of our data.
export type Payment = {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "inactive" | "pending" | "blacklisted" | "active";
};

export const columns: (args: AppRouterInstance) => ColumnDef<Payment>[] = (
  router
) => [
  {
    accessorKey: "organization",
    header: ({ table, column }) => {
      // console.log("table checking......", table);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="text-[#545F7D] cursor-pointer text-[12px] leading-[14.08px] font-[600] flex flex-row items-start gap-[10px] whitespace-nowrap">
              ORGANIZATION
              <Icon
                icon="ion:filter-sharp"
                className="text-[#545F7D] text-[20px]"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="border min-w-[300px] h-[45vh] border-[#F2F4F7] rounded-[4px]"
          >
            <ScrollArea thumbColor="bg-primary/10" className="h-full">
              <FilterForm column={column} table={table} />
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("organization")}</div>
    ),
  },
  {
    accessorKey: "username",
    header: ({ column, table }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text-[#545F7D] cursor-pointer text-[12px] leading-[14.08px] font-[600] flex flex-row items-start gap-[10px] whitespace-nowrap">
            USERNAME
            <Icon
              icon="ion:filter-sharp"
              className="text-[#545F7D] text-[20px]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="border min-w-[300px] h-[45vh] border-[#F2F4F7] rounded-[4px]"
        >
          <ScrollArea thumbColor="bg-primary/10" className="h-full">
            <FilterForm column={column} table={table} />
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column, table }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text-[#545F7D] cursor-pointer text-[12px] leading-[14.08px] font-[600] flex flex-row items-start gap-[10px] whitespace-nowrap">
            EMAIL
            <Icon
              icon="ion:filter-sharp"
              className="text-[#545F7D] text-[20px]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="border min-w-[300px] h-[45vh] border-[#F2F4F7] rounded-[4px]"
        >
          <ScrollArea thumbColor="bg-primary/10" className="h-full">
            <FilterForm column={column} table={table} />
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column, table }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text-[#545F7D] cursor-pointer text-[12px] leading-[14.08px] font-[600] flex flex-row items-start gap-[10px] whitespace-nowrap">
            PHONE NUMBER
            <Icon
              icon="ion:filter-sharp"
              className="text-[#545F7D] text-[20px]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border min-w-[300px] h-[45vh] border-[#F2F4F7] rounded-[4px]"
        >
          <ScrollArea thumbColor="bg-primary/10" className="h-full">
            <FilterForm column={column} table={table} />
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phoneNumber")}</div>
    ),
  },
  {
    accessorKey: "dateJoined",
    header: ({ column, table }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text-[#545F7D] cursor-pointer text-[12px] leading-[14.08px] font-[600] flex flex-row items-start gap-[10px] whitespace-nowrap">
            DATE JOINED
            <Icon
              icon="ion:filter-sharp"
              className="text-[#545F7D] text-[20px]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border min-w-[300px] h-[45vh] border-[#F2F4F7] rounded-[4px]"
        >
          <ScrollArea thumbColor="bg-primary/10" className="h-full">
            <FilterForm column={column} table={table} />
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    cell: ({ row }) => (
      <p className="capitalize w-fit whitespace-nowrap">
        {row.getValue("dateJoined")}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column, table }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text-[#545F7D] cursor-pointer text-[12px] leading-[14.08px] font-[600] flex flex-row items-start gap-[10px] whitespace-nowrap">
            STATUS
            <Icon
              icon="ion:filter-sharp"
              className="text-[#545F7D] text-[20px]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="border min-w-[300px] h-[45vh] border-[#F2F4F7] rounded-[4px]"
        >
          <ScrollArea thumbColor="bg-primary/10" className="h-full">
            <FilterForm column={column} table={table} />
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    cell: ({ row }) => {
      const statusValue = row.getValue("status");
      switch (statusValue) {
        case "inactive":
          return (
            <p className="rounded-full h-[30px] w-fit flex flex-col items-center justify-center px-[18px] bg-[#F5F6F7] text-[#545F7D] text-[14px] leading-[16.42px] font-[400]">
              {capitalizeFirst(row.getValue("status"))}
            </p>
          );
        case "pending":
          return (
            <p className="rounded-full h-[30px] w-fit flex flex-col items-center justify-center px-[18px] bg-[#FDF8E6] text-[#EAB60E] text-[14px] leading-[16.42px] font-[400]">
              {capitalizeFirst(row.getValue("status"))}
            </p>
          );
        case "active":
          return (
            <p className="rounded-full h-[30px] w-fit flex flex-col items-center justify-center px-[18px] bg-[#F3FCF6] text-[#39CD62] text-[14px] leading-[16.42px] font-[400]">
              {capitalizeFirst(row.getValue("status"))}
            </p>
          );
        case "blacklisted":
          return (
            <p className="rounded-full h-[30px] w-fit flex flex-col items-center justify-center px-[18px] bg-[#FDE6EC] text-[#E4033B] text-[14px] leading-[16.42px] font-[400]">
              {capitalizeFirst(row.getValue("status"))}
            </p>
          );
        default:
          return (
            <p className="rounded-full h-[30px] w-fit flex flex-col items-center justify-center px-[18px] bg-[#FDF8E6] text-[#EAB60E] text-[14px] leading-[16.42px] font-[400]">
              {capitalizeFirst(row.getValue("status"))}
            </p>
          );
      }
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original.id;
      const email: string = row.getValue("email");
      const handleRoute = (id: string, email: string) => {
        router.push(`/user-details/general?id=${id}&email=${email}`);
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <Icon icon="iwwa:option" className="text-[#545F7D] text-[18px]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="border border-[#F2F4F7] rounded-[4px]"
          >
            <DropdownMenuItem
              onClick={() => handleRoute(id, email)}
              className="flex flex-row items-center gap-2"
            >
              <Icon icon="ph:eye" className="text-[#545F7D] text-[18px]" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row items-center gap-2">
              <Icon
                icon="eva:person-delete-outline"
                className="text-[#545F7D] text-[18px]"
              />
              Blacklist User
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row items-center gap-2">
              <Icon
                icon="tdesign:user-checked-1"
                className="text-[#545F7D] text-[18px]"
              />
              Activate User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
