import handEmoji from '@/images/hand.webp'
import Image from 'next/image'
export default function TextArea() {
  return (
    <div className='w-full flex items-center md:gap-5 p-5 flex-col relative text-start md:text-7xl text-2xl'>
        <div className='slide-text-background absolute top-10 md:mb-5'></div>

        <div className='absolute z-10 top-10 text-center flex justify-center'><h1 className="font-bold text-star text-bgg text-white after:content-('arrow-image')">Navigate the Digital  </h1>     
        </div>
        
        <h1 className='mt-20 md:mt-28 text-[#4d148c] font-bold'>Arena With Mesh SQ</h1>
        <h1 className=' text-[#4d148c] font-bold'>Digital Innovation</h1>
    </div>
  )
}
