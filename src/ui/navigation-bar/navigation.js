'use client'
import Image from "next/image";
import logoImg from '@/images/logo.svg'
import NavItem from "./nav-item";
import Button from "../button";
import {MoonOutlined, MenuOutlined, SunFilled, CloseOutlined } from '@ant-design/icons'
import { Col, Row } from "antd";
import { useState } from "react";
import Link from "next/link";
import { navItem } from "@/data/webData";
import ThemeSwitch from "../themeSwitch";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <Row justify={'space-around'} gutter={[4,4]} align={'middle'} className={`h-[100px] shadow-sm sticky top-0 z-[99] bg-white monseret dark:bg-black dark:text-white`}>

      <Col sm={8} md={4} justify={'center'} className="">
      <Image src={logoImg} alt="meshsq logo image" width={170}/>
      </Col>

      <Col sm={0} md={14} justify={'center'} className="md:flex justify-center hidden">
       <NavItem/>
      </Col>

      <Col sm={8} md={4}>
        <div className="flex justify-center items-center gap-5">
          <Button className='text-lg md:block hidden border-2 rounded-full px-5 py-1 text-white'>
            Contact us
          </Button>

          <ThemeSwitch/>
                    
        </div>
      </Col>

      <Col sm={4} md={0}>
      <div className="relative">
      {!mobileMenu ? <MenuOutlined style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>{setMobileMenu(true)}} /> :  <CloseOutlined style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>{setMobileMenu(false)}}/>}
        {mobileMenu ?  <div className={`${mobileMenu ? 'mobileMenuOn' : " "}`}>
        <ul className="flex flex-col text-white p-5 gap-5">
            {navItem.map((item)=>
                <Link key={item.key} href={item.path} className={`text-md hover:text-orange-600 mt-5 ${item.key === 2 ? "after:content-['▼'] hover:slide" : '' } `}>{item.label}</Link>
                
            )}

              
            </ul>
            <button className="text-lg md:block border-2 border-[#4d148c] hover:bg-white hover:text-[#4d148c] bg-[#4d148c] rounded-full px-3 py-1 text-white my-10 ml-3">
              Click here
            </button>
        </div> : null}
      </div>

      </Col>
    </Row>
  )
}
