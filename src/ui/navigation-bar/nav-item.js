'use client'
import Link from "next/link";
import { navItem } from "@/data/webData";
import { useState } from "react";
import SubMenu from "../subMenu";
export default function NavItem() {
  const [dropDown, setDropDown] = useState(false)
  console.log(dropDown);
  return (
    <>
     <div className="relative nav-item">
        <ul className="flex gap-5">
            {navItem.map((item)=>
                <Link key={item.key} href={item.path} className={`font-bold text-md text-black hover:text-[#4d148c] ${item.key === 2 ? "after:content-['▼'] hover:slido" : '' } `} onMouseEnter={()=>{setDropDown(true)}} onMouseLeave={()=>{setDropDown(false)}}>{item.label}</Link>
            )}

        </ul>
    </div>
    {dropDown && <SubMenu/>}
    </>
  )
}
