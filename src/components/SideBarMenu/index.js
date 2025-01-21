"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const SideBarMenu = ({ isScrolled }) => {
  return (
    <>
      <Sheet >
        <SheetTrigger aria-label="hamburger menu" className={` duration-500 ease-in-out py-5 text-2xl ${isScrolled ? "text-[#1a1a1a]" : "  text-white"}`}>
        <i className="icon-menu block"></i>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideBarMenu;
