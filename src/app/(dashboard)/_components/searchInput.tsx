import React from "react";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";

function SearchInput() {
  return (
    <div className="border border-border/30 w-full min-w-[200px] max-w-[400px] min-h-[40px] h-[40px] flex flex-row items-center rounded-[8px] overflow-hidden relative">
      <Input
        type="email"
        placeholder="Search for anything"
        className="border-none bg-transparent h-full outline-none focus-visible:ring-0 focus-visible:border-none pr-[56px]"
      />
      <div className="cursor-pointer h-[40px] w-[56px] bg-primary flex flex-row items-center justify-center absolute right-0 border border-primary">
        <Icon
          icon="bitcoin-icons:search-filled"
          className="text-background text-[24px]"
        />
      </div>
    </div>
  );
}

export default SearchInput;
