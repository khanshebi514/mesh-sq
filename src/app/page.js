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
      {isLoading ? <LoaderSpinner/> : <HomePage/>}
    </>
  );
}
