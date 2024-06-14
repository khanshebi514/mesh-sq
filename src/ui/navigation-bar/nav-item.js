import Link from "next/link";
import { navItem } from "@/data/webData";
export default function NavItem() {
  return (
    <div>
        <ul className="flex gap-5">
            {navItem.map((item)=>
                <Link key={item.key} href={item.path} className={`font-normal text-lg text-black hover:text-[#4d148c] ${item.key === 2 ? "after:content-['▼'] hover:slide" : '' } `}>{item.label}</Link>
            )}

        </ul>
    </div>
  )
}
