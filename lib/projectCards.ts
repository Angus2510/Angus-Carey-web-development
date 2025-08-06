// This file contains all the card information for dynamic rendering in the portfolio.
// You can import this in your page and map over the array to render each Card.

export const projectCards = [
  {
    image: "/shopify store.png",
    alt: "Shopify Demo",
    title: "Shopify Demo",
    description:
      "A Shopify storefront built using shopify themes, utilizing the Storefront API for dynamic content.",
    caseStudy: "View Case Study",
    // video: null,
    links: [
      { label: "Live Site", href: "https://08nzx5-kb.myshopify.com/" },
      { label: "GitHub", href: "#" },
    ],
    caseStudyDetails: {
      images: [
        "/globe.svg",
        "/globe.svg",
        "/globe.svg",
        "/globe.svg",
        "/globe.svg",
        "/globe.svg",
      ],
      breakdown:
        "A Shopify storefront built using shopify themes, utilizing the Storefront API for dynamic content.",
    },
  },
  {
    image: "/login.png",
    alt: "Limpopo Chefs Academy Portal",
    title: "Limpopo Chefs Academy Portal",
    description: "Full-stack portal for chef training and management.",
    caseStudy: "View Case Study",

    links: [
      { label: "Live Site", href: "https://portal.limpopochefs.co.za" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/limpopo-chefs-next",
      },
    ],
    caseStudyDetails: {
      images: [
        "/window.svg",
        "/window.svg",
        "/window.svg",
        "/window.svg",
        "/window.svg",
        "/window.svg",
      ],
      breakdown:
        "A full-stack portal for chef training and management, featuring user authentication, course management, and admin dashboards.",
    },
  },
  {
    image: "/info-chefs.png",
    alt: "Info-chefs",
    title: "Info-Chef Event Registration",
    description: "Full stack event registration system.",
    caseStudy: "View Case Study",
    links: [
      { label: "Live Site", href: "https://infochef.sachefs.co.za/" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/info-chef-registration",
      },
    ],
    caseStudyDetails: {
      images: [
        "/next.svg",
        "/next.svg",
        "/next.svg",
        "/next.svg",
        "/next.svg",
        "/next.svg",
      ],
      breakdown:
        "This project highlights API integrations and advanced React/Next.js features.",
    },
  },
  {
    image: "/hey-bro.png",
    alt: "Hey-bro men's mental health",
    title: "Hey-bro men's mental health",
    description: "An AI mens mental health chatbot and app.",
    caseStudy: "View Case Study",
    links: [
      { label: "Live Site", href: "https://hey-bro.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Angus2510/hey-bro" },
    ],
    caseStudyDetails: {
      images: [
        "/main-hey-bro.png",
        "/mens-circles.png",
        "/mental-reset.png",
        "/hey-bro-chat.png",
      ],
      breakdown:
        "This project highlights API integrations and advanced React/Next.js features.",
    },
  },
  {
    image: "/apply-main.png",
    alt: "Limpopo Chefs Academy Application",
    title: "Limpopo Chefs Academy Application",
    description: "Full stack application for chef training and management.",
    caseStudy: "View Case Study",
    links: [
      { label: "Live Site", href: "https://apply.limpopochefs.co.za/apply" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/Apply-to-Limpopo-Chefs-Academy",
      },
    ],
    caseStudyDetails: {
      images: [
        "/apply-main.png",
        "/apply submit.png",
        "/next.svg",
        "/next.svg",
        "/next.svg",
        "/next.svg",
      ],
      breakdown:
        "This project highlights API integrations and advanced React/Next.js features.",
    },
  },
  {
    image: "/voting-main.png",
    alt: "South African Chefs Association Voting Portal",
    title: "South African Chefs Association Voting Portal",
    description:
      "Full stack voting portal for South African Chefs Association.",
    caseStudy: "View Case Study",
    links: [
      { label: "Live Site", href: "https://sa-chefs-association.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/-SA-Chefs-Association",
      },
    ],
    caseStudyDetails: {
      images: ["/voting-main.png", "/voting-login.png"],
      breakdown:
        "This project highlights API integrations and advanced React/Next.js features.",
    },
  },
];
