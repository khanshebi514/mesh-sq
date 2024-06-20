import { useState, useEffect } from "react"
import LoaderSpinner from "./loaderSpinner"
import Home from "@/app/page"
export default function LoaderTime() {


return (
    isLoading ? <LoaderSpinner/> : <Home/>
)
}
