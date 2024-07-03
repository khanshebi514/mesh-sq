import { services,serviceCard } from "@/data/webData";
import serviceImage_1 from '@/images/image-111.webp'
import serviceImage_2 from '@/images/image-222.webp'
import serviceImage_3 from '@/images/image-33.webp'
import serviceImage_4 from '@/images/image-44.webp'


import SingleServiceCard from "./single-Service-card";
export default function ServiceWeProvide() {
  return (
    <div className="flex justify-center items-center flex-col mt-6 text-center mb-5 dark:text-white">
      <div>
        <h1 className="font-bold text-2xl roboto md:text-5xl text-[#4d148c] dark:text-white">
          Services We Provide
        </h1>
        <p className="font-normal text-center mt-5">
        Carving the New Dimensions in the Digital Realm! </p>
        <p>
        <span className="text-orange-600">  Mesh Sq </span>  
          strives to revolutionize your brand engagement and digital face
        </p>
      </div>

      <div className="flex justify-center gap-5 mt-10 flex-col md:flex-row flex-wrap dark:text-white">
      <SingleServiceCard item={serviceCard[0]} image={serviceImage_1} background="white"/>
      <SingleServiceCard item={serviceCard[0]} image={serviceImage_2} background="white"/>
      <SingleServiceCard item={serviceCard[0]} image={serviceImage_3}/>
      <SingleServiceCard item={serviceCard[0]} image={serviceImage_4}/>
      </div> 
    </div>
  );
}
