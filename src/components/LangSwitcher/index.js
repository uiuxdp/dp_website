"use client";
import React from "react";
import Link from "next/link";
import Image from "../Image/image";
import SideBarMenu from "../SideBarMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LangSwitcher = ({ isScrolled }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`min-w-10 h-10 px-4 py-2 group bg-black/5 duration-500 ease-in-out rounded-full  text-sm  leading-tight relative ${
          isScrolled ? "text-[#1a1a1a]" : "  text-white"
        }`}
      >
        <span className="inline-block ease-in-out duration-300 group-hover:-translate-y-[2px] will-change-transform">العربية</span>
        <span className="block absolute -bottom-[3px] ease-in-out  duration-300 opacity-0 left-1/2 -translate-x-1/2 -translate-y-[2px] group-hover:translate-y-0 group-hover:opacity-100 will-change-transform">
          <i className="icon-arrow-b"></i>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-primary">English</DropdownMenuItem>
        <DropdownMenuItem>العربية</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangSwitcher;

const menu = [
  {
    label: "Home",
  },
  {
    label: "About Us",
    menu: [
      {
        label: "title1",
      },
      {
        label: "title2",
        menu: [
          {
            label: "title3",
          },
          {
            label: "title4",
          },
        ],
      },
    ],
  },
  {
    label: "Open Data",
  },
  {
    label: "Application Status",
  },
  {
    label: "Information",
  },
  {
    label: "Media",
  },
];
