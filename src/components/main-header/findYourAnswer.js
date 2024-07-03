import{ Collapse, Space } from "antd";
import { yourAnswers } from "@/data/webData";

export default function FindYourAnswer() {
    const text = [

    ]
  return (
    <div className="flex flex-col justify-center items-center monseret gap-5 p-5 dark:bg-transparent dark:text-white">
        <h1 className="font-bold text-3xl text-[#4d148c] roboto mt-5 dark:text-white">Find the Answers You Need</h1>
        
        <div>

        </div>
      <Space direction="vertical" size={'middle'} className="dark:text-white" >
         <Collapse
         collapsible="header"
         expandIconPosition="end"
         size="large"
         
         items={
            [
                {
                    key:1,
                    label:yourAnswers[0].question,
                    children:yourAnswers[0].answer
                    
                }
            ]
         }
         >
          
         </Collapse>   

         <Collapse
         collapsible="header"
         expandIconPosition="end"
         size="large"
         items={
            [
                {
                    key:1,
                    label:yourAnswers[1].question,
                    children:yourAnswers[1].answer
                    
                }
            ]
         }
         >
          
         </Collapse>

         <Collapse
         collapsible="header"
         expandIconPosition="end"
         size="large"
         items={
            [
                {
                    key:1,
                    label:yourAnswers[2].question,
                    children:yourAnswers[2].answer
                    
                }
            ]
         }
         >
          
         </Collapse>

         <Collapse
         collapsible="header"
         expandIconPosition="end"
         size="large"
         items={
            [
                {
                    key:1,
                    label:yourAnswers[3].question,
                    children:yourAnswers[3].answer
                    
                }
            ]
         }
         >
          
         </Collapse>
     </Space>  
    </div>
  )
}
