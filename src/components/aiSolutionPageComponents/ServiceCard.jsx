/* eslint-disable react/prop-types */
import "../homePageComponents/DisplayCard.css"
import { socialMediaServices } from '../../constants/constant';
import { FaCircleCheck } from "react-icons/fa6";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";


const ServiceCard = ({ services }) => {
    return (
        <div className='md:gap-5  gap-3 flex lg:flex-row
        flex-col justify-center lg:justify-between items-center'>

            {
                socialMediaServices.map((service) => (

                    <div key={service.id} className="card select-none">
                        <div className="front-card px-4 py-4 space-y-6">

                            <h1 className='text-xl text-center font-bold font-syne text-black'>{service.header}</h1>

                            <div className='bg-white rounded-[40px] p-2 flex flex-col justify-center items-center space-y-3 max-w-[90%] max-h-[75%]'>
                                <span className='flex h-44 w-44 rounded-full border-[1px] border-slate-500 justify-center items-center'>
                                    <span className='flex flex-col gap-y-2 h-[138px] w-[138px] rounded-full border-[1px] border-blue-800 justify-center items-center p-6'>
                                        <span className='text-5xl font-bold font-syne text-black'>{service.percentage}</span>
                                        <span className='text-3xl text-purple-600'><BiSolidUpArrowAlt /></span>
                                    </span>

                                </span>
                                <span className='text-base text-center font-light font-kanit leading-6 tracking-normal text-black'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore pariatur itaque eos, aspernatur officia quia aut quos magnam ratione nesciunt totam est! Nobis autem at nulla, dicta beatae sapiente?
                                </span>

                            </div>


                        </div>
                        <div className="back-card p-6 space-y-6">

                            <p className='h-[35%] text-[17px] text-left font-bold font-syne text-black'>
                                {service.content}
                            </p>
                            <ul className='flex flex-col gap-4 justify-center items-start h-[45%] list-none text-[15px] font-normal text-black font-syne'>
                                {
                                    service.list.map((service, index) => (

                                        <li key={index} className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span className="text-[14px]">{service}</span></li>

                                    ))
                                }
                            </ul>
                            <div className='h-[20%]'>
                                <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                                    <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                                        <Link to={service.router} className="font-bold uppercase text-sm font-syne">Get Details</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }


        </div>
    )
}

export default ServiceCard