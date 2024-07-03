'use client'
import Link from "next/link";
import { navItem } from "@/data/webData";
import { useState } from "react";
import SubMenu from "../subMenu";
export default function NavItem() {
  const [dropDown, setDropDown] = useState(false)
  return (
    <>
     <div className="relative nav-item">
        <ul className="flex gap-10">
            {navItem.map((item)=>
                <Link key={item.key} href={item.path} className={`text-[13px] font-semibold text-black dark:text-white hover:text-[#4d148c] monseret ${item.key === 2 ?  "after:content-['▼']" : '' } `  } onMouseEnter={()=>{setDropDown(prev =>!prev)}}  >{item.label}</Link>
            )}

        </ul>
    </div>
    {dropDown && <SubMenu/>}
    </>
  )
}
