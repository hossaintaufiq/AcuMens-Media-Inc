import { Link } from "react-router-dom"

const StrategyCard = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row-reverse px-8 lg:px-0 lg:justify-between justify-center items-start gap-6'>
      <div className='w-full md:w-1/2 space-y-6 text-left '>
        <h6 className='text-left uppercase text-lg font-bold font-syne text-black'>AI SOLUTIONS</h6>
        <h1 className='text-left text-3xl lg:text-4xl font-bold font-syne lg:w-[90%] text-black'>Strategic Synergy: Elevating Your Vision with Our Dedicated Services</h1>
        <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 lg:w-[90%]'>At the heart of our approach is an unyielding commitment to your strategic goals. Whether crafting engaging content, developing innovative applications, or revolutionizing communication through CCaaS and Outsourcing & Consulting, we are dedicated to aligning with your vision. As your partners, we provide tailored solutions that drive your business towards sustained growth and success</p>
        <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
          <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
            <Link to={"/about.htm"} className="font-syne uppercase text-sm tracking-tight font-bold leading-6 text-black">MORE ABOUT OUR COMPANY</Link>
          </span>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex lg:justify-start justify-center items-center'>
        <img src="../AiSolutions/pexels-pavel-danilyuk-7675014.webp" alt="sdsds" className='md:w-[550px] w-full md:h-[450px] h-full object-cover rounded-[40px] transition-transform duration-1000 hover:scale-95' loading= "lazy"/>
      </div>
    </div>
  )
}

export default StrategyCard