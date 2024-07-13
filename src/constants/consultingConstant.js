import React from "react"
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import { PiMicrophoneStageFill } from "react-icons/pi";

export const socialMediaHero = {
    title : "SOLUTIONS",
    heading : "Consulting, Outsourcing & CCaaS",
    context1: "Are you facing challenges in managing outsourcing processes or seeking expert consultation for your business issues? Acumens Media is here to guide you through these complexities. Our team of seasoned professionals excels in identifying the most efficient outsourcing solutions, helping you reduce costs and eliminate the hassle of managing these processes internally",
    buttonText : "Get An Audit",
    photo : "./aiSolutionPictures/pexels-cottonbro-studio-7350921-1024x948.webp",
    router:"/audit.htm"
}

export const socialMediaMarktingList = {
    heading : "Solutions that bring results for your business",
    context: "At Acumens Media, our commitment to you is grounded in delivering tangible results, particularly in the realm of outsourcing and consulting. Our services include a comprehensive approach to outsourcing, where we manage the process from start to finish, ensuring that you benefit from reduced operational costs and improved efficiency.",
    list : [
        "Customized Outsourcing Solutions",
        "Expert Consulting on Business Challenges",
        "Efficient Subcontracting Process",
        "Data-Driven Decision Making",
        "ROI-Based Pricing Model",
        "Comprehensive Call Center Services",
    ]
}

export const socialMediaBlogs = {
    heading : "ACUMENS",
    subHeading : "Why outsourcing business operations can increase your profits?",
    blog1 : {header : "Cost Reduction", context : "Outsourcing allows businesses to lower their operational costs. By delegating certain tasks or functions to external service providers, companies can save on expenses associated with hiring and training employees, maintaining office space, and purchasing equipment. Outsourced services often come at a lower cost due to the service provider's specialization and economies of scale. This reduction in overhead and operational costs directly translates into increased profitability. ", photo : "./aiSolutionPictures/pexels-ivan-samkov-8117438-1024x750.webp"},
    blog2 : {header : "Focus on Core Business Activities", context : "When non-core activities are outsourced, it frees up time and resources for the business to concentrate on its core competencies. This means more attention and investment can be directed towards areas that generate the most revenue, such as product development, customer service, and strategic planning. By focusing on what they do best, businesses can improve their offerings, enhance customer satisfaction, and ultimately drive higher profits.", photo : "./aiSolutionPictures/google-experts-1024x750.webp"}
}

export const socialMediaServices = {
    title : "WHAT YOU GET",
    heading : "Maximizing Efficiency and Profitability:",
    subHeading : "Our Outsourcing and Consulting Methodology At Acumens Media, we are dedicated to transforming your business operations to achieve greater efficiency and profitability. Our unique approach to outsourcing and consulting is designed to align with your specific business needs, ensuring that every solution we provide not only optimizes operations but also significantly enhances your bottom line. Here's how we do what we do:",
    card : [
        {title : "Requirement Analysis", header : "Client Requirement Analysis" , context : "Initially, we engage in a thorough assessment of our clients' specific needs and challenges. This involves understanding their business model, identifying areas that can benefit from outsourcing, and analyzing their overall objectives. This step is crucial for tailoring our services to provide maximum value."},
        {title : "Strategic Planning and Solution Design", header : "Strategic Planning and Solution Design" , context : "Based on the initial analysis, we develop a strategic plan. This includes selecting the appropriate services, designing a customized approach for outsourcing, and formulating effective consulting strategies. Our focus is on creating solutions that align with the client's goals and budget."},
        {title : "Implementation and Management of Services", header : "Implementation and Management of Services" , context : "After strategizing, we move to the implementation phase, where we oversee the execution of the outsourcing tasks and consulting plans. This involves managing relationships with third-party vendors, ensuring quality control, and continuously monitoring the processes to ensure they meet the set standards."},
        {title : "Performance Review and Continuous Improvement", header : "Performance Review and Continuous Improvement" , context : "Finally, we conduct regular reviews of the services provided. This includes analyzing the outcomes, measuring the return on investment, and gathering client feedback. Based on these insights, we make necessary adjustments to optimize the services continually, ensuring ongoing improvement and client satisfaction."},
    ]
}


export const aboutSocialMediaServices = {
    title : "CREATING SUCCESS",
    heading : "Why Outsourcing and Consulting can help your business grow.",
    card : [
        {icon : React.createElement(PiMicrophoneStageFill), heading : "Flexibility", context : "Outsourcing offers flexibility to meet changing business needs and market demands.",router:"/app-development.htm"},
        {icon : React.createElement(FaLightbulb), heading : "Quality Improvement", context : "Consultants and specialized outsourcing firms often deliver higher quality output due to their expertise and focus.",router:"/CCaaS-Outsourcing-Consulting.htm"},
        {icon : React.createElement(SiGooglemarketingplatform), heading : "Risk Management", context : "Outsourcing and consulting can help businesses manage and mitigate risks, especially in areas outside their expertise.",router:"/Email-Marketing.htm"},
    ]
}

export const clientReview = "\"Working with Acumens has showed me the real potential of my business. My revenue sky-rocketed within 6 months after outsourcing my business operations with Acumens Media\""

export const socialMediaProofs = {
    title : "THE PROOF IS IN THE NUMBERS",
    heading : "The results our clients are getting, speak for themselves.",
    cards : [
        {percentage: "38%", context : "Better customer retention rate in websites."},
        {percentage: "72%", context : "Increase in revenue with CCaaS service by Acumens Media"},
        {percentage: "82%", context : "Customers are leaving a 5-star review after their inital transaction."},
    ]
}

export const socialMediaFaqs = {
    title : "FAQ", 
    heading : "FAQs about CCaas / Outsourcing & Consulting", 
    subTitle : "Looking to learn more about CCaas / Outsourcing & Consulting for your business? Browse our FAQs:", 
    faq1 : {
        question : "What types of businesses can benefit from Acumens Media's outsourcing and consulting services?",
        answer : "Our services are versatile and tailored to meet the needs of various industries and business sizes. Whether you're a small startup or a large corporation, our customized approach ensures that we can effectively address your specific challenges and objectives."
    },
    faq2 : {
        question : "What kind of consulting services does Acumens Media offer?",
        answer : "We offer a wide range of consulting services, including strategic business planning, process optimization, and problem-solving for specific business challenges. Our consultants bring in-depth knowledge and industry experience to deliver actionable insights and solutions."
    },
    faq3 : {
        question : "Can Acumens Media help with scaling business operations?",
        answer : "Yes, our outsourcing services are designed to be scalable, supporting your business growth. We can adjust the level of service as your business needs change, providing flexibility and support for expansion."
    },
    faq4 : {
        question : "What makes Acumens Media's approach to outsourcing and consulting unique?",
        answer : "Our approach is client-centric, data-driven, and results-oriented. We combine in-depth analysis of your specific needs with strategic planning and execution, ensuring that our solutions not only address your immediate challenges but also contribute to your long-term success. Additionally, our global network and expertise in various industries allow us to provide comprehensive and effective solutions."
    },
}

export const banner = {
    photo : "./aiSolutionPictures/google-logo.webp",
    heading : "Drive more revenue for your company",
    buttonContext : "Get a Proposal"
}

export const contactMessage = "See how we can help your business grow with digital marketing"
