'use client'
import { MoonFilled, MoonOutlined, SunFilled, SunOutlined } from "@ant-design/icons"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"


export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme("light")


    useEffect(()=>{
        setMounted(true)
    }, [])

    if(!mounted)return(
        null
    )

    
    console.log(theme, "theme")
   

    return(
        <div>
            {theme === "light" ? <MoonOutlined  style={{fontSize:"25px"}} onClick={()=>setTheme('dark')}/> : <SunOutlined style={{fontSize:"25px"}} onClick={()=>setTheme('light')}/> }
        </div>


    )
}

