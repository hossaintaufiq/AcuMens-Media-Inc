import { termsConditions } from "../constants/termsConditions";

const TermsCondition = () => {
    return (
        <div className="pt-12" style={{ backgroundImage: 'linear-gradient(to bottom, #E9E5FF 5%, #ffffff 20%)' }}>
      
      <div className=" pt-36 px-32 py-24">
      <h6 className="text-black text-2xl py-4"> TERMS & CONDITIONS</h6>
        <h4 className="font-sans font-medium text-5xl text-black py-4">
          Terms & Conditions
        </h4>
        <h5 className="text-black py-4">
          for Acumens Media Inc. (under updation, to be updated by 03/10/24)
        </h5>
        {termsConditions.map((termsConditions,index) => (
          <div key={index}>
            <h4 className="font-sans font-medium text-5xl text-black py-4">
              {termsConditions.head}
            </h4>
            <p className="text-black py-4">
              {termsConditions.context}
            </p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default TermsCondition;