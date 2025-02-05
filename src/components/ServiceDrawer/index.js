"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

export function ServiceDrawer({open, setOpen, data}) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      {/* <DrawerTrigger>Open</DrawerTrigger> */}
      <DrawerContent className="max-w-[1336px] mx-auto ">
        <DrawerHeader>
          <DrawerTitle>{data?.title}</DrawerTitle>
          <DrawerDescription>{data?.content}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default ServiceDrawer;
