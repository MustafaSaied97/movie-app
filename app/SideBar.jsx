"use client";

import React from "react";
import requests from "@/utils/requests";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const router=useRouter()
  return (
    <>
      <form>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" name="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
              <button type="submit" className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-1 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
      </form>
      <div className=" px-6 my-6 mt-11 h-full">
        <h1 className="font-semibold ">categories</h1>
        <ul className="lg:mt-14 mt-4  ml-2 flex flex-col justify-around gab-5  h-2/5 ">
          {Object.entries(requests).map(([key,{title,url,logo}])=>(
            <li 
              key={key} 
              onClick={()=>router.push(`/?genres=${key}`)}
              className=" bg-slate-600 lg:bg-slate-700 lg:hover:bg-gray-500 rounded-lg hover:cursor-pointer  pl-1 p-1 mb-3   "
            >
              <span className="mr-2 inline-block">{logo}</span>{title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
