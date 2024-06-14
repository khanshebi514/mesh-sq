import { services } from "@/data/webData"
export default function ServiceWeProvide() {
  return (
   <div className="flex justify-center items-center flex-col mt-6">
    <h1 className="font-bold text-5xl text-[#4d148c]">
    Services We Provide
    </h1>
      <p className="text-wrap font-normal w-[500px] text-center mt-2">{services}</p>
   </div>
  )
}
