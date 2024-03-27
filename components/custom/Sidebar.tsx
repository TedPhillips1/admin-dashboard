import React from "react";

import NavItems from "./NavItems";

const Sidebar = () => {
  return (
    <nav className='panel hidden lg:block lg:w-1/4 m-4 mr-0 overflow-y-hidden'>
      <NavItems />
    </nav>
  );
};

export default Sidebar;
