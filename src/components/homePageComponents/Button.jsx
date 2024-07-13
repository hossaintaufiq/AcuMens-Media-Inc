import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({ children, className = "" }) => {
  return (
    <div className={`w-fit px-4 pt-2 pb-1 bg-black text-white transition-colors duration-700 hover:bg-blue-Purple rounded-full cursor-pointer text-[12px] font-bold font-syne uppercase shrink-0 ${className} flex justify-center items-center gap-1 `}>
      <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
        <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-white before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">

          {children}

        </span>
      </div>
      <span className="text-2xl mb-1">
        <IoIosArrowRoundForward />
      </span>
    </div>
  )
}

export default Button