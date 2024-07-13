import { FaCircleCheck } from 'react-icons/fa6'
import Button from '../homePageComponents/Button'
import { Link } from 'react-router-dom'

const EmailMarketingPricePlan = ({ price, plan }) => {

    const formatPrice = (price) => `$${price.toFixed(2)}`;

    return (
        <div className="relative bg-black w-[340px] lg:w-[420px] h-[880px] lg:h-[830px] rounded-[40px] shrink-0">
            {plan?.badge && <div className='absolute left-[35%] -top-7 z-50 bg-blue-Purple py-2 px-6 rounded-[40px]'>
                <p className='text-lg font-normal font-kanit leading-6 text-white tracking-wide'>{plan.badge}</p>
            </div>}
            <div className="absolute inset-y-[-6px] left-2.5 w-[340px] lg:w-[420px] h-[880px] lg:h-[830px] bg-white rounded-[40px] border border-black py-8 px-4 shrink-0">

                {/* container for containing content in proper alignment */}
                <div className='flex flex-col justify-between items-start h-full w-full'>

                    <div className='space-y-2'>
                        <h1 className='text-center font-syne text-2xl font-bold text-black pb-2'>{plan.pricePlan}</h1>
                        <h1 className="text-2xl text-center font-kanit font-light text-gray-900 pb-2 leading-none">
                            {formatPrice(price)}
                            <span className='text-lg font-syne font-normal text-black'> /month</span>
                        </h1>
                        {
                            plan?.plans.map((feature, index) => (

                                <p key={index} className='flex flex-row gap-x-3 justify-start items-start'>
                                    <span className={`${feature.color} ${feature.size} mt-[2px]`}> {feature.icon} </span>
                                    <span className='font-kanit text-base font-light leading-6 text-black'>{feature.text}</span>
                                </p>

                            ))
                        }
                    </div>

                    <div className='mx-auto'>
                        <Button className='uppercase mb-2'>{plan.buttonText}</Button>

                        {/* <div className='text-center'>
                            <Link className='font-kanit font-light text-base leading-6 text-black hover:text-blue-Purple transition-colors duration-500'>Compare Plans</Link>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EmailMarketingPricePlan