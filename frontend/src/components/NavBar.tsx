import React from "react";
import BlurIn from "./magicui/blur-in";
import { DockDemo } from "./Dock";

const NavBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between ">
      <BlurIn
        word="Expense Tracker"
        className="font-bold my-4 title_gradient text-start"
      />
      {/* DockDemo will be at the bottom for small screens and inline for larger screens */}
      <div className="sm:hidden fixed inset-x-0 bottom-4  py-2 text-white">
        <DockDemo />
      </div>
      <div className="hidden sm:flex text-white items-center justify-between space-x-8 font-semibold">
        <DockDemo />
      </div>
    </div>
  );
};

export default NavBar;
