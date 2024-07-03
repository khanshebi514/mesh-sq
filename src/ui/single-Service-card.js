
import Image from "next/image"
import Button from "./button"

export default function SingleServiceCard({item, image, background='#ffff', headingClass, button=true, width=80}) {
  return (
    <div className={`w-[250px] flex justify-around items-center gap-3 flex-col bg-[${background}] rounded-[30px] p-5 text-center cursor-pointer hover:shadow-lg shadow-xl my-10 dark:bg-black dark:text-white`}>
        <Image src={image} width={width} alt='a source image' className="hover:p-2"/>
        <p>{item.para}</p>
        <h1 className={`${headingClass} ' ' font-bold roboto text-[#4d148c] dark:text-white`}>{item.title}</h1>
        <p>{item.description}</p>

        {button ? <Button className='bg-[#4d148c] text-white rounded-full text-xs roboto px-3 py-2 hover:bg-white hover:text-[#4d148c] border-2 border-[#4d148c] dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white'>
            Show more
        </Button> : <></>}
        
    </div>
  )
}
