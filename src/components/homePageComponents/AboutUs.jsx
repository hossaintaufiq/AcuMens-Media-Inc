/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const AboutUs = ({ about }) => {
    return (
        <div>
            <h2 className='text-left uppercase text-lg font-semibold font-syne text-black'>{about.title}</h2>
            <div className='flex flex-col md:flex-row justify-center items-start gap-x-7'>
                <div className='w-full md:w-1/2 py-5'>
                    <p className='text-left text-2xl lg:text-3xl font-bold font-syne w-[90%]  text-black'>{about.overView}</p>
                </div>
                <div className='w-full md:w-1/2 py-5'>

                    <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 '>{about.about}</p>

                    <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                        <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                            <Link to="/about.htm" className="font-bold uppercase text-sm font-syne">{about.buttonTitle}</Link>
                        </span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutUs