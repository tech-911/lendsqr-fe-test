"use client";

import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
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

type responseType = {
  email: string;
  password: string;
  token: string;
};

const FilterFormSchema = z.object({
  email: z.string().email(),
  organization: z.string(),
  username: z.string(),
  phone: z.string(),
  status: z.string(),
  date: z.date(),
});

export function FilterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FilterFormSchema>>({
    resolver: zodResolver(FilterFormSchema),
    // defaultValues: {},
  });

  async function onSubmit(data: z.infer<typeof FilterFormSchema>) {
    console.log("filter form data: ", data);
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
                    <SelectItem value="Irorun">Irorun</SelectItem>
                    <SelectItem value="Leandstar">Leandstar</SelectItem>
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
                <Popover>
                  <PopoverTrigger asChild>
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
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      //   disabled={(date) =>
                      //     date > new Date() || date < new Date("1900-01-01")
                      //   }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
            disabled={isLoading}
            className="w-full h-[40px] rounded-[8px]"
            type="submit"
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
