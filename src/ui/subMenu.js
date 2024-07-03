'use client'
import { navItem } from "@/data/webData"
import Link from "next/link"
export default function SubMenu() {
    const subITem = navItem[1].child
    console.log(subITem[1].child);
    const linkStyle = 'text-white text-normal hover:bg-gradient-to-r from-orange-600 to-slate-800 hover:rounded-full px-2 hover:text-white hover:border-[1px] hover:border-white w-fit h-fit'
  return (
  <>
     <section className="hidden md:flex absolute top-5 z-20 monseret scroll-smooth h-fit">
        <div className=" bg-[#ff7526] text-white p-5 rounded-l-[20px] w-[270px] dark:bg-white dark:text-black">
            <p>A dynamic digital marketing agency providing a comprehensive suite of services for a variety of businesses. Capture, engage, and increase online lead generation with our expertise!</p>
        </div>
        <div className="dark:bg-black dark:text-white bg-[#2f1d43] text-white p-5 rounded-r-[20px] flex gap-2 font-normal text-nowrap overflow-hidden ">
        <div className="p-5">
            <h2 className="text-[#feb175] dark:text-white text-lg font-normal">{subITem[1].label.toUpperCase()}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-5">
                <Link href={subITem[1].child[0]} className={linkStyle}>{subITem[1].child[0]}</Link>
                <Link href={subITem[1].child[1]} className={linkStyle}>{subITem[1].child[1]}</Link>
                <Link href={subITem[1].child[2]} className={linkStyle}>{subITem[1].child[2]}</Link>
                <Link href={subITem[1].child[3]} className={linkStyle}>{subITem[1].child[3]}</Link>
                <Link href={subITem[1].child[4]} className={linkStyle}>{subITem[1].child[4]}</Link>
                <Link href={subITem[1].child[5]} className={linkStyle}>{subITem[1].child[5]}</Link>
                
              </div>
                


            
        </div>

        <div className="p-5 ">
            <h2 className="text-[#feb175] text-lg font-normal dark:text-white">{subITem[2].label.toUpperCase()}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-5">
                <Link href={subITem[2].child[0]} className={linkStyle}>{subITem[2].child[0]}</Link>
                <Link href={subITem[2].child[1]} className={linkStyle}>{subITem[2].child[1]}</Link>
                <Link href={subITem[2].child[2]} className={linkStyle}>{subITem[2].child[2]}</Link>
                <Link href={subITem[2].child[3]} className={linkStyle}>{subITem[2].child[3]}</Link>
                <Link href={subITem[2].child[4]} className={linkStyle}>{subITem[2].child[4]}</Link>
                <Link href={subITem[2].child[5]} className={linkStyle}>{subITem[2].child[5]}</Link>
                <Link href={subITem[2].child[6]} className={linkStyle}>{subITem[2].child[6]}</Link>
                <Link href={subITem[2].child[7]} className={linkStyle}>{subITem[2].child[7]}</Link>
                <Link href={subITem[2].child[8]} className={linkStyle}>{subITem[2].child[8]}</Link>
                <Link href={subITem[2].child[9]} className={linkStyle}>{subITem[2].child[9]}</Link>
                
              </div>
                


            
        </div>

        <div className="p-5">
            <h2 className="text-[#feb175] text-lg font-normal dark:text-white">{subITem[3].label.toUpperCase()}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-5">
                <Link href={subITem[3].child[0]} className={linkStyle}>{subITem[3].child[0]}</Link>
                <Link href={subITem[3].child[1]} className={linkStyle}>{subITem[3].child[1]}</Link>
                <Link href={subITem[3].child[2]} className={linkStyle}>{subITem[3].child[2]}</Link>
                <Link href={subITem[3].child[3]} className={linkStyle}>{subITem[3].child[3]}</Link>
                <Link href={subITem[3].child[4]} className={linkStyle}>{subITem[3].child[4]}</Link>
                <Link href={subITem[3].child[5]} className={linkStyle}>{subITem[3].child[5]}</Link>
                
              </div>
                


            
        </div>

        <div className="p-5">
            <h2 className="text-[#feb175] text-lg font-normal dark:text-white">{subITem[4].label.toUpperCase()}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-5">
                <Link href={subITem[4].child[0]} className={linkStyle}>{subITem[4].child[0]}</Link>
                <Link href={subITem[4].child[1]} className={linkStyle}>{subITem[4].child[1]}</Link>
                <Link href={subITem[4].child[2]} className={linkStyle}>{subITem[4].child[2]}</Link>
                <Link href={subITem[4].child[3]} className={linkStyle}>{subITem[4].child[3]}</Link>
                <Link href={subITem[4].child[4]} className={linkStyle}>{subITem[4].child[4]}</Link>
                <Link href={subITem[4].child[5]} className={linkStyle}>{subITem[4].child[5]}</Link>
                
              </div>
                


            
        </div>

        </div>
     </section>
  </>
  )
}
