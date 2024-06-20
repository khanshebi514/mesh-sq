
import { Col, Row } from "antd";
import Image from "next/image";
import logoImage from '@/images/logo.svg'
import { RiInstagramFill, RiTwitterXFill, RiFacebookFill, RiLinkedinBoxFill } from "react-icons/ri";
import Link from "next/link";
import Button from "../button";

export default function Footer() {
    const style ={
        fontSize:'30px', 
        color:'orange'
    }
  return (
    <div className="bg-[#eee7f5] text-center md:text-start">
        <Row className="p-5" align={'middle'} justify={'space-between'}>
            <Col sm={24} md={6} className="flex flex-col justify-center items-center md:items-start gap-5 border-b-2 border-b-[#742092] md:border-0">
               <Image src={logoImage} width={150} alt="a logo image of mesh Sq"/>
               <p className="text-lg">
                  A thriving digital marketing agency offering complete services for diverse businesses. Attract, convert, and generate more leads online with us!
               </p>
               <div className="flex justify-center items-center gap-3">
               <RiTwitterXFill style={style}/>
               <RiInstagramFill style={style}/>
               <RiFacebookFill style={style}/>
               <RiLinkedinBoxFill style={style}/>
               </div>
            </Col>

            <Col sm={24} md={10} className="flex justify-center text-center md:justify-around gap-10 flex-col md:flex-row w-full my-5">
                  <Col>
                  <h2 className="text-xl font-bold mb-6">Menu</h2>
                  <div className="link flex flex-col gap-5 text-lg">
                  <Link href='/'>Home</Link>
                  <Link href='/'>About</Link>
                  <Link href='/'>Carrier</Link>
                  <Link href='/'>Blog</Link>
                  <Link href='/'>Privacy</Link>
                  </div>
                  
                  </Col>
                  <Col>
                  <h2 className="text-xl font-bold mb-6">Services</h2>
                  <div className="link flex flex-col gap-5 text-lg">
                  <Link href='/'>Automation</Link>
                  <Link href='/'>Design</Link>
                  <Link href='/'>Development</Link>
                  <Link href='/'>Digital Marketing</Link>
                  </div>
                 </Col>
            </Col>

            <Col span={24} md={6} className="text-center md:text-start" >
              <h2 className="text-xl font-bold mb-6">
                Subscribe to Our Newsletter
              </h2>
              <div className="flex flex-col gap-2 md:w-[300px] justify-center items-center md:justify-start md:items-start">
              <label htmlFor="email">Email:</label>
              <input type="text" placeholder="Enter your Email" id="email" className="py-2 px-1 rounded-lg border-[#742092] border-[1px] outline-none"/>
              </div>
              <Button className='bg-[#742092] rounded-full mt-5 text-white' size={'medium'}>Subscribe Us</Button>
            </Col>
        </Row>
    
    </div>
  )
}
