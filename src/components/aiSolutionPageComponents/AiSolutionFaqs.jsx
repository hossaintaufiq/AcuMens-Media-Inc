/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BsDashLg } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const AiSolutionFaqs = ({ faqs }) => {
    const [divOpen, setDivOpen] = useState('');
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);

    const handleDivOpen1 = (faqxId) => {
        setDivOpen(faqxId);
        setToggle1(prevValue => !prevValue);
        setToggle2(false);
        setToggle3(false);
        setToggle4(false);

    }
    const handleDivOpen2 = (faqxId) => {
        setDivOpen(faqxId);
        setToggle2(prevValue => !prevValue);
        setToggle1(false);
        setToggle3(false);
        setToggle4(false);
    }
    const handleDivOpen3 = (faqxId) => {
        setDivOpen(faqxId);
        setToggle3(prevValue => !prevValue);
        setToggle1(false);
        setToggle2(false);
        setToggle4(false);

    }
    const handleDivOpen4 = (faqxId) => {
        setDivOpen(faqxId);
        setToggle3(false);
        setToggle1(false);
        setToggle2(false);
        setToggle4(prevValue => !prevValue);

    }
    return (
        <div className='flex flex-row justify-center items-center px-8'>

            <div className='space-y-4 w-full lg:w-[80%]'>

                <div className={`w-full p-1 md:p-3 rounded-lg bg-white text-base font-kanit font-light ${divOpen === 'faqs1' && toggle1 ? ' h-auto ' : 'overflow-hidden h-[48px] md:h-[45px]'}`}>
                    <div className={`flex w-full justify-between items-center font-semibold mb-2 cursor-pointer ${divOpen === 'faqs1' && toggle1 && 'text-blue-800'}`} onClick={() => handleDivOpen1("faqs1")}>
                        <p className="flex-1 text-base xs:text-[19px] md:text-xl font-syne font-bold leading-6 mr-2">{faqs.faq1.question}</p>
                        <p className="font-semibold text-xl">{divOpen === 'faqs1' && toggle1 ? <BsDashLg /> : <FaPlus />}</p>
                    </div>
                    <div className='mt-5'>
                        {faqs?.faq1.answer}
                    </div>
                </div>
                <div className={`w-full p-1 md:p-3 rounded-lg bg-white text-base font-kanit font-light ${divOpen === 'faqs2' && toggle2 ? ' h-auto ' : 'overflow-hidden h-[48px] md:h-[45px]'}`}>
                    <div className={`flex w-full justify-between items-center font-semibold mb-2 cursor-pointer ${divOpen === 'faqs2' && toggle2 && 'text-blue-800'}`} onClick={() => handleDivOpen2("faqs2")}>
                        <p className="flex-1 text-base xs:text-[19px] md:text-xl font-syne font-bold leading-6 mr-2">{faqs.faq2.question}</p>
                        <p className="font-semibold text-xl">{divOpen === 'faqs2' && toggle2 ? <BsDashLg /> : <FaPlus />}</p>
                    </div>
                    <div className='mt-5'>
                        {faqs?.faq2.answer}
                    </div>
                </div>

                <div className={`w-full p-1 md:p-3 rounded-lg bg-white text-base font-kanit font-light ${divOpen === 'faqs3' && toggle3 ? ' h-auto ' : 'overflow-hidden h-[48px] md:h-[45px]'}`}>
                    <div className={`flex w-full justify-between items-center font-semibold mb-2 cursor-pointer ${divOpen === 'faqs3' && toggle3 && 'text-blue-800'}`} onClick={() => handleDivOpen3("faqs3")}>
                        <p className="flex-1 text-base xs:text-[19px] md:text-xl font-syne font-bold leading-6 mr-2">{faqs.faq3.question}</p>
                        <p className="font-semibold text-xl">{divOpen === 'faqs3' && toggle3 ? <BsDashLg /> : <FaPlus />}</p>
                    </div>
                    <div className='mt-5'>
                        {faqs?.faq3.answer}
                    </div>
                </div>
                <div className={`w-full p-1 md:p-3 rounded-lg bg-white text-base font-kanit font-light ${divOpen === 'faqs4' && toggle4 ? ' h-auto ' : 'overflow-hidden h-[48px] md:h-[45px]'}`}>
                    <div className={`flex w-full justify-between items-center font-semibold mb-2 cursor-pointer ${divOpen === 'faqs4' && toggle4 && 'text-blue-800'}`} onClick={() => handleDivOpen4("faqs4")}>
                        <p className="flex-1 text-base xs:text-[19px] md:text-xl font-syne font-bold leading-6 mr-2">{faqs.faq4.question}</p>
                        <p className="font-semibold text-xl">{divOpen === 'faqs4' && toggle4 ? <BsDashLg /> : <FaPlus />}</p>
                    </div>
                    <div className='mt-5'>
                        {faqs?.faq4.answer}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AiSolutionFaqs