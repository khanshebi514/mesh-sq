import CountUp from "react-countup";

export default function Counter() {

  const styling = {fontSize:'60px', color:'white', fontWeight:'bold'}
  const paraStyle = 'text-md text-white'
  return (
    <div className="w-[850px] flex md:flex-row flex-col justify-center text-wrap text-center gap-5 items-center bg-[#ff7526] rounded-[50px] h-[150px] m-auto p-5">
      <div>
        <CountUp start={0} suffix="+" end={150} style={styling}></CountUp>
        <p className={paraStyle}>Project completed Successfullu</p>
      </div>

      <div>
        <CountUp start={0} end={2} suffix="+" style={styling}></CountUp>
        <p className={paraStyle}>World wide happy customer</p>
      </div>

      <div>
        <CountUp start={0} end={70} suffix="%" style={styling}></CountUp>
        <p className={paraStyle}>Long term Client</p>
      </div>

      <div>
        <CountUp start={0} end={7} suffix="+" style={styling}></CountUp>
        <p className={paraStyle}>Years of Experence in Innovation</p>
      </div>
    </div>
  );
}
