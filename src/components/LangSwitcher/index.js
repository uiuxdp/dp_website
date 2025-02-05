"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LangSwitcher = ({ isScrolled }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`min-w-10 h-10 px-4 py-2 group bg-black/5 duration-500 ease-in-out rounded-full  text-sm  leading-tight relative ${
          isScrolled ? "text-[#1a1a1a]" : "  text-white"
        }`}
      >
        <span className="inline-block ease-in-out duration-300 group-hover:-translate-y-[2px] will-change-transform">
          العربية
        </span>
        <span className="block absolute -bottom-[3px] ease-in-out  duration-300 opacity-0 left-1/2 -translate-x-1/2 -translate-y-[2px] group-hover:translate-y-0 group-hover:opacity-100 will-change-transform">
          <i className="icon-arrow-b"></i>
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose Your Language</DialogTitle>
          <div className="grid grid-cols-4">
            <div>asdf</div>
            <div>asdf</div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>

    // <DropdownMenu>
    //   <DropdownMenuTrigger
    //     className={`min-w-10 h-10 px-4 py-2 group bg-black/5 duration-500 ease-in-out rounded-full  text-sm  leading-tight relative ${
    //       isScrolled ? "text-[#1a1a1a]" : "  text-white"
    //     }`}
    //   >
    //     <span className="inline-block ease-in-out duration-300 group-hover:-translate-y-[2px] will-change-transform">العربية</span>
    //     <span className="block absolute -bottom-[3px] ease-in-out  duration-300 opacity-0 left-1/2 -translate-x-1/2 -translate-y-[2px] group-hover:translate-y-0 group-hover:opacity-100 will-change-transform">
    //       <i className="icon-arrow-b"></i>
    //     </span>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <DropdownMenuItem className="text-primary">English</DropdownMenuItem>
    //     <DropdownMenuItem>العربية</DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};

export default LangSwitcher;
