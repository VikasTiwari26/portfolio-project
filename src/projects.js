import { avivaImages, dashboards, mmmImages, posvImages } from "./img/portfolioImages";

export const projectData = [
    {
        title:'Aviva Agent Dashboard',
        myWorks : ['Projected Commission','Image Gallery',"Bonus Calculator","Calender / Organiser","Knowledge Center","Line & Persistency Charts on dashboard"],
        websiteIntro:"It is A portal for Agents where they can see their achievements, progress, birthday reminders, send mails, calculators, organizer, charts and graphs.",
        thumbnailImage:dashboards.avivaDashboard,
        images:avivaImages,
        liveDemoLink :'https://agentportal.avivaindia.com/Agent/',
        video:null,
        techUsed:["ReactJS"]

    },
    {
        title:'My Money Mantra',
        myWorks : ["Blogs","My Profile","Short Form","Long Form","Comment Section","Author Detail Page", "Filter, Search & Sorting Features on Blogs and Author Page"],
        websiteIntro:"MyMoneyMantra is fintech company which provides service for Home Loans, Personal Loans, Credit Cards etc. in India.",
        thumbnailImage:dashboards.mmmDashboard,
        images:mmmImages,
        liveDemoLink :'https://www.mymoneymantra.com/',
        video:null,
        techUsed:["NextJS", "Strapi"]

    },
    {
        title:'Maxlife One App',
        myWorks : ['Haptik Chatbot Integration','Attendance Marking',"Calender","Apply Leave","Loss of Pay"],
        websiteIntro:"Max Life One App enables employees & agents of Max life to Apply Leave, regularize attendance, raising tickets, Payslips, Chatbots on the go through a mobile device.",
        thumbnailImage:dashboards.mloDashboard,
        images:avivaImages,
        liveDemoLink :'https://play.google.com/store/apps/details?id=com.max.mconnect&hl=en_IN&gl=US',
        video:null,
        techUsed:["Ionic", "Angular"]

    },
    {
        title:'Node Chatbot',
        myWorks : ['Bussiness Numbers','HR Policies',"Finance"],
        websiteIntro:"Chatbot built on Nodejs and Angular using google dialogflow and integrated with Maxlife One Mobile App",
        thumbnailImage:dashboards.chatbotLanding,
        images:avivaImages,
        liveDemoLink :'https://agentportal.avivaindia.com/Agent/',
        video:null,
        techUsed:["NodeJs","Express","AngularJS"]

    },
    {
        title:'POSV',
        myWorks : ['Verify Page','Selfie',"Selfie with Face Detection","Questionaire","Declaration","Seller Declaration","Document Upload", "Pdf viewer with & without password","OTP Page","Thank You Page"],
        websiteIntro:"Verifies a policy purchased by a customer by asking question related to Product & Health. It also verifies the authencity of customer by selfie and liveness detection.",
        thumbnailImage:dashboards.posvLanding,
        images:posvImages,
        liveDemoLink :'',
        video:null,
        techUsed:["ReactJS"]

    },
    {
        title:'POSV Admin Panel',
        myWorks : ["Login","Policy Search","Download Backflow","Generate Report with Time Limit (30 days)","Retrigger Link","Document Upload","OTP Page","Thank You Page"],
        websiteIntro:"Admin panel for L2/L3 teams through which they can re-trigger link, download report and check the status of link sent to customer.",
        thumbnailImage:dashboards.adminLogin,
        images:avivaImages,
        liveDemoLink :'',
        video:null,
        techUsed:["ReactJS"]

    },
    {
        title:'Gulf Oil & Training',
        myWorks : ["Home","Profile Page", "Login / Sign Up","Course Cards","Course Detail Page", "Video Player","Calculator","About Us","Contact Us"],
        websiteIntro:"It is a Edtech website for Oilfield professionals.",
        thumbnailImage:dashboards.gotDashboard,
        images:avivaImages,
        liveDemoLink :'https://www.gulfoilandtraining.com/',
        video:null,
        techUsed:["Angular"]

    },
   
   
]