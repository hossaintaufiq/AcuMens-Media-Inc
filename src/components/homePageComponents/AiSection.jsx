import Button from "./Button"
import { Link } from "react-router-dom"

const AiSection = () => {
    return (
        <>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='w-full h-full lg:w-[50%] text-left'>
                    <div className="w-[80%] space-y-4 lg:space-y-8">
                        <h4 className='text-base font-bold uppercase font-syne text-black '>ASCendance OF AI</h4>
                        <h1 className='text-4xl lg:text-5xl font-bold font-syne text-black'>Precision in Digital Evolution: AI Unveiled</h1>
                        <p className='text-base font-light font-kanit tracking-normal leading-6'>Discover the Future of Digital Excellence with Our AI-Powered Solutions. At Acumens Media, we leverage cutting-edge artificial intelligence technologies to drive innovation and transform your digital presence. Our advanced AI tools are meticulously crafted to propel your business into the future, ensuring unparalleled success in the dynamic digital landscape.</p>
                        <Button><Link to="/contact.htm">Collaborate with Acumens</Link></Button>

                    </div>


                </div>
                <div className='lg:w-[50%] w-full'>

                    <div className='relative w-full bg-red-500'>
                    
                        <img src="GettyImages-1436826358.webp" alt="GettyImages-1436826358" className='w-56 h-52 sm:w-96 sm:h-96 2xl:w-[450px] 2xl:h-[450px] rounded-[40px] absolute object-cover top-0 lg:-top-48 left-0' loading= "lazy" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="53" viewBox="0 0 54 53" className='absolute -top-6 left-0 md:-top-[218px] md:left-36 custom-rotation-star z-50'>
                            <g fill="" fillRule="nonzero">
                                <path d="M27.07.77c-5.93 19.07-3.73 19.51-26.51 26 22.78 6.49 20.58 6.93 26.5 26 5.9-19.07 3.72-19.52 26.5-26-22.78-6.48-20.6-6.93-26.5-26ZM45.24 14.54c1.17-3.79.74-3.88 5.27-5.17C45.98 8.08 46.4 8 45.24 4.2c-1.18 3.8-.74 3.88-5.27 5.17 4.53 1.3 4.1 1.38 5.27 5.17ZM10.87 40.14c-1.5 1.86-1.28 2.01-4.1 1.71 2.26 1.75 1.99 1.7 1.81 4.09 1.5-1.86 1.27-2.01 4.1-1.71-2.26-1.75-2-1.7-1.81-4.09Z">
                                </path>
                            </g>
                        </svg>
                        <img src="GettyImages-1437209359.webp" alt="GettyImages-1437209359" className='w-[190px] h-44 sm:w-64 sm:h-72 2xl:w-[350px] 2xl:h-[400px] rounded-[40px] absolute object-cover top-28 left-28 sm:top-44 sm:left-60 lg:-top-10 md:top-48 md:left-48 2xl:left-72  border-[15px] border-light-purple' loading= "lazy" />

                    </div>
                </div>
            </div>

        </>

    )
}

export default AiSection