// This file contains all the card information for dynamic rendering in the portfolio.
// You can import this in your page and map over the array to render each Card.

export const projectCards = [
  {
    image: "/globe.svg",
    alt: "Headless Shopify Demo",
    title: "Headless Shopify Demo",
    description:
      "A lightning-fast, custom Shopify storefront built with Hydrogen and Next.js.",
    caseStudy: "View Case Study",
    video: "/Info-Chefs.mp4",
    links: [
      { label: "Live Site", href: "#" },
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
        "This project involved building a custom Shopify storefront using Hydrogen and Next.js. Key features included lightning-fast performance, custom integrations, and a modern UI.",
    },
  },
  {
    image: "/window.svg",
    alt: "Limpopo Chefs Academy Portal",
    title: "Limpopo Chefs Academy Portal",
    description: "Full-stack portal for chef training and management.",
    caseStudy: "View Case Study",
    video: "/LCA-admin.mp4",
    links: [
      { label: "Live Site", href: "#" },
      { label: "GitHub", href: "#" },
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
    image: "/next.svg",
    alt: "Supporting Project",
    title: "Supporting Project",
    description: "Showcase of React, Next.js, and API integrations.",
    caseStudy: "View Case Study",
    links: [
      { label: "Live Site", href: "#" },
      { label: "GitHub", href: "#" },
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
];
