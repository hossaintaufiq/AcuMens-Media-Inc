
import { Typewriter } from 'react-simple-typewriter'

export const TypeAnimation = () => {

    // const handleType = (count) => {
    //     // access word count number
    //     console.log(count)
    // }


    // const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    // }

    return (
        <div className='App'>
            <h1 className="text-2xl lg:text-5xl font-bold mb-4 font-syne">
                <span className="text-2xl lg:text-5xl font-bold mb-4 font-syne">“Unleash” the power of AI for </span>
                <span className="text-2xl lg:text-5xl font-bold mb-4 font-syne">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={["Social Media Marketing Automation.", "Saving Time & Money on Business Promotions.", "Explosive Business Growth & Automation.", "Enhanced Social Media Engagement.", "Effortless YouTube Video Creation & Marketing.", "Intelligent Search Engine Optimization & Marketing.", "Smart Business Technologies & Services.", "Advanced Google Business Listing.", "Better Email Campaign Responses & Customer Engagement."]}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </span>
            </h1>
        </div>
    )
}
