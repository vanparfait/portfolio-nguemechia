import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
//import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodycolor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   transition={{ duration: 0.5 }}
        >
          <Image
            src={Logo}
            alt="Logo de mon portfolio"
            priority
            className="bg-emerald-600 p-1"
            width={44}
          />
        </div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex gap-7 text-[13px]">
            <Link
              href="/"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li
              // initial={{y:-10 opacity: 0 }}
              // animate={{y:0 opacity: 1 }}
              // transition={{ duration: 0.1}}
              >
                Home
              </li>
            </Link>
            <Link
              href="about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li
              // initial={{y:-10 opacity: 0 }}
              // animate={{y:0 opacity: 1 }}
              // transition={{ duration: 0.1}}
              >
                About
              </li>
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li
              // initial={{y:-10 opacity: 0 }}
              // animate={{y:0 opacity: 1 }}
              // transition={{ duration: 0.1}}
              >
                Experience
              </li>
            </Link>
            <Link
              href="#project"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li
              // initial={{y:-10 opacity: 0 }}
              // animate={{y:0 opacity: 1 }}
              // transition={{ duration: 0.1}}
              >
                Project
              </li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li
              // initial={{y:-10 opacity: 0 }}
              // animate={{y:0 opacity: 1 }}
              // transition={{ duration: 0.1}}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        {/* small Icon Section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="block w-full h-1 bg-current transform transition duration-300 ease-in-out"></span>
          <span className="block w-full h-1 bg-current transform transition duration-300 ease-in-out"></span>
          <span className="block w-full h-1 bg-current transform transition duration-300 ease-in-out"></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
