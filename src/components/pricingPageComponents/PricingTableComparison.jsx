import { SMPriceComparison } from "../../constants/pricingPageConstant";
import ReactHtmlParser from 'react-html-parser';

const PricingTableComparison = () => {
    return (
        <div>
            <h2 className="text-4xl lg:text-5xl font-syne text-center font-bold mb-10">Compare plan features</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="h-28">
                            <th className="py-2 px-4 rounded-s-xl font-kanit font-normal uppercase text-base border-r bg-black text-white lg:w-[40%]">
                                <br />
                                Package Plans
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal uppercase text-center border-r text-base bg-black text-white lg:w-[15%]">
                                <div className="pb-2">
                                    <span className="bg-blue-Purple px-6 py-1 rounded-xl w-fit text-sm font-normal">
                                        Low Price
                                    </span>
                                </div>
                                <span className="">Basic</span>
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal uppercase text-base border-r bg-black text-white lg:w-[15%]">
                                <br />
                                <span className="">Growth</span>
                            </th>
                            <th className="py-2 px-4  font-kanit font-normal uppercase text-base border-r bg-black text-white lg:w-[15%]">
                                <br />
                                <span className="">Dynamic Plus</span>
                            </th>
                            <th className="py-2 px-4 rounded-e-xl font-kanit font-normal  uppercase text-base bg-black text-white lg:w-[15%]">
                                <div className="pb-2">
                                    <span className="bg-blue-Purple px-6 py-1 rounded-xl w-fit text-sm font-normal">
                                        Best Value
                                    </span>
                                </div>
                                <span className="">Ultimate Pro</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-2 text-left font-kanit border-r text-lg text-black">Pricing</td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $57.99/month
                                6Month: $69.99/month
                                Monthly: $99.99/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $115.99/month
                                6Month: $139.99/month
                                Monthly: $199.99/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base border-r text-left text-black">
                                Annually: $173.99/month
                                6Month: $299.99/month
                                Monthly: $209.99/month
                            </td>
                            <td className="px-4 py-4 font-kanit text-base text-left text-black">
                                Annually: $173.99/month
                                6Month: $299.99/month
                                Monthly: $209.99/month
                            </td>
                        </tr>
                        {SMPriceComparison.map((item, index) => (
                            <tr key={index} className={`border-0 font-syne h-24 text-lg ${item.bgColor} ${item.textColor}`}>
                                <td className="py-2 border-r px-4 font-kanit rounded-s-xl text-start">{ ReactHtmlParser(item.feature) }</td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.basic}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.growth}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 border-r px-4 font-syne text-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.dynamicPlus}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-syne text-center rounded-e-xl">
                                    <div className="flex justify-center items-center">
                                        <span className="text-3xl">
                                            {item.ultimatePro}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PricingTableComparison