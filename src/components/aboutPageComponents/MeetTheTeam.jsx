import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const MeetTheTeam = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-start items-start gap-6 px-8 lg:px-0">
      <div className="w-full md:w-1/2 space-y-6 text-left">
        <h6 className="text-left uppercase text-lg font-semibold font-syne text-black">
          team
        </h6>
        <h1 className="text-left text-4xl lg:text-5xl font-bold font-syne text-black">
          Meet the Acumens Founder
        </h1>
      </div>
      <div className="w-auto md:w-[350px] md:h-[350px] h-auto">

        <img src='./pexels-ono-kosuki-5648103.webp' className=' rounded-[35px]' loading= "lazy" />

        <div className="flex justify-between items-center py-2 px-4">
          <div>
            <h1 className='text-xl font-syne pt-3 font-bold text-start '> Patrick Murphy  </h1>
            <h1 className='text-base font-sans text-start '> CEO & Founder </h1>
          </div>
          <div>
            <span className="w-12 h-12 rounded-full flex justify-center items-center text-[22px] bg-gray-200 text-blue-Purple cursor-pointer hover:text-blue-700 transition-all duration-500">
             <Link to="https://www.linkedin.com" target="_blank"><FaLinkedin /></Link> 
            </span>
          </div>


        </div>
      </div>
    </div>
  )
}

export default MeetTheTeam