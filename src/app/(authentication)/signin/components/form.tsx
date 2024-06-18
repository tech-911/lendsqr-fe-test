"use client";

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
import { toast } from "@/components/ui/use-toast";
import styles from "../Signin.module.scss";
import { useState } from "react";
import { Icon } from "@iconify/react";

type responseType = {
  email: string;
  password: string;
  token: string;
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .refine((value) => value.length >= 8 && value.length <= 50, {
      message: "Password must be between 8 and 50 characters",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must contain at least one number",
    })
    .refine((value) => !/123/.test(value), {
      message: 'Password should not contain the sequence "123"',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase character",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must contain at least one lowercase character",
    })
    .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
      message: "Password must contain at least one special character",
    }),
});

export function SigninForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  });

  const router = useRouter();

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as responseType;

      if ((await response.status) === 201) {
        toast({
          variant: "default",
          title: "Logging in...",
          description: "Login Successful",
          className:
            "bg-[#BEF2B9] border-[#519E47] text-[#197624] text-[14px] font-[400]",
        });

        // Save values to localStorage
        localStorage.setItem("email", result?.email as string);
        localStorage.setItem("token", result?.token as string);
        setIsLoading(false);
        form.reset();
        if (typeof window) {
          router.push(`/dashboard`);
        }
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: `Error`,
        description: `${error}`,
      });
    }
    // console.log("form input values: ", data);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    // console.log("form input values: ", "clicked");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles.signinFormContainer}
        // className="w-[90%] md:w-[40%] rounded-[10px] bg-[#fff] border border-[#D0D5DD] flex flex-col items-center px-7 py-8"
      >
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.instruction}>Enter details to login.</p>
        </div>
        <div className="flex flex-col items-center w-full gap-6 mb-[30px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel className="text-[#101928] font-[500] leading-[20.2px] text-[14px]">
                  EMAIL ADDRESS
                </FormLabel> */}
                <FormControl>
                  <Input
                    className="min-h-[50px] rounded-[6px]"
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
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel className="text-[#101928] font-[500] leading-[20.2px] text-[14px]">
                  CREATE PASSWORD
                </FormLabel> */}
                <FormControl>
                  <Input
                    type="password"
                    icon="show"
                    className="min-h-[50px] rounded-[6px] border border-[#D0D5DD]"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="cursor-pointer text-primary font-[600] leading-[16.38px] text-[12px] self-start tracking-[1.6px]">
            FORGOT PASSWORD?
          </p>
        </div>
        <Button
          disabled={isLoading}
          className="w-full h-[55px]"
          type="submit"
          variant={"default"}
        >
          {isLoading ? (
            <div className="flex flex-row items-center gap-1">
              Loading
              <Icon icon="eos-icons:bubble-loading" />
            </div>
          ) : (
            "LOG IN"
          )}
        </Button>
      </form>
    </Form>
  );
}
