import Link from "next/link";
import React from "react";
import BlurIn from "./magicui/blur-in";
import WordPullUp from "./magicui/word-pull-up";
import { Dock } from "./magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;
const NavBar = () => {
  const NavLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-around sm:mx-9 mx-4 w-full">
      <BlurIn
        word="Expense Tracker"
        className=" font-bold my-4 title_gradient"
      />
      <div className="flex text-white items-start justify-between space-x-8 font-semibold">
        <Dock />
      </div>
    </div>
  );
};

export default NavBar;
