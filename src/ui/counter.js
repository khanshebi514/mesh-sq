
'use client'

import { useEffect, useState } from "react";
import CountUp from "react-countup";


export default function Counter() {

  const [width, setWidth]   = useState(window.innerWidth);

  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
const values = [
  {
    start:0,
    end:150,
    suffix:'+',
  },

  {
    start:0,
    end:2,
    suffix:'K+',
  },

  {
    start:0,
    end:70,
    suffix:'%',
  },

  {
    start:0,
    end:7,
    suffix:'+',
  },
]

const mobStyling = {fontSize:'2em', color:'white', fontWeight:'bold' }
const deskTopStyling = {fontSize:'4em', color:'white', fontWeight:'bold' }

const styling = width<716 ? mobStyling : deskTopStyling
  const paraStyle = 'text-white text-wrap text-xs md:text-md'
  return (
    <div className={`w-[85%] flex flex-col md:flex-row justify-between text-wrap text-center md:gap-0 gap-5 items-center bg-[#ff7526] rounded-[50px] m-auto px-10 py-5`}>
      <div>
        <CountUp start={values[0].start} suffix={values[0].suffix} end={values[0].end} style={styling}></CountUp>
        <p className={paraStyle}>Projects Completed </p><p className={paraStyle}>Successfully</p>
      </div>

      <div>
      <CountUp start={values[1].start} suffix={values[1].suffix} pr end={values[1].end} style={styling}></CountUp>
      <p className={paraStyle}>World Wide Happy </p><p className={paraStyle}>Customers</p>
      </div>

      <div>
      <CountUp start={values[2].start} suffix={values[2].suffix} end={values[2].end} style={styling}></CountUp>
      <p className={paraStyle}>Long Term</p><p className={paraStyle}>Clients</p>
      </div>

      <div>
      <CountUp start={values[3].start} suffix={values[3].suffix} end={values[3].end} style={styling}></CountUp>
      <p className={paraStyle}>Years of Experience</p><p className={paraStyle}>in Innovative Work</p>
      </div>
    </div>
  );
}

