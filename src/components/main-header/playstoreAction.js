
import Image from "next/image";
import phoneImage from '@/images/image-3.webp'
export default function CardAction() {
  return (
    <div className="relative my-10">
        <h1 className="font-bold ml-2 text-3xl md:text-5xl text-[#4d148c] dark:text-white robtot mb-2">Put Us in Your Pocket</h1>
        <div className="w-full rounded-lg bg-orange-500 dark:bg-white dark:text-black flex flex-col p-5 justify-center md:justify-start items-center md:items-start gap-5">
            <p className="md:w-[700px] text-white dark:text-black">
            Mesh Sq will launch its app very soon, providing you with services not limited to automation, design, development, and digital marketing but also other services in our domain and your rising demands. So stay connected with us to know our best services, and let us know about your projects or ideas so we can help you organize them efficiently and accurately.
            </p>

            <div className="mt-5">
                <img src='https://meshsq.com/_next/image?url=%2Fimages%2Fpocket%2Fsecond.png&w=640&q=75' width={300}/>
            </div>
        </div>

        <div className="absolute bottom-5 right-0 hidden md:flex">
        <Image src={phoneImage} width={350} className=""/>
        </div>
        
    </div>
  )
}
