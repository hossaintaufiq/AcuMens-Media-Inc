/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "../homePageComponents/Button"

const Hero = ({ hero }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-start gap-6 px-8 lg:px-0 pt-16'>
      <div className='w-full md:w-1/2 space-y-6 text-left'>
        <h6 className='text-left uppercase text-lg font-bold font-syne text-black tracking-tighter'>{hero?.title}</h6>
        <h1 className='text-left text-3xl lg:text-5xl font-bold font-syne  text-black'>{hero?.heading}</h1>
        <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 '>{hero?.context1}</p>
        {hero?.context2 && <p className='text-left text-lg font-kanit font-normal tracking-normal leading-6 text-black mb-5 '>{hero?.context2}</p>}
        <Button><Link to={hero?.router}>{hero?.buttonText}</Link></Button>
      </div>
      <div className='w-full md:w-1/2 flex lg:justify-end justify-center items-center'>
        <img src={hero?.photo} alt="sdsds" className='w-[400px] h-[400px] object-cover rounded-[40px] transition-transform duration-1000 hover:scale-95' loading= "lazy" />
      </div>
    </div>
  )
}

export default Hero