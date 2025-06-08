import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme/theme-toggle";

const Nav = () => {
  return (
    <nav className="fixed bottom-4 flex items-center justify-center w-full gap-3">
      <div className="flex items-center justify-center gap-3 bg-transparent backdrop-blur-xl px-5 py-1 border rounded-full">
        <Link
          href={"https://www.linkedin.com/in/leo-jonsson-anetoft-b98048304/"}
          target="_blank"
        >
          Linkedin
        </Link>
        <Link href={"https://github.com/leo-jonsson"} target="_blank">
          Github
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
