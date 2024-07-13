import { FaQuoteLeft } from "react-icons/fa";

const BannerL = ({color}) => {
  return (
    <div>
      <div className='flex flex-col md:flex-row-reverse lg:justify-between justify-center items-start gap-6 py-10'>
        <div className='w-full md:w-[65%] space-y-6 text-left lg:pt-10 md:ml-14'>
          <h6 className={` uppercase text-5xl font-bold font-syne w-[51px] bg-lime-300 ${color}`}><FaQuoteLeft /></h6>
          <h1 className={`text-left text-3xl lg:text-4xl font-semibold font-sans lg:w-[90%] ${color}`}>Turning my vision into a website using Hostinger Website Builder was a breeze, all thanks to its simplicity and speed.</h1>
          <hr />
          <p className={`text-left text-lg font-kanit font-normal tracking-normal leading-6 ${color} lg:w-[90%]`}>Indira Prieto</p>
          <p className={`text-left text-base font-kanit font-normal tracking-normal leading-6 ${color} lg:w-[90%]`}>Lettering Artist, Illustrator & Graphic Designer | theindysign.com</p>
        </div>
        <div className='w-full md:w-[35%] flex lg:justify-start justify-center items-center'>
          <img src="../AiSolutions/pexels-pavel-danilyuk-7675014.webp" alt="sdsds" className='md:w-[450px] w-full md:h-[350px] h-full object-cover rounded-[40px] transition-transform duration-1000 hover:scale-95' loading= "lazy"/>
        </div>
      </div>
    </div>
  )
}

export default BannerL
