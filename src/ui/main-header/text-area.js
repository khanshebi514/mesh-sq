import handEmoji from '@/images/hand.webp'
import Image from 'next/image'
export default function TextArea() {
  return (
    <div className='full flex items-center gap-5 p-5 flex-col relative text-start'>
        <div className='slide-text-background absolute top-10'></div>

        <div className='w-[800px] absolute z-10 top-10 text-center flex justify-center'><h1 className="font-bold text-7xl text-star text-bgg text-white after:content-('arrow-image')">Navigate the Digital  </h1>     
        </div>
        
        <h1 className='mt-[120px] text-7xl text-[#4d148c] font-bold'>Arena With Mesh SQ</h1>
        <h1 className='text-7xl text-[#4d148c] font-bold'>Digital Innovation</h1>
    </div>
  )
}
