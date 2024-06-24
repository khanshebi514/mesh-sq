'use client'
import { navItem } from "@/data/webData"
import Link from "next/link"
export default function SubMenu() {
    const subITem = navItem[1].child
    console.log(subITem[1].child);
  return (
  <>
     <section className="hidden md:flex w-full absolute top-5 rounded-lg">
        <div className=" bg-[#ff7526] text-white p-5 rounded-l-lg">
            <p>A dynamic digital marketing agency providing a comprehensive suite of services for a variety of businesses. Capture, engage, and increase online lead generation with our expertise!</p>
        </div>
        <div className=" bg-[#2f1d43] text-white p-5 rounded-r-lg flex gap-5">
        <div className="p-5">
            <h2 className="text-orange-600">{subITem[1].label}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-10">
                <Link href={subITem[1].child[0]} className="text-white text-normal">{subITem[1].child[0]}</Link>
                <Link href={subITem[1].child[1]} className="text-white text-normal">{subITem[1].child[1]}</Link>
                <Link href={subITem[1].child[2]} className="text-white text-normal">{subITem[1].child[2]}</Link>
                <Link href={subITem[1].child[3]} className="text-white text-normal">{subITem[1].child[3]}</Link>
                <Link href={subITem[1].child[4]} className="text-white text-normal">{subITem[1].child[4]}</Link>
                <Link href={subITem[1].child[5]} className="text-white text-normal">{subITem[1].child[5]}</Link>
                
              </div>
                


            
        </div>

        <div className="p-5 ">
            <h2 className="text-orange-600">{subITem[2].label}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-10">
                <Link href={subITem[2].child[0]} className="text-white text-normal">{subITem[2].child[0]}</Link>
                <Link href={subITem[2].child[1]} className="text-white text-normal">{subITem[2].child[1]}</Link>
                <Link href={subITem[2].child[2]} className="text-white text-normal">{subITem[2].child[2]}</Link>
                <Link href={subITem[2].child[3]} className="text-white text-normal">{subITem[2].child[3]}</Link>
                <Link href={subITem[2].child[4]} className="text-white text-normal">{subITem[2].child[4]}</Link>
                <Link href={subITem[2].child[5]} className="text-white text-normal">{subITem[2].child[5]}</Link>
                
              </div>
                


            
        </div>

        <div className="p-5">
            <h2 className="text-orange-600">{subITem[3].label}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-10">
                <Link href={subITem[3].child[0]} className="text-white text-normal">{subITem[3].child[0]}</Link>
                <Link href={subITem[3].child[1]} className="text-white text-normal">{subITem[3].child[1]}</Link>
                <Link href={subITem[3].child[2]} className="text-white text-normal">{subITem[3].child[2]}</Link>
                <Link href={subITem[3].child[3]} className="text-white text-normal">{subITem[3].child[3]}</Link>
                <Link href={subITem[3].child[4]} className="text-white text-normal">{subITem[3].child[4]}</Link>
                <Link href={subITem[3].child[5]} className="text-white text-normal">{subITem[3].child[5]}</Link>
                
              </div>
                


            
        </div>

        <div className="p-5">
            <h2 className="text-orange-600">{subITem[4].label}</h2>
           
              {/* {
                subITem[1].child.forEach(element => {
                    <Link href={element} className="text-white">{element}</Link> })
              } */}
              <div className="flex flex-col gap-3 mt-10">
                <Link href={subITem[4].child[0]} className="text-white text-normal">{subITem[4].child[0]}</Link>
                <Link href={subITem[4].child[1]} className="text-white text-normal">{subITem[4].child[1]}</Link>
                <Link href={subITem[4].child[2]} className="text-white text-normal">{subITem[4].child[2]}</Link>
                <Link href={subITem[4].child[3]} className="text-white text-normal">{subITem[4].child[3]}</Link>
                <Link href={subITem[4].child[4]} className="text-white text-normal">{subITem[4].child[4]}</Link>
                <Link href={subITem[4].child[5]} className="text-white text-normal">{subITem[4].child[5]}</Link>
                
              </div>
                


            
        </div>

        </div>
     </section>
  </>
  )
}
