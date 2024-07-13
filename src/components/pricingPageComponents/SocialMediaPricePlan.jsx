
import Button from '../homePageComponents/Button'
import { Link } from 'react-router-dom'

const SocialMediaPricePlan = ({ price, plan }) => {

    const formatPrice = (price) => `$${price.toFixed(2)}`;
    // console.log({formatPrice});
    const handleBuy = (price) => {
        // const priceStr = handlePrice(null);
        // const price = parseFloat(priceStr)
        // console.log(price);
        if(price===899.99){
    
            window.location.href='https://www.google.com'
        }
        else if(price===499.99){
            window.location.href='https://www.youtube.com'
            
        }
        else if(price===89.99){
            window.location.href='https://predis.ai'
            
        }
        console.log(price);
    }

    return (
        <div className="relative bg-black w-[330px] h-[750px] rounded-[40px] shrink-0">
            {plan?.badge && <div className='absolute left-[35%] -top-7 z-50 bg-blue-Purple py-2 px-6 rounded-[40px]'>
                <p className='text-lg font-normal font-kanit leading-6 text-white tracking-wide'>{plan.badge}</p>
            </div>}
            <div className="absolute inset-y-[-6px] left-2.5 w-[330px] h-[750px] bg-white rounded-[40px] border border-black py-8 px-3 shrink-0">

                <div className='flex flex-col justify-between items-start h-full w-full'>

                    <div className="space-y-2">

                        <h1 className='text-center font-syne text-3xl font-bold text-black pb-2'>{plan.pricePlan}</h1>
                        <h1 className="text-3xl text-center font-kanit font-light text-gray-900 pb-2 leading-none">
                            {formatPrice(price)}
                            <span className='text-lg font-syne font-normal text-black'> /month</span>
                        </h1>
                        {
                            plan?.plans.map((feature, index) => (

                                <p key={index} className='flex flex-row gap-x-3 justify-start items-start'>
                                    <span className={`${feature.color} ${feature.size} mt-[2px]`}> {feature.icon} </span>
                                    <span className='font-kanit text-lg font-light leading-6 text-black'>{feature.text}</span>
                                </p>

                            ))
                        }
                        <p className='flex flex-row gap-x-3 justify-start items-start'>
                            <span className={`${plan.color} ${plan.size} mt-0.5`}> {plan.icon} </span>
                            <span className='font-kanit text-lg font-light leading-6 text-black'>
                                {plan.threeMonthPlan1}
                                <br /> -OR- <br />
                                {plan.threeMonthPlan2}
                            </span>
                        </p>

                    </div>

                    <div className="mx-auto">
                    <div onClick={()=>handleBuy()}>
                    <Button  className='uppercase mb-2'>{plan.buttonText}</Button>
                    </div>
                      <div className='text-center'>
                            <Link className='font-kanit font-light text-lg leading-6 text-black hover:text-blue-Purple transition-colors duration-500'>Compare Plans</Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SocialMediaPricePlan