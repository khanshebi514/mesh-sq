import { Col, Row } from "antd";

export default function WhyWorkWithUS() {
  return (
    <div className="w-full my-10 dark:text-white dark:bg-transparent">
        <Row className="w-full p-5 my-10">
            <Col span={24} className="flex justify-center flex-col items-center">
            <h1 className="font-bold text-3xl md:text-5xl text-[#4d148c] roboto">Why Work With US</h1>
            <p className="font-normal text-lg mt-3">Master the art of building custom solutions regardless of company size or industry</p>
            </Col>
        </Row>

        <Row className="w-full" gutter={6}  justify={"center"} align={'top'}>

            <Col span={24} md={10}>
            <div className="flex flex-col justify-around items-center md:items-end gap-3 md:gap-0 md:h-[300px] mr-4">
            <div>
                <h1 className="font-lg text-lg md:text-2xl roboto">Understanding and Observing</h1>
            </div>

            <div>
                <h1 className="font-lg text-lg md:text-2xl roboto">Specialized Solutions</h1>
            </div>

            <div>
                <h1 className="font-lg text-lg md:text-2xl roboto">Client-Centric Approach</h1>
            </div>
            </div>
           
            </Col>

            <Col span={24} md={2} className="my-5 md:my-0 ml-[5rem] md:ml-0">
             <div className="relative md:w-[5px] md:h-[300px] w-[300px] h-[5px] mt-5 md:mt-0 bg-blue-950 rounded-lg">
                <div className="absolute flex justify-around items-center md:flex-col w-full h-full">
                <span className="w-[25px] h-[25px] rounded-full bg-orange-500 border-4 border-white"></span>
                <span className="w-[25px] h-[25px] rounded-full bg-orange-500 border-4 border-white"></span>
                <span className="w-[25px] h-[25px] rounded-full bg-orange-500 border-4 border-white"></span>
                </div>
               
             </div>
            </Col>


            <Col span={24} md={12}>
            
            <div className="flex flex-col justify-around items-start monseret mr-4 h-[300px]">
            <div className="p-2 hover:p-0 cursor-pointer ease-in-out ">
                    <p className="">
                    Understanding and observing your industry's intricacies is our prime approach. With our team's specialized knowledge and experience, we offer solutions proven to drive tangible results. Digging deep into unique requirements of your business at a professional level.
                    </p>
            </div>

            <div className="p-2 hover:p-0 cursor-pointer ease-in-out">
                   <p className="">
                   Our approach primarily works to increase business efficiency, expand your market reach, enhance and retain customer engagement, and provide perfect solutions aligning with your vision.
                   </p>
            </div>

            <div className="p-2 hover:p-0 cursor-pointer ease-in-out">
                   <p className="">
                   Every business associates its aspirations, and we commit to fulfilling those. Our client-centric approach means we are your service partner in your success journey. You can expect open communication, timely response, and an active team sharp at going the extra mile to exceed your expectations.
                   </p>
            </div>
            </div>

            </Col>
        </Row>
    </div>
  )
}
