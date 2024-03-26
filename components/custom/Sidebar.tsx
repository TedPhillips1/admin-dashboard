import React from 'react';
import menuItems from '@/lib/constants/menuItems';

import { Separator } from '../ui/separator';
import ListItem from './ListItem';

const Sidebar = () => {
    return (
        <nav className='panel hidden lg:block lg:w-1/4 m-4 mr-0 overflow-y-hidden'>
            {/* USER SECTION  */}

            {menuItems.map(({ title, list }) => {
                return (
                    <div key={title} className='flex flex-col gap-2 my-2'>
                        <Separator />
                        <h2 className='text-slate-300 text-sm text-left'>
                            {title}
                        </h2>
                        <ul>
                            {list.map(({ title, path, icon }) => {
                                return (
                                    <li key={title}>
                                        <ListItem
                                            title={title}
                                            path={path}
                                            icon={icon}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </nav>
    );
};

export default Sidebar;
