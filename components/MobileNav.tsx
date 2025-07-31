"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import SideBarItem from "./SideBarItem";
import { navItems } from "@/fixtures/sidebar";

interface Prop {
  className?: string;
}
const MobileNav = ({ className }: Prop) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "w-full flex items-center gap-4 justify-between",
        className
      )}
    >
      <Logo />
      <Sheet>
        <SheetTrigger className="p-3 text-white bg-purple-darker">
          {toggle ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </SheetTrigger>
        <SheetContent className=" border-none  outline-none text-white bg-purple-darker">
          <SheetHeader>
            <SheetTitle className="">MUX Video API </SheetTitle>
          </SheetHeader>
          <div className="p-6">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <SideBarItem navItem={item} toggle={toggle} />
                </li>
              ))}

              <Link
                className={cn(
                  "flex flex-row w-full gap-3",
                  toggle
                    ? "flex-col gap-0 items-center justify-center"
                    : "flex-row"
                )}
                href="https://www.mux.com/"
                passHref
              >
                😎
                <p className="font-light ">MUX Docs</p>
              </Link>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
