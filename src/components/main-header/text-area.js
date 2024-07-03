import handEmoji from '@/images/hand.webp'
import Image from 'next/image'
export default function TextArea() {
  return (
    <div className='w-full flex items-center md:items-start p-5 flex-col relative text-start md:text-[5rem] leading-tight text-2xl md:ml-10 dark:bg-black dark:text-white'>
        <div className='slide-text-background absolute top-2 md:mb-5'>
        </div>

        <div className='absolute z-10 top-2 text-center flex justify-center'><h1 className="font-bold dark:text-white roboto text-start text-bgg text-white after:content-('arrow-image')">Navigate the Digital  </h1>     
        </div>
        <div className='hidden md:block absolute top-[1rem] right-[2rem]  md:top-[1rem] md:right-[11rem]'> 
        <Image src={handEmoji} width={150} alt='hand image'/>

        </div>
        
        <h1 className='mt-[60px] md:mt-[80px] text-[#4d148c] font-bold roboto dark:text-white'>Arena With Mesh SQ</h1>
        <h1 className=' text-[#4d148c] font-bold roboto dark:text-white'>Digital Innovation</h1>
    </div>
  )
}
