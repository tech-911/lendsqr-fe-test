"use client";

import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Payment } from "./columns";
import { Column, ColumnDef, Table } from "@tanstack/react-table";

type responseType = {
  email: string;
  password: string;
  token: string;
};

const FilterFormSchema = z.object({
  email: z.string().email().optional(),
  organization: z.string().optional(),
  username: z.string().optional(),
  phone: z.string().optional(),
  status: z.string().optional(),
  date: z.date().optional(),
});

export function FilterForm({
  column,
  table,
}: {
  column: Column<Payment, unknown>;
  table?: Table<Payment>;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    // defaultValues: {},
  });

  const handleReset = (e: any) => {
    e.preventDefault();
    form?.reset();
  };

  async function onSubmit(data: z.infer<typeof FilterFormSchema>) {
    // console.log("data?.date:", data?.date?.toISOString());

    if (data?.organization) {
      table?.getColumn("organization")?.setFilterValue(data?.organization);
    }
    if (data?.username) {
      table?.getColumn("username")?.setFilterValue(data?.username);
    }
    if (data?.date) {
      table
        ?.getColumn("dateJoined")
        ?.setFilterValue("December 30, 2018 At 11:02 AM");
    }
    if (data?.phone) {
      table?.getColumn("phoneNumber")?.setFilterValue(data?.phone);
    }
    if (data?.status) {
      table?.getColumn("status")?.setFilterValue(data?.status);
    }
    if (data?.email) {
      table?.getColumn("email")?.setFilterValue(data?.email);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-5">
        <div className="flex flex-col items-center w-full gap-5 mb-[30px]">
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#545F7D] text-[14px] leading-[16.42px] font-[500]">
                  Organization
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="min-h-[40px]">
                    <SelectTrigger className="focus:ring-0 border border-[#D3D9E5] rounded-[8px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Lendsqr">Lendsqr</SelectItem>
                    <SelectItem value="TechCorp">TechCorp</SelectItem>
                    <SelectItem value="InnovateX">InnovateX</SelectItem>
                    <SelectItem value="NextGen">NextGen</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#545F7D] text-[14px] leading-[16.42px] font-[500]">
                  Username
                </FormLabel>
                <FormControl className="min-h-[40px]">
                  <Input
                    className="h-full rounded-[8px] focus:ring-0 border border-[#D3D9E5]"
                    placeholder="User"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#545F7D] text-[14px] leading-[16.42px] font-[500]">
                  Email
                </FormLabel>
                <FormControl className="min-h-[40px]">
                  <Input
                    className="h-full rounded-[8px] focus:ring-0 border border-[#D3D9E5]"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full">
                <FormLabel className="text-[#545F7D] text-[14px] leading-[16.42px] font-[500]">
                  Date
                </FormLabel>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "min-h-[40px]  border border-[#D3D9E5] w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Date</span>
                        )}
                        <Icon
                          icon="uiw:date"
                          className="text-[#545F7D] ml-auto h-4 w-4"
                        />
                      </Button>
                    </FormControl>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      //   disabled={(date) =>
                      //     date > new Date() || date < new Date("1900-01-01")
                      //   }
                      initialFocus
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#545F7D] text-[14px] leading-[16.42px] font-[500]">
                  Phone Number
                </FormLabel>
                <FormControl className="min-h-[40px]">
                  <Input
                    className="h-full rounded-[8px] focus:ring-0 border border-[#D3D9E5]"
                    placeholder="Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#545F7D] text-[14px] leading-[16.42px] font-[500]">
                  Status
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="min-h-[40px]">
                    <SelectTrigger className="focus:ring-0 border border-[#D3D9E5] rounded-[8px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Blacklisted">Blacklisted</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row items-center gap-[14px] justify-between">
          <Button
            onClick={handleReset}
            disabled={isLoading}
            className="w-full h-[40px] rounded-[8px]"
            variant={"outline"}
          >
            Reset
          </Button>
          <Button
            disabled={isLoading}
            className="w-full h-[40px] rounded-[8px] text-background"
            type="submit"
            variant={"default"}
          >
            Filter
          </Button>
        </div>
      </form>
    </Form>
  );
}
