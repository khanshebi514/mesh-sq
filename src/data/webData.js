import image from '../images/image-33.webp'

export const navItem  = [
    {
        key:1,
        label:'Home',
        path:'/' || 'home' || 'HOME', 
    },

    {
       key:2,
       label:'Services',
       path:'services',
       expandable: true,

       child:[
        {text:'A dynamic digital marketing agency providing a comprehensive suite of services for a variety of businesses. Capture, engage, and increase online lead generation with our expertise!'},
        { key:201,
          label:'Automation',
          child:[
            'HR Automation', 'Sales Automation', 'Process Automaton', 'Workflow Automation', 'Customer Support Automation',
            'Analytics And Reporting Automation'
          ]
        },
        {
            key:301,
            label:'DESIGN',
            child:[
                'UI/UX', 'Gaming Design','Mobile App Design', 'Illustration Comic Book Design', 'Brand Identity', 'Product Design', 'Signage Design', 'Social Medial Graphics', 'Email Marketing Design', 'Professional Web Design'
            ]
        },
        {
            key:401,
            label:'Developemnt',
            child:[
                'Website Developemt', 'Wordpress Development', 'Web Application Development', 'Content Management System', 'E-commerce Development', 'Website For Startups', 'Landing And Promo Strives', 'Web Accessibility Developement', 'Corporate Website Development', 'Website speed and Proformance Optimization', 'Third Party API Intigration & API Development', 'Chatbot And Customer Support Intigration'
            ]
        },
        {
            key:501,
            label:'Digital Marketing',
            child:[
                'SEO', 'Leads Generation', 'Email Marketing', 'Degital Marketing', 'Content Strategy',
                'social Media Marketing'
            ]
        },

       ]
    },
    {
        key:3,
        label:'About Us',
        path:'about-us', 
    },

    {
        key:4,
        label:'Contact Us',
        path:'contact-us', 
    },

]


export const services = ['Carving the New Dimensions in the Digital Realm! Mesh Sq strives to revolutionize your brand engagement and digital face']
export const serviceCard = [
    {
        id:1,
        "images":'https://meshsq.com/_next/image?url=%2Fimages%2Fwe_provide%2Fimg3.png&w=64&q=75',
        "title":'Automation',
        "description": 'Transform Strategies Through Automation',
    },

    {
        id:2,
        "image":'https://meshsq.com/_next/image?url=%2Fimages%2Fwe_provide%2Fimg1.png&w=64&q=75',
        "title":'Design',
        "description": 'Enhance the Message of your Brand',
    },

    {
        id:3,
        "image":'https://meshsq.com/_next/image?url=%2Fimages%2Fwe_provide%2Fimg2.png&w=64&q=75',
        "title":'Development',
        "description": 'Your Strategic Business Move',
        
    },

    {
        id:4,
        "image":'https://meshsq.com/_next/image?url=%2Fimages%2Fwe_provide%2Fimg5.png&w=64&q=75',
        "title":'Degital Marketing',
        "description": 'Connect the People Who Matter',

    },

]

export const growthCard = [
    {
    "para" : "Our Content Marketing Campaigns have led to a",
    "title": "60% increase",
    "description" : 'in organic content engagement to establish your brand as an industry authority.',
    },

    {
        "para" : "Experience a significant",
        "title": "45% growth",
        "description" : 'in leads generated through content marketing efforts, nurturing your sales pipeline.',
 },
    {
        "para" : "Content marketing expertise has resulted in an impressive",
        "title": "55% growth",
        "description" : 'in organic website traffic, positioning your brand in front of a larger community',
 },


]

export const WhyWorkWithUs = [
    { label: 'Understanding and Observing',
      text : "Understanding and observing your industry's intricacies is our prime approach. With our team's specialized knowledge and experience, we offer solutions proven to drive tangible results. Digging deep into unique requirements of your business at a professional level."
    },

    { label: 'Specialized Solutions',
      text : "Our approach primarily works to increase business efficiency, expand your market reach, enhance and retain customer engagement, and provide perfect solutions aligning with your vision."
    },

    { label: 'Client-Centric Approach',
      text : "Every business associates its aspirations, and we commit to fulfilling those. Our client-centric approach means we are your service partner in your success journey. You can expect open communication, timely response, and an active team sharp at going the extra mile to exceed your expectations."
    },


]

export const yourAnswers = [
    {question: 'What digital marketing services do you offer?',
     answer : "Our competitive digital marketing agency offers a range of services, including search engine optimization SEO to boost your web search results, pay-per-click advertising PPC, social media marketing, a social and handy presence of your brand, email marketing, content marketing strategy, and website design and development."
    },

    {
        question: 'How can digital marketing services benefit my business?',
        answer: "Digital marketing is significant in benefiting your business in today's digital era. It increases your business online visibility, drives the targeted community to your website, and improves conversions and revenue. Stay ahead of your competitors by connecting to your target audience and building product awareness through quick and efficient digital platforms."
    },

    {
        question: 'Is digital marketing more cost-effective than other marketing strategies?',
        answer:"Digital marketing is generally more cost-effective than traditional marketing strategies, as it allows you to target your audience more specifically and measure the results of your campaigns more accurately.",
    },

    {
        question:'How long does it take to check results from digital marketing efforts?',
        answer:"Each method can only ensure immediate business results, but assessing your business marketing needs and the factors that affect business outcomes is essential. We notice your industry, competition, and specific digital marketing strategies employed to measure the time it takes to yield results. Moreover, these factors determine whether its a matter of weeks or even months for a more evident outcome.",
    },

    {
        question:'What is your process of measuring the success of digital marketing campaigns?',
        answer: "We use our Key Performance Indicators (KPIs) tailored to your business needs to measure the success of digital marketing campaigns. These KPIs include web traffic, conversion rates, click through rates, and ROI. Regular analysis and reporting allow us to monitor strategies for optimal results."
    }
]

