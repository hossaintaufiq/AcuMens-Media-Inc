import { useState } from 'react';
import SslPricePlan from '../../../components/pricingPageComponents/SslPricePlan';
import PricingTabs from '../../../components/pricingPageComponents/PricingTabs';
import { SSLPricing,CRMPlans,webHostingPlans,webDesignPlans,emailPackagePlans,basicSSLPlans,secureSSLPlans,socialMediaPlanFaqs } from '../../../constants/pricingPageConstant';
import AiSolutionFaqs from '../../../components/aiSolutionPageComponents/AiSolutionFaqs';
import Contact from '../../../components/aiSolutionPageComponents/Contact';


const MarketingTab = () => {
    const [plan, setPlan] = useState('monthly'); // Default plan

    return (
        <>
            <div>
                <section className="py-5">
                    <div className="mx-auto space-y-4">
                        <div className="flex flex-col justify-center items-center px-8 lg:px-0">
                            <h1 className="md:text-4xl text-3xl font-bold font-syne text-gray-900 text-center">Add On: SEM / SMM / SEO / Email Marketing</h1>
                            <PricingTabs plan={plan} setPlan={setPlan} />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 py-10 md:py-5 lg:px-8 place-items-center">
                            <SslPricePlan price={SSLPricing[plan]?.CRMPlans} plan={CRMPlans} />
                            <SslPricePlan price={SSLPricing[plan]?.webHostingPlans} plan={webHostingPlans}/>  
                            <SslPricePlan price={SSLPricing[plan]?.webDesignPlans} plan={webDesignPlans} />  
                            <SslPricePlan price={SSLPricing[plan]?.emailPackagePlans} plan={emailPackagePlans} />
                            <SslPricePlan price={SSLPricing[plan]?.basicSSLPlans} plan={basicSSLPlans} />
                            <SslPricePlan price={SSLPricing[plan]?.secureSSLPlans} plan={secureSSLPlans} />

                        </div>
                    </div>
                </section>
            </div>

            <div className="w-full py-10">
                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-6">
                    <h6 className='text-center uppercase text-lg font-semibold font-syne text-black px-8'>{socialMediaPlanFaqs.title}</h6>
                    <div className='flex flex-col justify-center items-center space-y-6 px-8'>
                        <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black'>{socialMediaPlanFaqs.heading}</h1>
                        <p className='text-center text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 lg:w-[63%]'>{socialMediaPlanFaqs.subTitle}</p>
                    </div>
                    <div className="pt-10">
                        <AiSolutionFaqs faqs={socialMediaPlanFaqs} />
                    </div>
                </div>
            </div>

            <div className='lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto pt-10'>
                <Contact message={"Want to know how else can we help your business?"} />
            </div>

        </>
    );
};

export default MarketingTab;