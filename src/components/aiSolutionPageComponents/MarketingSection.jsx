import { FaCircleCheck } from "react-icons/fa6";

const MarketingSection = ({ list }) => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 px-8 lg:px-0'>
            <div className='w-full md:w-[50%] space-y-6 md:border-r md:border-slate-300 px-2'>
                <h1 className='text-left text-3xl lg:text-4xl font-bold font-syne lg:w-[90%] text-black'>{list?.heading}</h1>
                <p className='text-left text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 lg:w-[90%]'>{list?.context}</p>
            </div>
            <div className='w-full md:w-[50%]'>
                <div className="flex justify-start md:justify-center items-center">
                    <ul className='space-y-4'>
                        {list?.list?.map((list, index) => (
                            <li key={index} className='flex flex-row gap-x-3 justify-start items-center'> <span className="text-blue-Purple text-xl"><FaCircleCheck /></span> <span>{list}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MarketingSection