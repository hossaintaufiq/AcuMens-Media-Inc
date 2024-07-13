import { Link } from "react-router-dom"
import Button from "../homePageComponents/Button"

const CustomPlan = () => {

    return (
        <div className="relative bg-black w-[340px] lg:w-[650px] h-[950px] lg:h-[520px] rounded-[40px] shrink-0">

            <div className="absolute inset-y-[-12px] left-2.5 w-[340px] lg:w-[650px] h-[950px] lg:h-[520px] bg-[#f7f7fa] rounded-[40px] border border-black p-8 shrink-0">

                <div className="space-y-6 text-black">
                    <h1 className="text-4xl font-syne font-bold leading-10 text-center">Need Custom ERP, App, Chatbot or Tailored Services?</h1>
                    <div className="bg-white rounded-[40px] space-y-6 p-8 text-center">

                        <h1 className="text-5xl font-syne font-bold">Contact Us</h1>

                        <p className="font-kanit text-base font-light leading-6">Whether your business needs a Custom build Software, ERP, CRM, Application,
                            Website, Chatbot, Web Hosting Solution, IT Support, Manpower Hiring
                            Business management, Cost Management support, Business Consultation
                            or Marketing, Branding, advertisement Solution.</p>

                        <p className="font-kanit text-base font-light leading-6">Our Team of Experts, AI-Tech and our Global Reach can get it done.
                            Acumens is a one-stop Shop for all your business needs.</p>

                        <Button className="mx-auto"> <Link to="/contact.htm"> Contact Us </Link> </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CustomPlan