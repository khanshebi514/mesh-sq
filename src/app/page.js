'use client'
import LoaderSpinner from "@/ui/loading-effect/loaderSpinner";
import HomePage from "./homePage/homePage";
import { useState, useEffect } from "react";
export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true)
   

  useEffect(()=>{
      setTimeout(()=>{
          setIsLoading(false)
      }, 2000)
  }, [])

  return (
    <>
      {isLoading ? <div className="w-full h-[100%] flex justify-center items-center absolute top-0 z-[999] bg-black"><LoaderSpinner/></div> : <HomePage/>}
    </>
  );
}
