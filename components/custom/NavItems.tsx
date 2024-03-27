import React from "react";
import menuItems from "@/lib/constants/menuItems";

import { CircleUser } from "lucide-react";
import ListItem from "./ListItem";
import { Separator } from "../ui/separator";

const tempUser = {
  name: "John Smith",
  level: "Administrator",
};

const NavItems = ({ isSidebar = true }: { isSidebar?: boolean }) => {
  return (
    <>
      <div className='flex flex-row justify-start gap-4 mb-4'>
        <CircleUser color='#94a3b8' size={64} strokeWidth={1} />
        <div className='flex flex-col justify-center'>
          <p className='text-slate-100'>{tempUser.name}</p>
          <p className='text-sm text-slate-400'>{tempUser.level}</p>
        </div>
      </div>

      {menuItems.map(({ title, list }) => {
        return (
          <nav key={title} className='flex flex-col gap-2 my-2'>
            <Separator />
            <h2 className='text-slate-300 text-sm text-left'>{title}</h2>
            <ul>
              {list.map(({ title, path, icon }) => {
                return (
                  <li key={title}>
                    <ListItem
                      title={title}
                      path={path}
                      icon={icon}
                      isSidebar={isSidebar}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        );
      })}
    </>
  );
};

export default NavItems;
