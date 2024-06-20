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

export default function Navigation() {

  const [nightMode, setNightMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleNightMode=()=>{
    setNightMode(prev=> !prev )
  }
  return (
    <Row justify={'space-around'} gutter={[4,4]} align={'middle'} className="h-[100px] shadow-md sticky top-0 z-[99] bg-white">

      <Col sm={8} md={4} justify={'center'} className="">
      <Image src={logoImg} alt="meshsq logo image" width={150}/>
      </Col>

      <Col sm={0} md={14} justify={'center'} className="md:flex justify-center hidden font-bold">
       <NavItem/>
      </Col>
      <Col sm={4} md={0}>
      <div className="relative">
      {!mobileMenu ? <MenuOutlined style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>{setMobileMenu(true)}} /> :  <CloseOutlined style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>{setMobileMenu(false)}}/>}
        {mobileMenu ?  <div className={`${mobileMenu ? 'mobileMenuOn' : " "}`}>
        <ul className="flex flex-col absolute top-10 z-50 w-40 bg-[#4d148c] text-white p-5 gap-5">
            {navItem.map((item)=>
                <Link key={item.key} href={item.path} className={`font-bold text-md hover:text-orange-600 ${item.key === 2 ? "after:content-['▼'] hover:slide" : '' } `}>{item.label}</Link>
            )}
            </ul>
        </div> : null}
      </div>

      </Col>

      <Col sm={8} md={4}>
        <div className="flex justify-center items-center gap-5">
          <Button className='font-bold text-lg md:block hidden bg-[#4d148c] rounded-full px-3 py-2 text-white'>
            Contact us
          </Button>
          {nightMode ? <SunFilled style={{fontSize:'25px', cursor:'pointer'}}  onClick={handleNightMode}/> : 
          <MoonOutlined style={{fontSize:'25px', cursor:'pointer'}}  onClick={handleNightMode}/>
          }
          
          
        </div>
      </Col>
    </Row>
  )
}
