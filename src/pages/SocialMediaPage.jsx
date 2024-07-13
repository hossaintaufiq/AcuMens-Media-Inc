import Hero from "../components/aiSolutionPageComponents/Hero"
import MarketingSection from "../components/aiSolutionPageComponents/MarketingSection"
import AiProcess from "../components/aiSolutionPageComponents/AiProcess"
import ServiceCard from "../components/aiSolutionPageComponents/ServiceCard"
import AboutSocialMediaSevices from "../components/aiSolutionPageComponents/AboutSocialMediaSevices"
import ClientReview from "../components/aiSolutionPageComponents/ClientReview"
import AiProofCard from "../components/aiSolutionPageComponents/AiProofCard"
import AiSolutionFaqs from "../components/aiSolutionPageComponents/AiSolutionFaqs"
import Contact from "../components/aiSolutionPageComponents/Contact"
import Button from "../components/homePageComponents/Button"
import { Link } from "react-router-dom"

// importing aiSolutions constants 
import { socialMediaMarktingList, socialMediaBlogs, aboutSocialMediaServices, socialMediaServices, socialMediaProofs, socialMediaFaqs, socialMediaHero, banner, clientReview, contactMessage } from "../constants/aiSolutionConstant"


const SocialMediaPage = () => {
    return (
        <div className="pt-12">
            <div className="w-full pb-10">
                <div className="bg-gradient-to-b from-[#efedff] to-[#ffffff]">
                    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-14">
                        <Hero hero={socialMediaHero} />
                        <div className='hidden md:flex justify-center px-8 lg:px-0'>
                            <img src="../AiSolutions/border-center.webp" className="w-full" loading= "lazy" />
                        </div>
                        <MarketingSection list={socialMediaMarktingList} />
                    </div>
                </div>
                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-20">
                    <AiProcess blog={socialMediaBlogs} />
                </div>
            </div>

            {/* <div className='flex justify-center px-8 lg:px-0 pb-20 lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto'>
                <img src="../AiSolutions/border-center.webp" className="w-full" />
            </div> */}

            <div className="bg-gradient-to-b from-[#f0edff] to-[#fff] rounded-t-[40px]">

                <div className="w-full py-10">
                    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-6">
                        <h6 className='text-center uppercase text-lg font-semibold font-syne text-black px-8'>{socialMediaServices.title}</h6>
                        <div className='flex flex-col justify-center items-center space-y-6 px-8'>
                            <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[90%] text-black'>{socialMediaServices.heading}</h1>
                            <p className='text-center text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 lg:w-[63%]'>{socialMediaServices.subHeading}</p>
                        </div>
                        <div className="pt-10">
                            <ServiceCard services={socialMediaServices.card} />
                        </div>
                    </div>
                </div>

                <div className="w-full py-10">
                    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-6">
                        <h6 className='text-center uppercase text-lg font-semibold font-syne text-black px-8'>{aboutSocialMediaServices.title}</h6>
                        <div className='flex flex-col justify-center items-center space-y-6 px-8'>
                            <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[60%] text-black'>{aboutSocialMediaServices.heading}</h1>
                        </div>
                        <div className="pt-10">
                            <AboutSocialMediaSevices services={aboutSocialMediaServices.card} />
                        </div>
                    </div>
                </div>

                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto py-10">
                    <ClientReview review={clientReview} />
                </div>

                <div className="w-full py-10">
                    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-6">
                        <h6 className='text-center uppercase text-lg font-semibold font-syne text-black px-8'>{socialMediaProofs.title}</h6>
                        <div className='flex flex-col justify-center items-center space-y-6 px-8'>
                            <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne text-black'>{socialMediaProofs.heading}</h1>
                        </div>
                        <div className="pt-10">
                            <AiProofCard proofs={socialMediaProofs.cards} />
                        </div>
                    </div>
                </div>

                <div className="w-full py-10">
                    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-6">
                        <h6 className='text-center uppercase text-lg font-semibold font-syne text-black px-8'>{socialMediaFaqs.title}</h6>
                        <div className='flex flex-col justify-center items-center space-y-6 px-8'>
                            <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black'>{socialMediaFaqs.heading}</h1>
                            <p className='text-center text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 lg:w-[63%]'>{socialMediaFaqs.subTitle}</p>
                        </div>
                        <div className="pt-10">
                            <AiSolutionFaqs faqs={socialMediaFaqs} />
                        </div>
                    </div>
                </div>


            </div>


            <div className="w-full py-10 bg-white px-8 lg:px-0">
                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-6 bg-[#f7f7fa] py-10 rounded-[40px] relative">
                    <img className='absolute w-12 lg:w-16 right-1/4 -top-8 lg:-top-12 custom-rotation' src="/rocket.webp" alt="rocket img" loading= "lazy" />
                    <div className="flex justify-center items-center">
                        <img src={banner.photo} alt={banner.photo} className="object-contain h-15 w-28" />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-6 px-8'>
                        <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black'>{banner.heading}</h1>
                        <Button><Link to="/audit.htm">{banner.buttonContext}</Link></Button>
                    </div>
                </div>

            </div>

            <div className="w-full pt-10 bg-white">
                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
                    <Contact message={contactMessage} />
                </div>
            </div>

        </div>
    )
}

export default SocialMediaPage