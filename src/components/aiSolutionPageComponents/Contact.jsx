/* eslint-disable react/prop-types */
import Button from '../homePageComponents/Button'
import { partnerImages } from '../../constants/constant'
import { Link } from 'react-router-dom'

const Contact = ({ message }) => {
    return (
        <div className="bg-[#e9e5ff] py-10 px-6 lg:px-10 rounded-t-[40px] ">
            <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6'>
                <div className='h-auto w-full lg:w-[60%]'>
                    <h1 className='text-center lg:text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[88%] text-black'>{message}</h1>
                </div>
                <div className='h-auto w-full lg:w-[40%] text-center lg:text-right'>
                    <p className=' text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 '>Ready to speak with a marketing <br /> expert ? Call Us</p>
                    <Link to="tel:+18009694409"><p className=' text-lg font-syne font-bold tracking-normal leading-6 text-black mb-5 '>SALES : 800-969-4409</p></Link>
                    <Link to="tel:+18884915291"><p className=' text-lg font-syne font-bold tracking-normal leading-6 text-black mb-5 '>SUPPORT : 888-491-5291</p></Link>
                    <div className='flex justify-center lg:justify-end items-center'>
                        <Button className='flex'><Link to="/audit.htm">Get An Audit</Link></Button>
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <img src="../AiSolutions/border-center.webp" className='w-full' loading= "lazy"/>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6 pt-10 '>
                <div className='h-auto w-full lg:w-[60%] space-y-6 mb-10 lg:mb-0'>
                    <h6 className='text-center lg:text-left uppercase text-lg font-semibold font-syne text-black'>A PARTNER, NOT A VENDOR</h6>
                    <ul className='flex justify-center lg:justify-start items-center gap-6 flex-wrap'>
                        {
                            partnerImages.map((image, index) => (
                                <li className='w-28 h-28' key={index}>
                                    <img className='w-full h-full object-contain' src={image} alt={image} loading= "lazy"/>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <div className='h-auto w-full lg:w-[40%] text-center lg:text-right space-y-6'>
                    <p className='text-5xl font-syne font-bold leading-6'>6.7 <span className='text-sm'>/ Average ROAS</span></p>
                    <p className=' text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 '>across our 1000+ Global <br /> Clients on SEO, PPC & Social <br /> Media platforms.</p>
                </div>
            </div>

        </div>
    )
}

export default Contact
