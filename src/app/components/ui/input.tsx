// import * as React from "react"

// import { cn } from "@/lib/utils"

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Input.displayName = "Input"

// export { Input }

"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LuEyeOff, LuEye } from "react-icons/lu";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: "show" | "hide"; // Add the 'icon' prop
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const [inputType, setInputType] = useState(
      type === "password" && icon === "show" ? "password" : type
    );
    const [inputchange, setInputChange] = useState(
      type === "password" && icon === "show" ? "password" : type
    );

    React.useEffect(() => {
      inputType !== inputchange ? setInputType(inputchange) : null;
    }, [inputchange]);

    // Define a variable to store the input type (password or text)

    const handleVisibility = (value: string) => {
      if (value === "show" && inputType === "password") {
        setInputChange("text");
        setShow(true);
      } else if (value === "close" && inputType === "text") {
        setInputChange("password");
        setShow(false);
      }
    };
    return (
      <div className="relative w-full">
        <input
          type={inputType} // Use the input type based on 'icon' prop
          className={cn(
            "border-border/15 bg-background px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none placeholder:text-neutral-300 focus-visible:ring-1 focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50 bg-white text-sm font-medium leading-snug w-full  rounded-lg border-2 justify-start items-center  inline-flex py-3 text-cyan-800",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && ( // Only show the eye icon for password fields
          <div className="absolute inset-y-0 flex items-center right-[17.64px]">
            {show ? (
              <button type="button" onClick={() => handleVisibility("close")}>
                {/* <LuEyeOff className="text-[#757575] text-[16px]" /> */}
                <p className="text-primary text-[12px] font-[600] leading-[16.39px] text-center tracking-[1.6px]">
                  HIDE
                </p>
              </button>
            ) : (
              <button type="button" onClick={() => handleVisibility("show")}>
                {/* <LuEye className="text-[#757575] text-[16px]" /> */}
                <p className="text-primary text-[12px] font-bold leading-[16.39px] text-center tracking-[1.6px]">
                  SHOW
                </p>
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
