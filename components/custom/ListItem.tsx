"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";
import clsx from "clsx";
import { SheetClose } from "../ui/sheet";

type ListItemProps = {
  title: string;
  path: string;
  icon: string;
  isSidebar: boolean;
};

const ListItem = ({ title, path, icon, isSidebar }: ListItemProps) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      {isSidebar ? (
        <Button
          variant='ghost'
          size='lg'
          className={clsx(
            pathname === path && "bg-slate-700",
            "flex flex-row justify-start p-2 gap-4 text-slate-200 w-full"
          )}>
          <Image
            src={`/assets/icons/sidebar/${icon}.svg`}
            alt={title}
            width={24}
            height={24}
          />
          <p>{title}</p>
        </Button>
      ) : (
        <SheetClose asChild>
          <Button
            variant='ghost'
            size='lg'
            className={clsx(
              pathname === path && "bg-slate-700",
              "flex flex-row justify-start p-2 gap-4 text-slate-200 w-full"
            )}>
            <Image
              src={`/assets/icons/sidebar/${icon}.svg`}
              alt={title}
              width={24}
              height={24}
            />
            <p>{title}</p>
          </Button>
        </SheetClose>
      )}
    </Link>
  );
};

export default ListItem;
