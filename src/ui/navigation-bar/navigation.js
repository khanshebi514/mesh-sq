import Image from "next/image";
import logoImg from '@/images/logo.svg'
import NavItem from "./nav-item";
import Button from "../button";
import {MoonOutlined} from '@ant-design/icons'
export default function Navigation() {
  return (
    <div className="w-full  h-[100px] flex justify-around items-center bg-white shadow-md">
        <Image src={logoImg} alt="meshq logo image" width={200}/>
        <NavItem/>
        <div className="flex flex-row justify-between items-center gap-10">
         <Button className='bg-[#4d148c] hover:bg-white text-white rounded-full' size={'medium'}>
            Contact us
         </Button>
         <MoonOutlined style={{fontSize:'30px'}}/>
        </div>
        
    </div>
  )
}
