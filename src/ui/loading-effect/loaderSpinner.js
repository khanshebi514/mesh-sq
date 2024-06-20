'use client'
import { Spin } from "antd";
import { useEffect, useState } from "react";


export default function LoaderSpinner() {
  
  return (
    <Spin size="large" style={{fontSize:'100px'}}>
    </Spin>
  )
}
