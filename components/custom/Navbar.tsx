"use client";

import React from "react";
import { usePathname } from "next/navigation";
import menuItems from "@/lib/constants/menuItems";
import Image from "next/image";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import NavItems from "./NavItems";

const tempNotifications = {
  amount: 4,
};

const getTitleFromPath = (pathname: string) => {
  for (const menuItem of menuItems) {
    for (const item of menuItem.list) {
      if (item.path === pathname) {
        return item.title; // Return the title from the list where the match is found
      }
    }
  }
  return null; // Return null if pathname is not found
};

const Navbar = () => {
  const pathname = usePathname();
  const pageTitle = getTitleFromPath(pathname);

  return (
    <Sheet>
      <header className='panel w-full my-4 flex flex-row justify-between'>
        <div className='flex flex-row justify-start gap-4'>
          <SheetTrigger>
            <Image
              src='/assets/icons/menu.svg'
              alt='menu icon'
              height={32}
              width={32}
              className='lg:hidden'
            />
          </SheetTrigger>
          <h1 className='text-lg m-auto mx-0'>{pageTitle}</h1>
        </div>
        <div className='flex flex-row justify-end gap-4'>
          <Input
            type='search'
            placeholder='Search'
            className='bg-slate-900 border-slate-500'
          />
          <Button variant='ghost'>
            Notifications{"  "}
            <span className='ml-2 text-xs p-1 rounded-full w-6 h-6 bg-orange-600 text-slate-50'>
              {tempNotifications.amount}
            </span>
          </Button>
        </div>
      </header>

      <SheetContent side='left' className='bg-slate-900'>
        <NavItems isSidebar={false} />
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
