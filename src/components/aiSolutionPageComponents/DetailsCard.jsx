import {
  MdGroups,
  MdMail,
  MdOutlineContentPaste,
  MdPeople,
  MdAddShoppingCart,
} from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";
import { FaGoogle, FaCode, FaMobileAlt, FaSearchengin } from "react-icons/fa";
import { Link } from "react-router-dom";

const aiSolDetail = [
  {
    icon: <MdGroups />,
    title: "AI-Infused Social Media Automation",
    desc: "Struggling to find Social Media Marketing experts who really understand your business & can actually drive long term results? Our AI-Technology combined with the",
    link: "/Social-media-automation.htm",
  },
  {
    icon: <FaSearchengin />,
    title: "Search Engine Services (SEO/SEM)",
    desc: "Imagine a world where your SEO & SEM strategies are not just data-driven but intelligence-driven. Join the era of AI-Powered SEO & SEM, where our experienced Marketing team injects",
    link: "/Seo.htm",
  },
  {
    icon: <FaGoogle />,
    title: "AI-Fueled Google Business Services",
    desc: "Expand your business visibility like never before with our AI-Fueled Google Service which covers Google's vast landscape like google Map, Google Business & AI-Created YouTube videos.",
    link: "/Google-suite.htm",
  },
  {
    icon: <MdMail />,
    title: "AI-Powered Email Marketing",
    desc: "When it comes to reaching your target audience, you can’t get much closer than direct to their inboxes.",
    link: "/Email-Marketing.htm",
  },
  {
    icon: <MdAddShoppingCart />,
    title: "AI-Driven E-Commerce Solutions",
    desc: "Offering online platforms for seamless transactions, expanding market reach, and enhancing customer experiences.",
    link: "/E-commerce.htm",
  },
  {
    icon: <FaCode />,
    title: "AI-Integrated Web Design & Hosting",
    desc: "Elevate your brand with a visually stunning website, supported by reliable hosting for a seamless digital experience.",
    link: "/Web-Design-Hosting.htm",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Unlock innovation, engage users, and elevate your brand with customized, intuitive, and scalable mobile applications.",
    link: "/app-development.htm",
  },
  {
    icon: <RiRobot3Line />,
    title: "ERP / CRM / IT / ChatBots",
    desc: "Grow your brand with the help of our various web services infused with AI integration.",
    link: "/Erp-Crm-It-Chatbots.htm",
  },
  {
    icon: <MdOutlineContentPaste />,
    title: "Content Writing",
    desc: "Enhancing brand communication and audience engagement. Elevate your digital presence with tailored content, optimized for impact and resonance in the online realm.",
    link: "/Content-writing.htm",
  },
  {
    icon: <MdPeople />,
    title: "CCaaS / Outsourcing & Consulting",
    desc: "From cloud-based communication solutions to strategic consulting, unlock efficiency and innovation for sustained growth and success in the modern marketplace.",
    link: "/CCaaS-Outsourcing-Consulting.htm",
  },
];

const DetailsCard = () => {
  return (
    <div className="grid grid-col-1 md:grid-col-3 lg:grid-cols-5 gap-6 px-8 lg:px-0">

      {
        aiSolDetail?.map((service, index) => (

          <div key={index} className='flex flex-col justify-between items-start p-10 gap-y-10 rounded-[40px] bg-white'>
            <div className="space-y-4">
              <Link to={service?.link}><span className="w-14 h-14 rounded-full flex justify-center items-center text-3xl bg-gray-100 text-blue-Purple">{service?.icon}</span></Link>
              <Link to={service?.link}><h6 className="mt-4 font-bold text-base font-syne text-black">{service?.title}</h6></Link>
              <p className="text-base font-light font-kanit leading-6 tracking-normal">{service?.desc}</p>

            </div>

            <div >
              <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                  <Link to={service.link} className="font-syne uppercase text-sm tracking-tight font-bold leading-6">Get Started Now</Link>
                </span>
              </div>
            </div>
          </div>
        ))
      }


    </div>
  );
};

export default DetailsCard;
