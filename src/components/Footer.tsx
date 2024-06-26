import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Github, LinkedinIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="https://github.com/Yogesh699"
        >
          <Github className="w-4 h-4 " />
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="https://www.linkedin.com/in/yog-esh6991">
          <LinkedinIcon className="w-4 h-4 " />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
