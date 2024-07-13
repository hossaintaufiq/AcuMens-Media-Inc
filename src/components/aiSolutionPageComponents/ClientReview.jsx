import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClientReview = ({ review }) => {
    return (
        <div className='flex flex-col md:flex-row gap-6 justify-center items-center bg-gray-200 rounded-[40px]'>
            <div className='w-full md:w-1/2 space-y-20 py-20 px-20'>
                <span className="text-7xl text-blue-Purple"><RiDoubleQuotesR /></span>
                <p className="text-xl font-kanit font-normal leading-6 tracking-normal italic">{review}</p>
                <div className="space-y-0">
                    <h6 className='text-left uppercase text-lg font-semibold font-syne text-black'>DIRECTOR OF MARKETING</h6>
                    <p className="font-kanit font-light">Zarra Home</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 rounded-[40px] h-[580px] relative">
                <img src="./aiSolutionPictures/video-cover.webp" alt="sdsds" className='w-full h-full object-cover absolute rounded-[40px]' loading= "lazy"/>
                <div className="absolute h-24 w-full  bottom-0 left-0 rounded-tl-[46px] rounded-br-[40px] flex flex-row justify-between items-center px-8 bg-white">
                    <div className="flex flex-col justify-center items-center gap-y-2">

                        <div className="flex gap-x-2 justify-center items-center">
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                            <span className="text-yellow-500 text-sm md:text-lg"><FaStar /></span>
                        </div>
                        <div className="text-[10px] md:text-sm font-kanit font-normal leading-6 tracking-normal ">
                            5000+ Client reviews
                        </div>
                    </div>


                    <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                        <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                            <Link to="https://clutch.co/profile/red-key-solutions#summary" target="_blank" className="font-bold uppercase text-[10px] md:text-sm font-syne">View All Reviews</Link>
                        </span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ClientReview