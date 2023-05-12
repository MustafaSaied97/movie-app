"use client";

import Link from "next/link";
import SideBar from "./SideBar";
import {useState } from "react";

// {logo}
import { FcClapperboard , FcFilm} from "react-icons/fc";
import { GiHamburgerMenu} from "react-icons/gi";
import { BiX } from "react-icons/bi";

function MobileNav({open}) {
  return (
      <div className={`lg:hidden fixed z-10 top-0 left-0  h-screen  sm:w-6/12 w-9/12 backdrop-blur-md bg-white/30 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter  `}>
          <div className="flex flex-col w-full justify-center items-center mt-28">
            <SideBar/>
          </div>  
      </div>
  )
}
export default function NavBar() {
  const [open, setOpen] = useState(false)

  return( 
    <>
      <nav className="bg-gray-800 h-auto w-full py-4 px-4 mb-1 flex flex-row items-center justify-between">
        <Link href='/'className="text-center text-2xl">
          <span className="mr-2 inline-block"><FcFilm/></span>MOVIE
        </Link>
        <Link href='/favorites'className="text-2xl" title="favorites">
          <h1><FcClapperboard/></h1>
        </Link>
        <div className="text-2xl order-first lg:hidden">
            <div className=" flex justify-center items-center">
                <div className="group z-50 relative w-6 h-6  cursor-pointer flex-col justify-between items-center flex" onClick={() => {setOpen(!open)}}>
                    {open?<span className="fixed bg-gray-700 "><BiX/></span>:<GiHamburgerMenu/>}
                </div>
            </div>
        </div>
      </nav>
      <MobileNav open={open} />
    </>

)}
