import Link from "next/link";
import { navItem } from "@/data/webData";
export default function NavItem() {
  return (
    <div className="relative nav-item">
        <ul className="flex gap-5">
            {navItem.map((item)=>
                <Link key={item.key} href={item.path} className={`font-bold text-md text-black hover:text-[#4d148c] ${item.key === 2 ? "after:content-['▼'] hover:slido" : '' } `}>{item.label}</Link>
            )}

        </ul>
      <div id="submenu" className="absolute top-10 hidden">

      </div>
    </div>
  )
}
