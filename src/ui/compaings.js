'use client'

import growthImg from '@/images/img1.svg'
import Image from "next/image";
import CountUp from "react-countup";

import serviceImage_1 from '@/images/image-111.webp'
import serviceImage_2 from '@/images/image-222.webp'
import serviceImage_3 from '@/images/image-33.webp'
import serviceImage_4 from '@/images/image-44.webp'
import SingleServiceCard from './single-Service-card';
import { growthCard } from '@/data/webData';

export default function Compaings() {
  return (
    <div className="w-full flex flex-col justify-center py-10 bg-white text-center items-center m-auto">
        <h1 className="font-bold text-2xl md:text-5xl text-[#4d148c]">Campaigns Expanded by {<CountUp delay={1} duration={5} start={59} suffix="%" end={61} scrollSpyDelay={1000} redraw/> } in <span className="text-orange-600">
         {<CountUp start={2020}  duration={5} end={2023}/>}    </span></h1>

         <div className=' w-full mt-10 md:flex justify-center items-center hidden'>
            <Image src={growthImg} alt='growth image'/>
         </div>

         <div className='flex flex-col gap-3 justify-center items-center md:hidden'>
                <SingleServiceCard background='#f7f0ff' item={growthCard[0]} image={serviceImage_1} button={false}/>
                <SingleServiceCard background='#f7f0ff' item={growthCard[1]} image={serviceImage_2} button={false}/>
                <SingleServiceCard background='#f7f0ff' item={growthCard[2]} image={serviceImage_2} button={false}/>
               
         </div>
         <div>

         </div>

    </div>
  )
}
