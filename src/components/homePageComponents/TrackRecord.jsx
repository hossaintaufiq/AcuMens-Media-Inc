import { GoDotFill } from "react-icons/go"
import { trackingRecord } from "../../constants/trackingRecord"

const TrackRecord = () => {
    return (
        <div>
            <div className="hidden md:block lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto py-10">
                <div className="flex justify-between items-start gap-6 border-t-[2px] border-dashed border-gray-200">
                    {
                        trackingRecord?.map((record, index) => (

                            <div key={index} className="relative py-10">
                                <span className="font-kanit text-base font-normal leading-6 text-black">{record}</span>
                                <span className="absolute -left-2 -top-4 text-3xl text-blue-Purple"><GoDotFill /></span>
                            </div>

                        ))
                    }
                </div>
            </div>

            <div className="py-10 md:hidden">

                {
                    trackingRecord?.map((record,index) => (

                        <div key={index} className="py-10 border-t-[2px] border-dashed border-gray-200 relative">
                            <span className="font-kanit text-base font-normal leading-6 text-black">{record}</span>
                            <span className="absolute -left-2 -top-4 text-3xl text-blue-Purple"><GoDotFill /></span>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default TrackRecord

