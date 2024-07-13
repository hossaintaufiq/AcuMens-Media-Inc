import { Link } from "react-router-dom";
import AboutDetailsCard from "../components/aboutPageComponents/AboutDetailsCard";
import HeroAbout from "../components/aboutPageComponents/HeroAbout";
import MarketingSol from "../components/aboutPageComponents/MarketingSol";
import MeetTheTeam from "../components/aboutPageComponents/MeetTheTeam";
import Button from "../components/homePageComponents/Button";
import Contact from "../components/aiSolutionPageComponents/Contact";
import ClientReview from "../components/aiSolutionPageComponents/ClientReview";

const AboutPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#edeaff] to-bg-gray-100">
        <div className="mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] pt-28">
          <HeroAbout />
          <div className="hidden md:flex justify-center py-10">
            <img className="w-full" src="../AiSolutions/border-center.webp" loading= "lazy"/>
          </div>
        </div>
      </div>

      <div className="mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] space-y-16 px-8 lg:px-0 py-10 lg:pb-20">
        <p className=" font-syne font-medium text-xl">
          Acumens was established 12 years ago with the basic belief that
          advertising has the ability to significantly increase our
          client&apos;s business impact. However, as time progressed, we
          broadened our range and diversified our services, forming successful
          partnerships with major corporations and niche brands alike. Today,
          our client base extends globally, enclosing a diverse range of local
          businesses. At Acumens , we specialize in providing tailored
          solutions that avoid the one-size-fits-all approach. Our AI services
          are meticulously designed to seamlessly integrate with and enhance
          your business operations, aligning perfectly with your unique
          business needs and objectives. Get ready to be surprised by our
          AI-Tech, which have been meticulously designed to not only catch
          your attention but also tell a compelling story about our
          cutting-edge AI services. Whether it&apos;s for marketing campaigns,
          website development, app creation or more. We are driven by results,
          not just fancy technology. Our AI solutions are meticulously crafted
          to push your business outcomes to new heights, fueling your success
          forward with every endeavor. Bid farewell to the manual and time
          consuming tasks as Acumens takes pride in offering seamless,
          hands-free automation for all your marketing needs. Our AI
          isn&apos;t offered as a tool. We offer a full-service solution
          designed to empower your business by doing all the heavy lifting.
          From campaign optimization to data analysis, let our Expert Team
          combined with the power of AI handle the intricacies while you focus
          on what you do best - growing your business. At Acumens, we are
          dedicated to empowering your success through innovation, creativity
          and unparalleled dedication. Join us on this transformative journey
          and discover the power of AI-driven solutions tailored to fit your
          business like a glove.
        </p>
        <div className="w-auto h-auto">
          <img
            src="./pexels-moe-magners-7495294-1536x625.webp"
            className="rounded-[40px] w-full h-full object-contain"
            loading= "lazy"
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#ebe8ff] to-bg-gray-100 rounded-t-[40px]">

        <div className="mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] space-y-16 px-8 lg:px-0 py-10">

          <h1 className="text-4xl lg:text-5xl text-center font-syne font-bold text-black">
            Our Values
          </h1>
          <AboutDetailsCard />
          <MarketingSol />

        </div>

      </div>

      <div className="hidden md:flex justify-center py-10 mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px]">
        <img className="w-full" src="../AiSolutions/border-center.webp" loading= "lazy"/>
      </div>
      <div className="mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] py-10" >
        <MeetTheTeam />
      </div>
      <div className="hidden md:flex justify-center pt-20 mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px]">
        <img className="w-full" src="../AiSolutions/border-center.webp" loading= "lazy"/>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-16 mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] py-10 lg:py-20">
        <h1 className="text-xl text-left font-syne font-bold text-black ">
          Credentials & recognition:
        </h1>
        <div className="flex flex-col flex-wrap md:flex-row justify-between items-center gap-6 lg:gap-16">
          <img
            src="./56cf51c7d935aba26a8f553867bf878b-q7mfoumzkoldxrff773af1pmaib4qb0z9nr3xilijk.webp"
            className=""
            loading= "lazy"
          />
          <img
            src="./new-badge20220412-1161242-19o8jy5-q7mfkvripv5sx16ydhbzw1rjzxvc8b9s20lazghctc.webp"
            className=""
            loading= "lazy"
          />
          <img
            src="./new-badge20211006-5432-t7lh3l-q7mfkwpcwp738n5l7zqmgjj0lbqpg0die58sgqfyn4.webp"
            className="bg-black"
            loading= "lazy"
          />
          <img
            src="./new-badge20211005-28345-8m8kvp-q7mfkyl1ad9nvv2ux0jvlj1xs3hfvekz2ejrfad6ao.webp"
            className=""
            loading= "lazy"
          />
          <img
            src="./logo_hubspot-q7mfl0gr2gxhcpfzpavncu1gpvupsjpnipt64jtz34.webp"
            className=""
            loading= "lazy"
          />
        </div>
        <Link to="/audit.htm">
          <Button>Get Proposal</Button>
        </Link>

      </div>

      <div className="mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] space-y-16">

        <h1 className="text-center text-4xl lg:text-5xl font-syne font-bold px-8 lg:px-0">
          What our happy customers are saying
        </h1>

        <ClientReview review="''The entire staff at Acumens have been phenomenal. They are quick with their replies and incredibly helpful.''" />


        <Contact message="See how we can help your business grow with digital marketing" />

      </div>




    </div>
  );
};

export default AboutPage;
