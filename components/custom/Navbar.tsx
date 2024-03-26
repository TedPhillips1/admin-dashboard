'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import menuItems from '@/lib/constants/menuItems';

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
        <header className='panel w-full my-4 flex flex-row justify-between'>
            <h1 className='text-lg'>{pageTitle}</h1>
            <div>search and more</div>
        </header>
    );
};

export default Navbar;
