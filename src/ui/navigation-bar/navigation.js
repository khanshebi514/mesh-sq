import Image from "next/image";
import logoImg from '@/images/logo.svg'
import NavItem from "./nav-item";
import Button from "../button";
import {MoonOutlined, MenuOutlined } from '@ant-design/icons'
import { Col, Row } from "antd";
export default function Navigation() {
  return (
    <Row justify={'space-around'} gutter={[4,4]} align={'middle'} className="h-[100px] shadow-md">

      <Col sm={8} md={4} justify={'center'} className="">
      <Image src={logoImg} alt="meshsq logo image" width={150}/>
      </Col>

      <Col sm={0} md={14} justify={'center'} className="md:flex justify-center hidden font-bold">
       <NavItem/>
      </Col>
      <Col sm={4} md={0}>
      <MenuOutlined style={{fontSize:'25px'}}/>
      </Col>

      <Col sm={8} md={4}>
        <div className="flex justify-center items-center gap-5">
          <Button className='font-bold text-lg md:block hidden bg-[#4d148c] rounded-full px-3 py-2 text-white'>
            Contact us
          </Button>
          <MoonOutlined style={{fontSize:'25px'}}/>
        </div>
      </Col>
    </Row>
  )
}
