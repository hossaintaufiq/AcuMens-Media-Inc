import React from "react"
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGoogle, FaLightbulb, FaSearchengin, FaHashtag,FaRegAddressCard,FaBlog,FaInstalod   } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdGroups, MdMessage, MdMail, MdRocket, MdOutlineBrowserUpdated } from "react-icons/md";

export const blogDetails = [
    { id: 'item1', date: 'March 2023', desc: '4 Insights for Smarter Short-Form Video', img: "./GettyImages-1437209223.webp" },
    { id: 'item2', date: 'March 2023', desc: 'Digital Marketing for Small Business: An Introduction', img:"./pexels-ivan-samkov-4458548.webp" },
    { id: 'item3', date: 'March 2023', desc: 'Average ROAS by Industry: The Most Difficult Metric to Measure', img:"./pexels-karolina-grabowska-7681092.webp"},
    { id: 'item4', date: 'March 2023', desc: 'What is SEO in Digital Marketing & How Does it work? The SEO Quick Beginner\'s Guide', img:"./pexels-mikael-blomkvist-6483582.webp" },
    { id: 'item5', date: 'April 2023', desc: 'Google\'s march 2023 core update: winners, losers & analysis', img:"./GettyImages-1389316294.webp" },
    { id: 'item6', date: 'May 2023', desc: 'The Metaverse boom: brands unite and Apple takes a rain check', img:"./minh-pham-HI6gy-p-WBI-unsplash-Copy-768x524.webp" },
    { id: 'item7', date: 'May 2023', desc: 'Verify your site is protecting your business', img:"./GettyImages-1358427508.webp" },
    { id: 'item8', date: 'May 2023', desc: 'The evolution of live-stream content and short-form video: a look at the TikTok revolution', img:"./milad-fakurian-58Z17lnVS4U-unsplash-Copy-768x524.webp" }
]

export const socialMediaServices = [
    {
        id: 1, header: "AI-Smart Social Media Marketing.", content: "Embracing a balance between innovative techniques & proven methods using the power of AI to gain a competitive advantage in the marketing industry.", percentage: "93%", list: [
            "AI-Enhanced Social Creatives",
            "Algorithmic Social Oversight",
            "AI-Informed Ad Strategies",
            "Tailored Campaign Creation",
            "Predictive Audience Analysis"
        ],
        router:"/Social-media-automation.htm"
    },
    {
        id: 2, header: "AI-Enhanced SEO Dynamics.", content: "Our AI Technology refines SEO to put you at the forefront, ensuring maximum relevance & reach.AI-Enhanced SEO Dynamics.AI-Enhanced SEO Dynamics.", percentage: "99%", list: [
            "Precision keyword targeting.",
            "Enhanced content relevancy.",
            "Data-driven marketing insights.",
            "Competitive analysis.",
            "Agile SEO adaptation."
        ],
        router:"/Seo.htm"
    },
    {
        id: 3, header: "AI-Precision (Targeted) Paid Search Campaigns", content: "Unlock your website's full potential, Decrease Campaign costs & boost your revenue with Acumens's AI-Precision conversion rate optimization services.", percentage: "95%", list: [
            "Increased contact form completions",
            "Boost online orders",
            "Reduced abandoned shopping cart rates",
            "Maximize website-generated revenue",
            "Enhanced (CTR) Click Through Rate"
        ],
        router:"/Seo.htm"
    },
    {
        id: 4, header: "AI-POWERED Email Engagement", content: "Ai-Powered Tailored email campaigns that resonate. Our strategic approach ensures your message not only lands but also captivates and converts.", percentage: "96%", list: [
            "Custom campaign design.",
            "Targeted messaging.",
            "Performance analytics.",
            "Subscriber growth tactics.",
            "Conversion optimization."
        ],
        router:"/Email-Marketing.htm"
    },

]

export const companyReview = [
    { id: 1, companyName: "ArtiLabs", companyOccupation: "Ecommerce growth", percentage: "+44%", domain: "Paid Search, Email Campaigns , SEO", button: "Read The Success Stories" },
    { id: 2, companyName: "Xeno AI", companyOccupation: "Engagement rates", percentage: "+50%", domain: "Organic Social Media, Paid Social", button: "Read The Success Stories" },
    { id: 3, companyName: "IKEA", companyOccupation: "Ecommerce growth", percentage: "+40%", domain: "Paid Search, Paid Social, SEO", button: "Read The Success Stories" },
]

export const aboutAcumensic = {
    title: "ABOUT ACUMENS",
    overView: "We combine in-depth customer insights with strategic execution to deliver results that resonate with Global audience.",
    about: "Acumens is at the forefront of digital innovation, offering tech-driven marketing solutions that are as unique as our clients. We specialize in crafting tailored strategies that align perfectly with your specific goals and aspirations. Our commitment to excellence and personalized service has led to remarkable achievements: generating over $3 billion in sales and securing more than 7.8 million leads for our diverse clientele. With Acumens, your vision is our mission.",
    buttonTitle: "More about our unique approach"

}
export const whatWeDo = {
    title: "WHAT WE DO",
    overView: "We Engineer Business Excellence with Precision AI Solutions",
    about: "We propel business innovation with AI-driven solutions, blending intellectual prowess, deep industry insights, swift execution, and meticulous accuracy.",
    buttonTitle: "VIEW ALL SOLUTIONS"
}

export const companyFeedback = [
    { id: 1, opinion: "\"Working with Acumen's Expert Marketing professionals was a game-changer for our company, they offered their expert insight required to improve our marketing strategies in the digital domain & beyound. At the outset of the project, We introduced an unexpected twist: a decision to revitalize our brand identity and unviel a more dynamic & impactful digital presence\"", companyCEO: "Ed Methowan", company: "Owner,ArtiLabs" },
    { id: 2, opinion: "\"I am amazed to see how Acumens Automated our company's marketing, branding and promotions. They took a major load off our shoulders. What they did in weeks is what we've been trying to do for over 3 years now. \"If any company knows AI Technology... its Acumens\" ", companyCEO: "Jon A Ring", company: "CEO,IKEA" },
    { id: 3, opinion: "\"Acumens does more than what it says and is Best at what they do and not just that. The entire staff at Acumens from sales to support has been outstanding. They are quick with their replies and incredibly helpful. before we worked acumens we had spent thousands of dollars on marketing and have been struggling with marketing agencies but our search ends here.\" ", companyCEO: "Kim Nolance", company: "Co-Founder, Xeno AI" }

]

export const partnerImages = [
    
    'googlecloud.webp',
    'meta.webp',
    'GooglePremierPartner.webp',
    'shopifyy.webp',
    'tiktokk.webp'
    
];

export const brandImages = [
    'caridad.webp',
    'F7.webp',
    'jolie-1.webp',
    'Scuola_Logo_OnlyTop-1.webp',
    'petmania.webp',
    'tecnologia.webp'
]

export const marketingList = [
    "A marketing audit is an evaluation of your company's marketing efforts and their effectiveness. Here what you will get:",
    "Evaluate your target audience to see if they have changed or if you need to adjust your messaging to better reach them",
    "Analyze your website to ensure it is user-friendly, mobile-responsive, and optimized for search engines.",
    "Review your content marketing efforts, including your blog posts, social media and email marketing."
]

export const awardedImages = [
    "56cf51c7d935aba26a8f553867bf878b.webp",
    "EXPERTISE_Blackbis-700x560-1.webp",
    "badge-2019-local-excellence-dark.webp"
]

export const inputFields = [
    {
        name: 'CompanyName',
        type: 'text',
        label: 'Company Name',
        require: 'Company Name is required',
        placeholder: 'Company Name',
    },
    {
        name: 'userFirstName',
        type: 'text',
        label: 'First Name',
        require: 'First Name is required',
        placeholder: 'First Name',
    },
    {
        name: 'userLastName',
        type: 'text',
        label: 'Last Name',
        require: 'Last Name is required',
        placeholder: 'Last Name',
    },
    {
        name: 'userEmail',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Email Address',
    },  
    {
        name: 'userPhnNo',
        type: 'number',
        label: 'Phone Number',
        require: 'Phone Number is Required',
        placeholder: 'Phone Number',
    },
    {
        name: 'message',
        type: 'message',
        label: 'message',
        require: 'Message is Required',
        placeholder: 'What can we help you with?',
    },
    {
        name: 'subscribe',
        type: 'checkbox',
        label: 'I , Agree to the Terms & Conditions and the Privacy policy of Acumens media inc.',
    },
    {
        name: 'terms',
        type: 'checkbox',
        label: 'Yes, I would like to receive promotional emails & newsletters',
    }
];
export const AiSolutionsDropdown = [
    {
        icon: React.createElement(MdMessage),
        content: "Social Media Automation",
        router: "/Social-media-automation.htm"
    },
    {
        icon: React.createElement(FaSearchengin),
        content: "Search Engine Services(SEO/SEM)",
        router: "/Seo.htm"
    },
    {
        icon: React.createElement(FaGoogle),
        content: "AI Fueled Google Business Services",
        router: "/Google-suite.htm"
    },
    {
        icon: React.createElement(MdMail),
        content: "AI Powered Email Marketing",
        router: "/Email-Marketing.htm"
    },
    {
        icon: React.createElement(FaCartShopping),
        content: "AI Driven E-commerce Solutions",
        router: "/E-commerce.htm"
    },
    {
        icon: React.createElement(MdOutlineBrowserUpdated),
        content: "AI-Integrated Web Design & Hosting",
        router: "/Web-Design-Hosting.htm"
    },
    {
        icon: React.createElement(MdRocket),
        content: "AI-Enhanced App Development",
        router: "/app-development.htm"
    },
    {
        icon: React.createElement(MdGroups),
        content: "ERP / CRM / IT /Chatbots",
        router: "/Erp-crm-it-chatbot.htm"
    },
    {
        icon: React.createElement(FaLightbulb),
        content: "AI-Enhanced Content Writing",
        router: "/Content-writing.htm"
    },
    {
        icon: React.createElement(FaHashtag),
        content: "CCaaS / Outsourcing & Global Recruitment Support",
        router: "/CCaaS-Outsourcing-Consulting.htm"
    },

];
export const AiSolutionsDropdownMobile = [
    {
        icon: React.createElement(FaInstalod),
        content: "Ai Solutions",
        router: "/Ai-Solutions.htm"
    },
    {
        icon: React.createElement(MdMessage),
        content: "Social Media Automation",
        router: "/Social-media-automation.htm"
    },
    {
        icon: React.createElement(FaSearchengin),
        content: "Search Engine Services(SEO/SEM)",
        router: "/Seo.htm"
    },
    {
        icon: React.createElement(FaGoogle),
        content: "AI Fueled Google Business Services",
        router: "/Google-suite.htm"
    },
    {
        icon: React.createElement(MdMail),
        content: "AI Powered Email Marketing",
        router: "/Email-Marketing.htm"
    },
    {
        icon: React.createElement(FaCartShopping),
        content: "AI Driven E-commerce Solutions",
        router: "/E-commerce.htm"
    },
    {
        icon: React.createElement(MdOutlineBrowserUpdated),
        content: "AI-Integrated Web Design & Hosting",
        router: "/Web-Design-Hosting.htm"
    },
    {
        icon: React.createElement(MdRocket),
        content: "AI-Enhanced App Development",
        router: "/app-development.htm"
    },
    {
        icon: React.createElement(MdGroups),
        content: "ERP / CRM / IT /Chatbots",
        router: "/Erp-crm-it-chatbot.htm"
    },
    {
        icon: React.createElement(FaLightbulb),
        content: "AI-Enhanced Content Writing",
        router: "/Content-writing.htm"
    },
    {
        icon: React.createElement(FaHashtag),
        content: "CCaaS / Outsourcing & Global Recruitment Support",
        router: "/CCaaS-Outsourcing-Consulting.htm"
    },

];

export const WhoWeAreDropdown = [
    {
        icon: React.createElement(FaRegAddressCard),
        content: "About Us",
        router: "/about.htm"
    },
    {
        icon: React.createElement(FaBlog),
        content: "Blog",
        router: "/blog.htm"
    }
]
export const FollowUs = [
    {
        icon: 'linkedin.webp',
        router: "https://www.linkedin.com",
        class:'w-8 h-8 object-contain grayscale-[10] hover:grayscale-[0]'
    },
    {
        icon: 'facebook.webp',
        router: "https://www.facebook.com",
        class:'h-7 w-7 object-contain grayscale-[10] hover:grayscale-[0]'
    },
    {
        icon: 'twitternew.webp',
        router: "https://www.twitter.com",
        class:'h-8 w-8 object-contain grayscale-[50] hover:grayscale-[0]'
    },
    {
        icon: 'instagram.webp',
        router: "https://www.instagram.com",
        class:'h-7 w-7  object-contain grayscale-[10] hover:grayscale-[0]' 
        // 
    },
    {
        icon: 'youtubenew.webp',
        router: "https://www.youtube.com",
        class:'w-12 h-12 object-contain grayscale-[10] hover:grayscale-[0]'
    }
];




export const LetsTalk = [
    {
        content: "Lets Talk",
        router: "/"
    },
    {
        content: "Sign Up",
        router: "/"
    },
    {
        content: "Log In",
        router: "/"
    }
]

export const footerServiceLinks1 = [
    {
        name : "Social Media Automation", route : "/Social-media-automation.htm"
    },
    {
        name : "AI-Fueled Google Business Services", route : "/Google-suite.htm"
    },
    {
        name : "AI-Driven E-Commerce Solutions", route : "/E-commerce.htm"
    },
    {
        name : "AI-Enhanced App Development", route : "/app-development.htm"
    },
    {
        name : "Content Writing", route : "/Content-writing.htm"
    },
]

export const footerServiceLinks2 = [
    {
        name : "Search Engine Services (SEO/SEM)", route : "/Seo.htm"
    },
    {
        name : "AI-Powered Email Marketing", route : "/Email-Marketing.htm"
    },
    {
        name : "AI-Integrated Web Design & Hosting", route : "/Web-Design-Hosting.htm"
    },
    {
        name : "ERP / CRM / IT / ChatBots", route : "/Erp-Crm-It-Chatbots.htm"
    },
    {
        name : "CCaaS / Outsourcing & Consulting.", route : "/CCaaS-Outsourcing-Consulting.htm"
    },
]

export const AboutUs = [
    {
        name : "About", route : "/about.htm"
    },
    {
        name : "Blog", route : "/blog.htm"
    },
    {
        name : "Contact", route : "/contact.htm"
    },
]