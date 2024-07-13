import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
// importing layout for pages
import PageLayout from "../layout/PageLayout";
// importing pages dynamically
// import ContactPage1 from "../pages/ContactPage1";
// import ContactPage2 from "../pages/ContactPage2";
// import ContactPage3 from "../pages/ContactPage3";
// import LandingPage from "../pages/LandingPage";
const ContactPage = lazy(() => import("../pages/ContactPage"));
const AuditPage = lazy(() => import("../pages/AuditPage"));
const AiSolutionsPage = lazy(() => import("../pages/AiSolutionsPage"));
const SocialMediaPage = lazy(() => import("../pages/SocialMediaPage"));
const SearchEnginePage = lazy(() => import("../pages/SearchEnginePage"));
const GoogleBusinessPage = lazy(() => import("../pages/GoogleBusinessPage"));
const EmailMarketingPage = lazy(() => import("../pages/EmailMarketingPage"));
const EcommerceSolutionPage = lazy(() =>
  import("../pages/EcommerceSolutionPage")
);
const WebDesignAndHosting = lazy(() => import("../pages/WebDesignAndHosting"));
const AppDevelopmentPage = lazy(() => import("../pages/AppDevelopmentPage"));
const ConsultingPage = lazy(() => import("../pages/ConsultingPage"));
const ContentWritingPage = lazy(() => import("../pages/ContentWritingPage"));
const AiChatbotPage = lazy(() => import("../pages/AiChatbotPage"));
const PricingPage = lazy(() => import("../pages/PricingPage/PricingPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const TermsCondition = lazy(() => import("../pages/TermsCondition"));
const Privacy = lazy(() => import("../pages/Privacy"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Ai-Solutions.htm",
        element: <AiSolutionsPage />,
      },
      {
        path: "/Social-media-automation.htm",
        element: <SocialMediaPage />,
      },
      {
        path: "/Seo.htm",
        element: <SearchEnginePage />,
      },
      {
        path: "/Google-suite.htm",
        element: <GoogleBusinessPage />,
      },
      {
        path: "/Email-Marketing.htm",
        element: <EmailMarketingPage />,
      },
      {
        path: "/E-commerce.htm",
        element: <EcommerceSolutionPage />,
      },
      {
        path: "/Web-Design-Hosting.htm",
        element: <WebDesignAndHosting />,
      },
      {
        path: "/app-development.htm",
        element: <AppDevelopmentPage />,
      },
      {
        path: "/Erp-Crm-It-Chatbots.htm",
        element: <AiChatbotPage />,
      },
      {
        path: "/Content-writing.htm",
        element: <ContentWritingPage />,
      },
      {
        path: "/CCaaS-Outsourcing-Consulting.htm",
        element: <ConsultingPage />,
      },
      {
        path: "/pricing.htm",
        element: <PricingPage />,
      },
      {
        path: "/blog.htm",
        element: <BlogPage />,
      },
      {
        path: "/about.htm",
        element: <AboutPage />,
      },
      {
        path: "/contact.htm",
        element: <ContactPage />,
      },
      {
        path: "/audit.htm",
        element: <AuditPage />,
      },
      {
        path: "/terms-condition.htm",
        element: <TermsCondition />,
      },
      {
        path: "/privacy-policy.htm",
        element: <Privacy />,
      },
    ],
  },
]);
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Mainlayout />,
//         children: [
//             {
//                 path: "/",
//                 element: <HomePage />,
//             },
//             {
//                 path: "/index.htm",
//                 element: <HomePage />,
//             },
//             {
//                 path: "/contact.htm",
//                 element: <ContactPage />,
//             },
//             {
//                 path: "/contact1.htm",
//                 element: <ContactPage1 />,
//             },
//             {
//                 path: "/contact2.htm",
//                 element: <ContactPage2 />,
//             },
//             {
//                 path: "/contact3.htm",
//                 element: <ContactPage3 />,
//             },
//             {
//                 path: "/about.htm",
//                 element: <AboutPage />,
//             },
//             {
//                 path: "/audit.htm",
//                 element: <AuditPage />,
//             },
//             {
//                 path: "/terms-condition.htm",
//                 element: <TermsCondition />,
//             },
//             {
//                 path: "/privacy-policy.htm",
//                 element: <Privacy />,
//             },
//             {
//                 path: "/pricing.htm",
//                 element: <PricingPage />,
//             },
//             {
//                 path: "/blog.htm",
//                 element: <BlogPage />,
//             },
//             {
//                 path: "/Ai-Solutions.htm",
//                 element: <AiSolutionsPage />,
//             },
//             {
//                 path: "/Social-media-automation.htm",
//                 element: <SocialMediaPage />,
//             },
//             {
//                 path: "/Seo.htm",
//                 element: <SearchEnginePage />,
//             },
//             {
//                 path: "/Google-suite.htm",
//                 element: <GoogleBusinessPage />,
//             },
//             {
//                 path: "/Email-Marketing.htm",
//                 element: <EmailMarketingPage />,
//             },
//             {
//                 path: "/E-commerce.htm",
//                 element: <EcommerceSolutionPage />,
//             },
//             {
//                 path: "/Web-Design-Hosting.htm",
//                 element: <WebDesignAndHosting />,
//             },
//             {
//                 path: "/app-development.htm",
//                 element: <AppDevelopmentPage />,
//             },
//             {
//                 path: "/Erp-Crm-It-Chatbots.htm",
//                 element: <AiChatbotPage />,
//             },
//             {
//                 path: "/Content-writing.htm",
//                 element: <ContentWritingPage />,
//             },
//             {
//                 path: "/CCaaS-Outsourcing-Consulting.htm",
//                 element: <ConsultingPage />,
//             },
//             {
//                 path: "/Erp-crm-it-chatbot.htm",
//                 element: <AiChatbotPage />,
//             },
//             {
//                 path: "/LandingPage.htm",
//                 element: <LandingPage />,
//             },
//         ]
//     },
// ]);
export default router;
//code for loading design
// < div className = "h-6 w-1/3 bg-gradient-to-r from-gray-300 to-black rounded-md overflow-hidden" >
//     <div className="w-full h-full bg-white animate-pulse"></div>
// </div >
