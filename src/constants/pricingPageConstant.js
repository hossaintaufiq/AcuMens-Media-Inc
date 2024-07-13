import React from "react"
import { RxCross1 } from "react-icons/rx";
import { FaCircleCheck } from 'react-icons/fa6'
import { IoCheckmark } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";

export const pricing = {
    monthly: {
        UltimatePro: 379.99,
        pro: 349.99,
        business: 329.99,
        special: 299.99
    },
    sixMonths: {
        UltimatePro: 265.99,
        pro: 244.99,
        business: 230.99,
        special: 209.99
    },
    twelveMonths: {
        UltimatePro: 220.39,
        pro: 202.99,
        business: 191.93,
        special: 173.99
    }
};

export const socialMediaBasicPlan = {
    badge: "Low Price",
    pricePlan: "Basic",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "4 AI-Generated Posts per day",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "3 Social Media Accounts",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Professional Social Media Account / Page creation (included)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "4 2 AI-Created YouTube video / Month*",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Scheduled Posts (Managed by Us)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No Website Design",
            color: "text-black",
            size : "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No AI-Enhanced Core SEO",
            color: "text-black",
            size : "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No Web Hosting",
            color: "text-black",
            size : "text-2xl"

        }
    ],
    threeMonthPlan1: "3 Months Social Media Ads campaign management (example facebook ads, Instagram Ads)",
    threeMonthPlan2: "3 Months Search Engine Ads campaign management (example google ads, Microsoft / Bing Ads)",
    color: "text-black",
    icon: React.createElement(IoCloseCircleSharp),
    size : "text-2xl",

    buttonText: "SELECT BASIC"
}

export const socialMediaGrowthPlan = {
    pricePlan: "Growth",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "8 AI-Generated Posts per day",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "3 Social Media Accounts",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Professional Social Media Account / Page creation (included)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "4 AI-Created YouTube video / Month*",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Scheduled Posts (Managed by Us)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No Website Design",
            color: "text-black",
            size : "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No AI-Enhanced Core SEO",
            color: "text-black",
            size : "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No Web Hosting",
            color: "text-black",
            size : "text-2xl"

        }
    ],

    threeMonthPlan1: "3 Months Social Media Ads campaign management (example facebook ads, Instagram Ads)",
    threeMonthPlan2: "3 Months Search Engine Ads campaign management (example google ads, Microsoft / Bing Ads)",
    color: "text-black",
    size : "text-2xl",    
    icon: React.createElement(IoCloseCircleSharp),

    buttonText: "SELECT GROWTH"
}

export const socialMediaDynamicPlan = {
    pricePlan: "Dynamic Plus",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "14 AI-Generated Posts per day",
            color: "text-blue-Purple",
            size : "text-xl"
        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "4 Social Media Accounts",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Professional Social Media Account / Page creation (included)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "7 AI-Created YouTube video / Month*",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Scheduled Posts (Managed by Us)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Website Design (Upto 7 Pages)*",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "3 Months of AI-Enhanced SEO",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "1 year of Web Hosting Included*",
            color: "text-blue-Purple",
            size : "text-xl"

        }
    ],

    threeMonthPlan1: "3 Months Social Media Ads campaign management (example facebook ads, Instagram Ads)",
    threeMonthPlan2: "3 Months Search Engine Ads campaign management (example google ads, Microsoft / Bing Ads)",
    color: "text-blue-Purple",
    size : "text-xl",
    icon: React.createElement(FaCircleCheck),

    buttonText: "SELECT DYNAMIC PLUS"
}

export const socialMediaUltimatePlan = {
    badge: "Best Value",
    pricePlan: "Ultimate Pro",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "22 AI-Generated Posts per day",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "5 Social Media Accounts",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Professional Social Media Account / Page creation (included)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "10 AI-Created YouTube video / Month*",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Scheduled Posts (Managed by Us)",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Website Design (Upto 15 Pages)*",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "3 Months of AI-Enhanced SEO",
            color: "text-blue-Purple",
            size : "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "1 year of Web Hosting Included*",
            color: "text-blue-Purple",
            size : "text-xl"

        }
    ],

    threeMonthPlan1: "3 Months Social Media Ads campaign management (example facebook ads, Instagram Ads)",
    threeMonthPlan2: "3 Months Search Engine Ads campaign management (example google ads, Microsoft / Bing Ads)",
    color: "text-blue-Purple",
    size : "text-xl",
    icon: React.createElement(FaCircleCheck),

    buttonText: "SELECT Ultimate Pro"
}

export const socialMediaPlanFaqs = {
    title: "FAQ",
    heading: "Price 1 Faq",
    subTitle: "Looking to learn more about E-Commerce for your business? Browse our FAQs:",
    faq1: {
        question: "How Does AI Improve E-commerce Sales?",
        answer: "AI enhances E-commerce by providing personalized recommendations, optimizing pricing, and streamlining the shopping experience. This results in higher conversion rates and increased sales."
    },
    faq2: {
        question: "Is AI Integration Cost-Effective for E-commerce Businesses?",
        answer: "Yes, AI integration is cost-effective in the long run. It reduces operational costs through efficient inventory management, targeted marketing, and reduced cart abandonment."
    },
    faq3: {
        question: "Can AI Benefit Small E-commerce Businesses?",
        answer: "Absolutely. AI tools are scalable and adaptable, making them suitable for businesses of all sizes. Small E-commerce businesses can leverage AI to compete with larger competitors."
    },
    faq4: {
        question: "How Does AI Impact Customer Retention?",
        answer: "AI enhances customer retention by delivering personalized experiences, improving customer service through chatbots, and offering relevant product recommendations, resulting in greater brand loyalty."
    },
}

export const SMPriceComparison = [
    {
        feature: "22 AI-Generated Posts per day / Social media account (incl. Video posts)",
        basic: React.createElement(IoCheckmark),
        growth: React.createElement(IoCheckmark),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-blue-Purple",
        textColor: "text-white"
    },
    {
        feature: "5 Social Media Accounts",
        basic: React.createElement(IoCheckmark),
        growth: React.createElement(IoCheckmark),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-white",
        textColor: "text-black"
    },
    {
        feature: "1 Free Professional Social Media Accounts / Page creation (included)",
        basic: React.createElement(IoCheckmark),
        growth: React.createElement(IoCheckmark),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-blue-Purple",
        textColor: "text-white"
    },
    {
        feature: "10 AI-Created YouTube videos / Month (upto 1 min Duration)",
        basic: React.createElement(IoCheckmark),
        growth: React.createElement(IoCheckmark),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-white",
        textColor: "text-black"
    },
    {
        feature: "Scheduled Posts (fully managed by our experts)",
        basic: React.createElement(IoCheckmark),
        growth: React.createElement(IoCheckmark),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-blue-Purple",
        textColor: "text-white"
    },
    {
        feature: "upto 33 Video posts / Month",
        basic: React.createElement(IoCheckmark),
        growth: React.createElement(IoCheckmark),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-white",
        textColor: "text-black"
    },
    {
        feature: "Web Designing / Development (Upto 15 Pages) Basic",
        basic: React.createElement(RxCross1),
        growth: React.createElement(RxCross1),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-blue-Purple",
        textColor: "text-white"
    },
    {
        feature: "3 Months of AI-Enhanced Core SEO (Search Engine Optimization)",
        basic: React.createElement(RxCross1),
        growth: React.createElement(RxCross1),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-white",
        textColor: "text-black"
    },
    {
        feature: "1 year of Web Hosting Included*",
        basic: React.createElement(RxCross1),
        growth: React.createElement(RxCross1),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-blue-Purple",
        textColor: "text-white"
    },
    {
        feature: '<p> 6 Months Social Media Ads campaign management & optimization (example facebook ads, Instagram Ads) <br/> -OR- <br/> 6 Months Search Engine Ads campaign management & optimization (example google ads, Microsoft / Bing Ads) </p>',
        basic: React.createElement(RxCross1),
        growth: React.createElement(RxCross1),
        dynamicPlus: React.createElement(IoCheckmark),
        ultimatePro: React.createElement(IoCheckmark),
        bgColor: "bg-white",
        textColor: "text-black"
    },
    {
        feature: "Social Media Ads campaign budget or spends*",
        basic: React.createElement(RxCross1),
        growth: React.createElement(RxCross1),
        dynamicPlus: React.createElement(RxCross1),
        ultimatePro: React.createElement(RxCross1),
        bgColor: "bg-blue-Purple",
        textColor: "text-white"
    },
    {
        feature: "Search Engine Ads campaign budget or spends*",
        basic: React.createElement(RxCross1),
        growth: React.createElement(RxCross1),
        dynamicPlus: React.createElement(RxCross1),
        ultimatePro: React.createElement(RxCross1),
        bgColor: "bg-white",
        textColor: "text-black"
    },
    {
        feature: "SSL (Secure Socket Layer) Certificate*",
        basic: React.createElement(RxCross1),
        growth: React.createElement(RxCross1),
        dynamicPlus: React.createElement(RxCross1),
        ultimatePro: React.createElement(RxCross1),
        bgColor: "bg-blue-Purple",
        textColor: "text-white"
    },
];

// constants for Marketing Tab 

export const emailPricing = {
    monthly: {
        SEMPlans: 149.99,
        SMMPlans: 149.99,
        SEOPlans: 199.99,
        advancedSEOPlans: 169.99,
        basicSEOPlans: 129.99,
        emailMarketingPlans: 139.99,
    },
    sixMonths: {
        SEMPlans: 124.99,
        SMMPlans: 125.99,
        SEOPlans: 167.99,
        advancedSEOPlans: 142.79,
        basicSEOPlans: 109.19,
        emailMarketingPlans: 117.59,
    },
    twelveMonths: {
        SEMPlans: 104.16,
        SMMPlans: 107.99,
        SEOPlans: 139.99,
        advancedSEOPlans: 118.99,
        basicSEOPlans: 90.99,
        emailMarketingPlans: 104.99,
    }
};

export const SEMPlans = {
    pricePlan: "AI-Powered Search Engine Marketing (SEM)",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "AI-Powered Search Engine Ad Campaign Management",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Covers 1 Search engine Ad Campaign + 1 Video Ad Campaign",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "5 Landing Page optimization (incl. only in 12 months Package)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "AI-Powered (Ad Video) Creation 2 / month (upto 1 min)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Search Engine Affiliate Marketing (included)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Keyword Research & Implementation",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "competitor Keyword Analysis",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Content Updation upto 4 Pages (incl. only in 12 months Package)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 50% Savings on Ads campaign budget or spends from 1st week*",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Search Engine Ads campaign budget or spends*",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "select sem"
}

export const SMMPlans = {
    pricePlan: "AI-Powered Social Media Marketing (SMM)",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "AI-Powered Social Media Ad Campaign Management",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Covers 1 Social Media Ad Campaign + 1 Video Ad Campaign",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "5 Landing Page or 1 Social Media Page optimization (incl. in 12 months Package)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "AI-Powered (Ad Video) Creation 2 / month (upto 1 min)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "SeMeta Audience Network Marketing Management (included)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Audience Demographics Research & Implementation",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Competitive Analysis",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Content Updation upto 4 Pages (incl. only in 12 months Package)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 50% Savings on Ads campaign budget or spends from 1st week*",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Search Engine Ads campaign budget or spends*",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "SELECT SMM"
}

export const SEOPlans = {
    pricePlan: "AI-Enhanced Core (SEO) Search Engine Optimization",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "Core (In-Depth) Site Audit",
            color: "text-blue-Purple",
            size: "text-xl"
        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 20 Targeted Keywords",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 60 Backlinks added / Month",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 6 Blogs Created & added / Month",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 25 landing Pages optimized",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "ON-Page & OFF-Page Both SEO Covered",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Technical Analysis & Improvization",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "In-Depth Competitor Analysis Covered",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Google Business Profile Optimization Included",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Weekly Reports",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "YouTube Videos added on Channel for optimization*",
            color: "text-blue-Purple",
            size: "text-xl"

        },
    ],

    buttonText: "SELECT SEO"
}

export const advancedSEOPlans = {
    pricePlan: "AI-Enhanced Advanced (SEO) Search Engine Optimization",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "Advanced Site Audit",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 12 Targeted Keywords",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 40 Backlinks added / Month",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 4 Blogs Created & added / Month",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 20 landing Pages optimized",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "ON-Page & OFF-Page Both SEO Covered",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Advanced Technical Analysis & Improvization",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Advanced Competitor Analysis Covered",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Content Optimization",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Google Business Profile Basic Optimization Included",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Fortnightly Reports (once every 2 weeks)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "YouTube Videos added on Channel for optimization*",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "SELECT advanced seo"
}

export const basicSEOPlans = {
    pricePlan: "AI-Enhanced Basic (SEO) Search Engine Optimization",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "Basic Site Audit",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 6 Targeted Keywords",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 20 Backlinks added / Month",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 2 Blogs Created & added / Month",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 10 landing Pages optimized",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "ON-Page & OFF-Page Both SEO Covered",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Basic Technical Analysis & Improvization",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Basic Competitor Analysis Covered",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Content Optimization",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Monthly Reports",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Google Business Profile Optimization not Included",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "YouTube Videos added on Channel for optimization*",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "SELECT basic seo"
}

export const emailMarketingPlans = {
    pricePlan: "AI-Powered E-mail Marketing Packages",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "Assessment / Audit of Current Email Marketing Activity",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Industry & Competitors Research",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "AI-Powered Email Content creation, Copywriting & Design creation",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Creation & Optimization of audience segments",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Build relationships through personalized engagement",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Boost brand awareness , Promote content & Generate leads",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Market products or services & Nurture leads",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Smart AI-Engaging managed Campaigns",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 40k Emails included",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 20k contacts included",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Additional emails & contacts can be added separately",
            color: "text-blue-Purple",
            size: "text-xl"

        }
    ],

    buttonText: "SELECT EMP"
}

// constants for SSL Tab 

export const SSLPricing = {
    monthly: {
        CRMPlans: 44.99,
        webHostingPlans: 4.99,
        webDesignPlans: 24.99,
        emailPackagePlans: 0.006,
        basicSSLPlans: 899.99,
        secureSSLPlans: 899.99,
    },
    sixMonths: {
        CRMPlans: 34.99 ,
        webHostingPlans: 3.99,
        webDesignPlans: 22.99,
        emailPackagePlans: 0.0075,
        basicSSLPlans: 42.49,
        secureSSLPlans: 899.99,
    },
    twelveMonths: {
        CRMPlans: 24.99,
        webHostingPlans: 3.49,
        webDesignPlans: 20.99,
        emailPackagePlans: 0.006,
        basicSSLPlans: 899.99,
        secureSSLPlans: 899.99,
    }
};

export const CRMPlans = {
    pricePlan: "Customer Relationship Management (CRM)",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "Leads, Contacts & Client / Customer Management",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Multi Step Lead to Customer Journey (simple Clicks)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Centralized Workspace for the Team",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Email / Contact Customers using the CRM",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Generate Proposals, Invoices & Accept Payments* via the CRM",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "In-Built Support Ticket Managment (Better Customer Support)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Expense Management & Time Managment",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Customer Dashboard (in-built)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Chats & discussion for the Team (in-built)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Fully Customizable",
            color: "text-blue-Purple",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Upto 10 Users (please contact for additional users)",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "select CRM"
}

export const webHostingPlans = {
    pricePlan: "Website Hosting / Web Hosting",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "1 Website",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Upto 5 GB space",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Basic CPU & MEM resources",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Weekly backup and recovery",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "PHP with OPcache",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "HTTP/2 Support",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Site Scan & Unlimited SFTP accounts",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "DDoS protection",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Redundant network connectivity",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No Cpanel",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No SSL certificate (can be purchased separately)",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "SELECT Web Hosting"
}

export const webDesignPlans = {
    pricePlan: "Web Design / Web Pages",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "Professional Web Design",
            color: "text-blue-Purple",
            size: "text-xl"
        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Mobile Responsive Design",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "SEO Friendly Design",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Social Media Integration",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Google Analytics Setup* (applicable for min 8+ page design)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Contact Form",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "3 Months Update Support* (applicable for 8+ Page Design)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Built from Scratch & Custom Design (unlike wordpress themes)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "2-3 Day (Super Fast) Delivery for an additional fee*",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No Hosting included (can be purchased separately)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "No SSL certificate (can be purchased separately)",
            color: "text-black",
            size: "text-2xl"

        },
    ],

    buttonText: "SELECT Web Design"
}

export const emailPackagePlans = {
    pricePlan: "Additional Email Package",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "AI-Powered Email Design",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "AI-Optimized Email Content",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "All Emails Delivered to Inbox",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "List / Contacts Maintenance Included",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Fortnite Reporting (once every 2 weeks)",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Dedicated Account Manager",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "All 7 Days Service",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Custom Email Designs & Content for Higher conversions",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Activity / Conversion Tracking",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Packages to be used in 30 days No Carryforward / Carryover",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Contacts / Leads not included (to be provided by buyer)",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "SELECT Email Pack"
}

export const basicSSLPlans = {
    pricePlan: "Secure Sockets Layer (SSL) Certificate Basic",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "social media accounts",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: " social media accounts",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "1 YouTube video/week",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "social media accounts",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Online store on your domain",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Google My Business optimization",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Facebook Ads(charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: " Google Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Instagram Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Instagram Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Instagram Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "SELECT Basic SSL"
}

export const secureSSLPlans = {
    pricePlan: "Secure Sockets Layer (SSL) Certificate Advanced (E-Commerce)",
    plans: [
        {
            icon: React.createElement(FaCircleCheck),
            text: "social media accounts",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: " social media accounts",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "1 YouTube video/week",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "social media accounts",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Online store on your domain",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(FaCircleCheck),
            text: "Google My Business optimization",
            color: "text-blue-Purple",
            size: "text-xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Facebook Ads(charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: " Google Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Instagram Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Instagram Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        },
        {
            icon: React.createElement(IoCloseCircleSharp),
            text: "Instagram Ads (charged extra)",
            color: "text-black",
            size: "text-2xl"

        }
    ],

    buttonText: "SELECT Secure SSL"
}



