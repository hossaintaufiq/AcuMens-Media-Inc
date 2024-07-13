import { MdGroups, MdMessage, MdMail, MdLightbulb, MdRocket, MdOutlineBrowserUpdated } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { PiOpenAiLogo } from "react-icons/pi";

const acumensincDatail = [
    { icon: <MdMessage />, title: "AI-POWERED SOCIAL MEDIA MARKETING & OPTIMIZATION", desc: "Maximize visibility and customer reach with our AI-powered Google suite services. From YouTube strategies to Maps & Business Profiles, we ensure you're found easily and efficiently." },
    { icon: <PiOpenAiLogo />, title: "AI-ENHANCED SEARCH ENGINE OPTIMIZATION & MARKETING", desc: "Our AI-assisted web design tailors your online space for optimal user experience, driving engagement and retention through intelligent, responsive layouts." },
    { icon: <MdMail />, title: "AI-BOOSTED EMAIL MARKETING CAMPAIGNS", desc: "Leverage AI to create apps that not only meet user needs but anticipate them, ensuring your business stays ahead in the app-driven marketplace." },
    { icon: <MdLightbulb />, title: "AI-ADVANCED UNIQUE CONTENT WRITING", desc: "Our AI powered unique content writing ensures enhanced creativity & personalization, SEO optimization and quality consistency, adapting to trends & diverse audiences." },
    { icon: <FaGoogle />, title: "AI-FUELED GOOGLE BUSINESS SERVICES", desc: "Maximize visibility and customer reach with our AI-Fueled Google Business services. From YouTube strategies to Maps & Business Profiles, we ensure you're found easily and efficiently." },
    { icon: <MdOutlineBrowserUpdated />, title: "INNOVATIVE WEB DESIGN", desc: "Our AI-assisted web design tailors your online space for optimal user experience, driving engagement and retention through intelligent, responsive layouts." },
    { icon: <MdRocket />, title: "SMART APP DEVELOPMENT", desc: "Leverage AI to create apps that not only meet user needs but anticipate them, ensuring your business stays ahead in the app-driven marketplace." },
    { icon: <MdGroups />, title: "SMART CRM & CHATBOTS", desc: "Transform customer interactions with our AI-enhanced CRM and Chatbot solutions, streamlining communication and boosting service efficiency" }
]

const DetailingCard = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                acumensincDatail.map((item, index) => (
                    <div key={index} className='flex flex-col justify-items-start p-5 space-y-4 bg-white rounded-[40px]'>
                        <span className="w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gray-100 text-blue-Purple">{item.icon}</span>
                        <p className="font-bold text-base font-syne text-black">{item.title}</p>
                        <p className="text-base font-light font-kanit leading-6 tracking-normal">{item.desc}</p>
                    </div>

                ))
            }
        </div>


    )
}

export default DetailingCard