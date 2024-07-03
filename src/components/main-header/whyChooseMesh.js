import { Col, Row } from "antd";
import Image from "next/image";
import playButtonImage from '@/images/image-2.gif'
import Button from "@/ui/button";

export default function WhyChooseMesh() {
  return (
    <section className="bg-white w-full p-10 dark:bg-slate-800 dark:text-white">
        <Row gutter={6} align={'middle'} justify={'space-between'}>
            <Col span={24} md={8} className="text-center md:text-start">
            <h1 className="text-[#4d148c] text-5xl md:text-7xl font-bold roboto">50%</h1>
            <p className="mt-2 font-lg text-lg">Improved time of Productivity..</p>
            </Col>
            <Col span={24} md={8} className="flex flex-col justify-center items-center">
            <Image src={playButtonImage} width={300} alt="a play button"/>
            
            </Col>
            <Col span={24} md={8} className="text-center md:text-start">
             <h1 className="text-[#4d148c] text-3xl font-bold mb-3">What makes <span className="text-[#ff7526]">MeshSq</span> Your #1 Choice</h1>
             <p className="mb-3 text-lg">Here’s how we stand out among other lead generation firms.</p>
             
                <li className="text-start">Agile solutions for dynamic business requirements</li>
                <li className="text-start">Seamless transitions in a rapidly evolving landscape</li>
                <li className="text-start">Comprehensive performance insights for elevated decision-making</li>
                <li className="text-start">Empowering teams to optimize strategies and drive success</li>
                <li className="text-start">Providing a perfect harmony between workflow and flexibility</li>
            
             <Button className='bg-[#4d148c] rounded-full text-white mt-5 hover:bg-white hover:text-[#4d148c] border-2 border-[#4d148c] px-5' size='medium'>
                let's Talk
             </Button>
            </Col>
        </Row>
    </section>
  )
}
