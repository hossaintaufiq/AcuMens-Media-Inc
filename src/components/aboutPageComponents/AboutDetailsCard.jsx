import { MdPeople } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { FaSearchengin } from "react-icons/fa";
import { BsRocketTakeoffFill } from "react-icons/bs";

const aiSolDetail = [
    { icon: <TbBulbFilled />, title: "Transparency", desc: "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. We’ll say what we’ll do, and then do what we say.", link:"#" },
    { icon: <MdPeople />, title: "Integrity", desc: "We prioritize honesty and integrity, always striving to build relationships rooted in trust. We understand that trust is earned by consistently upholding our uncompromising standards.", link:"#" },
    { icon: <FaSearchengin />, title: "Simplicity", desc: "We believe that being an expert should not mean sounding complicated. We are straightforward with our approach, always doing our best to simplify what’s seemingly complex.", link:"#" },
    { icon: <BsRocketTakeoffFill />, title: "Performance", desc: "Being in the digital marketing space, data is a given. But we aren’t just talking about having access to reports on certain metrics. We ensure each campaign translates into real business growth.", link:"#" },
   
]


const AboutDetailsCard = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {
            aiSolDetail?.map((service, index) => (

                <div key={index} className='flex flex-col justify-items-start border border-transparent bg-white hover:shadow-xl p-5 space-y-4 rounded-[40px]'>
                    <span className="w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gray-100 text-blue-Purple">{service?.icon}</span>
                    <h6 className="font-bold text-base font-syne text-black">{service?.title}</h6>
                    <p className="text-base font-light font-kanit leading-6 tracking-normal">{service?.desc}</p>
                </div>
            ))
        }


    </div>

    
    )
}

export default AboutDetailsCard