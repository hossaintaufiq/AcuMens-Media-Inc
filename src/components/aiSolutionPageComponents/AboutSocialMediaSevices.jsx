import { Link } from "react-router-dom"
const AboutSocialMediaSevices = ({ services }) => {
    return (
        <div className="grid grid-col-2 lg:grid-cols-3 gap-6 px-8 lg:px-0">

            {
                services?.map((service, index) => (

                    <div key={index} className='flex flex-col justify-items-start px-12 py-10 space-y-4 rounded-[40px] bg-white'>
                        <Link to={service.router}><span className="w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gray-100 text-blue-Purple">{service?.icon}</span></Link>
                        <Link to={service.router}><h6 className="font-bold text-base font-syne text-black">{service?.heading}</h6></Link>
                        <p className="text-base font-light font-kanit leading-6 tracking-normal">{service?.context}</p>
                    </div>
                ))
            }


        </div>
    )
}

export default AboutSocialMediaSevices