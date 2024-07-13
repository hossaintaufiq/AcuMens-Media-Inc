import { FaCircleCheck } from "react-icons/fa6"
import Button from "../homePageComponents/Button"

const HeroL = ({ borderColor, buttonBg, listColor, bgColor }) => {
  return (
    <div>

      <div className="flex justify-center items-start">
        <div className="w-full md:w-[38%]">
          <img src='GettyImages-1437209359.webp' alt="sdsds" className='w-full h-[500px] object-cover rounded-[40px] ' loading= "lazy"/>
        </div>
        <div className="flex  justify-center items-center gap-2 flex-col w-full md:w-[20%] space-y-2">
          <div className={`w-[0.35rem] ${bgColor} border h-[450px] ${borderColor}`}></div>
          {/* <div className={`w-2 ${bgColor} border h-[215px] ${borderColor}`}></div> */}
          <h1 className="text-3xl  font-syne font-extrabold leading-6 tracking-normal"> v<span className=" text-xl">/</span>s </h1>
        </div>
        <div className="w-full md:w-[38%]">
          <img src='GettyImages-1437209359.webp' alt="sdsds" className='w-full h-[500px] object-cover rounded-[40px]' loading= "lazy"/>
        </div>
      </div>

      <div className="flex justify-center items-center">

        <div className="w-full md:w-[38%] space-y-4 text-left p-4">

          <h1 className='text-left text-2xl lg:text-[34] font-bold font-syne  '>Everything You Need to Create a Website</h1>
          <h6 className='text-left uppercase text-lg font-semibold font-syne '>Up to 83% off Hosting + Website Builder</h6>
          <ul className='text-left list-disc text-lg font-kanit font-normal tracking-normal leading-6  mb-5 space-y-4'>

            <li className='flex flex-row gap-x-3 justify-start items-center'> <span className={`${listColor} text-xl`}><FaCircleCheck /></span> <span>Free Domain</span></li>
            <li className='flex flex-row gap-x-3 justify-start items-center'> <span className={`${listColor} text-xl`}><FaCircleCheck /></span> <span>Free Website Migration</span></li>
            <li className='flex flex-row gap-x-3 justify-start items-center'> <span className={`${listColor} text-xl`}><FaCircleCheck /></span> <span>24/7 Customer Support</span></li>

          </ul>
          <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6  mb-5 '>₹
            <span className="text-4xl">69.00</span>
            /mo
            + 3 Months Free
          </p>
          <Button className={`${buttonBg}`}>Start Now</Button>

        </div>

        <div className="flex  justify-center items-center gap-2 flex-col w-full md:w-[20%] space-y-2">
          <div className={`w-[0.35rem] ${bgColor} border h-[350px] ${borderColor}`}></div>
          {/* <h1 className="text-3xl font-syne font-bold leading-6 tracking-normal"> v/s </h1> */}
          {/* <div className={`w-2 ${bgColor} border h-[150px] ${borderColor}`}></div> */}
        </div>

        <div className="w-full md:w-[38%] flex flex-col justify-end items-end space-y-4 p-4">

          <h6 className=' text-2xl lg:text-[34] font-bold font-syne  '>Everything You Need to Create a Website</h6>
          <h6 className=' uppercase text-lg font-semibold font-syne '>Up to 83% off Hosting + Website Builder</h6>
          <ul className='text-lg font-kanit font-normal tracking-normal leading-6  mb-5 space-y-4'>

            <li className='flex flex-row gap-x-3 justify-start items-center'> <span className={`${listColor} text-xl`}><FaCircleCheck /></span> <span>Free Domain</span></li>
            <li className='flex flex-row gap-x-3 justify-start items-center'> <span className={`${listColor} text-xl`}><FaCircleCheck /></span> <span>Free Website Migration</span></li>
            <li className='flex flex-row gap-x-3 justify-start items-center'> <span className={`${listColor} text-xl`}><FaCircleCheck /></span> <span>24/7 Customer Support</span></li>

          </ul>
          <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6  mb-5 '>₹
            <span className="text-4xl">69.00</span>
            /mo
            + 3 Months Free
          </p>
          <Button className={`${buttonBg}`}>Start Now</Button>
        </div>

      </div>

    </div>

  )
}

export default HeroL

{/* <div className={`flex flex-col md:flex-row justify-center items-start gap-6  px-8 py-16 ${index===2?"bg-black text-white rounded-xl":"text-black"}`}>
      <div className='w-full md:w-[30%] space-y-6 text-left '>

        <h1 className='text-left text-3xl lg:text-4xl font-bold font-syne  '>Everything You Need to Create a Website</h1>
        <h6 className='text-left uppercase text-lg font-semibold font-syne '>Up to 83% off Hosting + Website Builder</h6>
        <ul className='text-left list-disc text-lg font-kanit font-normal tracking-normal leading-6  mb-5 space-y-4'>

          <li className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span>Free Domain</span></li>
          <li className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span>Free Website Migration</span></li>
          <li className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span>24/7 Customer Support</span></li>

        </ul>
        <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6  mb-5 '>₹
          <span className="text-4xl">69.00</span>
          /mo
          + 3 Months Free
        </p>
        <Button className="bg-blue-Purple">Start Now</Button>
      </div>
      <div className='w-full md:w-[70%] flex flex-col md:flex-row lg:justify-end gap-4 justify-center items-center'>
        <img src='GettyImages-1437209359.webp' alt="sdsds" className='w-[400px] h-[400px] object-cover rounded-[40px] transition-transform duration-1000 hover:scale-95' />
        <img src='pexels-monstera-6282022-1024x948.webp' alt="sdsds" className='w-[400px] h-[400px] object-cover md:hidden xl:block rounded-[40px] transition-transform duration-1000 hover:scale-95' />
      </div>
    </div> */}