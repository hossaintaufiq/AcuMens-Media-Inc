// src/components/Audit.jsx
import Contact from './Contact';
import AContent from './AContent';
import imageline1 from "../wp-content/wp-content/uploads/2023/05/border-center.webp";
import credential1 from "../wp-content/wp-content/uploads/elementor/thumbs/56cf51c7d935aba26a8f553867bf878b-q7mfoumzkoldxrff773af1pmaib4qb0z9nr3xilijk.webp";
import credential2 from "../wp-content/wp-content/uploads/elementor/thumbs/new-badge20220412-1161242-19o8jy5-q7mfkvripv5sx16ydhbzw1rjzxvc8b9s20lazghctc.webp";
import credential3 from "../wp-content/wp-content/uploads/elementor/thumbs/new-badge20211006-5432-t7lh3l-q7mfkwpcwp738n5l7zqmgjj0lbqpg0die58sgqfyn4.webp";
import credential4 from "../wp-content/wp-content/uploads/elementor/thumbs/new-badge20211005-28345-8m8kvp-q7mfkyl1ad9nvv2ux0jvlj1xs3hfvekz2ejrfad6ao.webp";
import credential5 from "../wp-content/wp-content/uploads/elementor/thumbs/logo_hubspot-q7mfl0gr2gxhcpfzpavncu1gpvupsjpnipt64jtz34.webp";
import { contactFields, contactCheckboxes } from '../props/contactInfo';

const Audit = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-lavenderMist via-lightGray to-pureWhite font-syne">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4">
        <div className="order-2 md:order-1 md:ml-8">
          <AContent />
        </div>
        <div className="order-1 md:order-2">
        <Contact
        title="Get your free audit"
        fields={contactFields}
        checkboxes={contactCheckboxes}
        buttonText="Get Audit Info"
      />
        </div>
        

      </div>
      <div className='mb-20 relative mt-3 ml-11 md:ml-20'>
  <img src={imageline1} alt="Imageline" />
</div>
<div className='flex flex-col items-center text-center text-xl font-bold font-syne'>
  <p className='mb-4 md:mb-7'>Credentials &<br /> recognition:</p>
  <div className='flex flex-wrap justify-center gap-4 md:gap-14 mb-3'>
    <img src={credential1} alt="Credential 1" className='w-16 h-16 md:w-auto md:h-auto' loading= "lazy" />
    <img src={credential2} alt="Credential 2" className='w-16 h-16 md:w-auto md:h-auto' loading= "lazy"/>
    <img src={credential3} alt="Credential 3" className='w-16 h-16 md:w-auto md:h-auto' loading= "lazy"/>
    <img src={credential4} alt="Credential 4" className='w-16 h-16 md:w-auto md:h-auto' loading= "lazy"/>
    <img src={credential5} alt="Credential 5" className='w-16 h-16 md:w-auto md:h-auto' loading= "lazy"/>
  </div>
</div>

    </div>
  );
};

export default Audit;
