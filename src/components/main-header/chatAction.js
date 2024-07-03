import Button from "@/ui/button";

export default function ChatAction() {
  return (
    <div className="relative my-20">
    <div className="w-full rounded-lg bg-orange-500 flex p-5 justify-center md:justify-start items-center md:items-start gap-5 flex-wrap dark:bg-white">
    <h1 className="font-bold ml-2 text-3xl text-white mb-2 roboto dark:text-black">Do You Have a Project in Mind?</h1>

    <div className=" w-full p-5 flex justify-between items-center flex-col md:flex-row">
    <p className="text-white md:w-[50%] dark:text-black">
        Mesh Sq will instantly launch its app with services not limited to automation, design, development, and digital marketing but also other relevant services according to your startup or project idea. Let us know your idea or project to get better services from us, and we can help you establish it professionally and accurately.
        </p>

        <div className="mt-5 flex gap-10 items-center">
            <Button className='bg-[#4d148c] rounded-lg px-5 py-2 border-2 border-[#4d148c] hover:bg-white hover:text-black text-white' size={'small'}>Let's Talk</Button>
            <Button className='bg-[#4d148c] rounded-lg px-5 py-2 border-2 border-[#4d148c] hover:bg-white hover:text-black text-white' size={'small'}>Learn More</Button>
        </div>
    </div>
        
    </div>
    
</div>
  )
}
