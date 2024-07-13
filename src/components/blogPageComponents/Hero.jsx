import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-start items-start gap-y-10 gap-x-6'>
            <div className='w-full md:w-1/2 space-y-6 md:space-y-20 text-left '>
                <h6 className='text-left uppercase text-lg font-semibold font-syne text-black'>May 12, 2023</h6>
                <h1 className='text-left text-3xl lg:text-5xl font-bold font-syne text-black'>
                    The evolution of live-stream content and short-form video: a look at the TikTok revolution
                </h1>
                <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                    <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                        <Link to="/" className="font-bold uppercase text-sm font-syne tracking-tight text-black">read full story</Link>
                    </span>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center lg:justify-end items-center'>
                <img src="GettyImages-1436826358.webp" alt="Hero-Img" className='w-[400px] object-cover rounded-[40px]' loading= "lazy"/>
            </div>
        </div>
    )
}

export default Hero