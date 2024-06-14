
import Image from "next/image"
import Button from "./button"

export default function SingleServiceCard({item, image, background='#ffff', headingClass, button=true}) {
  return (
    <div className={`w-[250px] flex justify-around items-center gap-3 flex-col bg-[${background}] rounded-[30px] p-5 text-center cursor-pointer hover:shadow-lg shadow-md`}>
        <Image src={image} width={80} alt='a source image'/>
        <p>{item.para}</p>
        <h1 className={`${headingClass} ' ' font-bold `}>{item.title}</h1>
        <p>{item.description}</p>

        {button ? <Button className='bg-[#4d148c] text-white rounded-full text-[1rem] hover:bg-white hover:text-[#4d148c] border-2 border-[#4d148c]' size={'small'}>
            Show more
        </Button> : <></>}
        
    </div>
  )
}
