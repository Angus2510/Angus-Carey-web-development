// This file contains all the case study details for dynamic rendering in the portfolio.
// Each object represents a case study for a project, similar to projectCards.ts

export const caseStudies = [
  {
    title: "Headless Shopify Demo",
    images: [
      {
        src: "/globe.svg",
        caption: "Landing page design for Headless Shopify Demo.",
      },
      { src: "/login.png", caption: "Custom login screen for secure access." },
      { src: "/next.svg", caption: "Next.js integration for fast rendering." },
      { src: "/vercel.svg", caption: "Deployment on Vercel for global reach." },
      { src: "/logo-new.svg", caption: "Branding and logo design." },
      { src: "/file.svg", caption: "File management features." },
    ],
    breakdown:
      "This project involved building a custom Shopify storefront using Hydrogen and Next.js. Key features included lightning-fast performance, custom integrations, and a modern UI.",
    video: "/Info-Chefs.mp4",
    links: [
      { label: "Live Site", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Limpopo Chefs Academy Portal",
    images: [
      {
        src: "/students-search.png",
        caption: "Student search functionality for admin users.",
      },
      {
        src: "/lecturer-dashboard.png",
        caption: "Lecturer dashboard for course management.",
      },
      {
        src: "/student-dashboard.png",
        caption: "Student dashboard for tracking progress.",
      },
      {
        src: "/student-dashboard2.png",
        caption: "Advanced student dashboard view.",
      },
      { src: "/results.png", caption: "Results and grading overview." },
      { src: "/finance.png", caption: "Finance management module." },
    ],
    breakdown:
      "As the sole Full-Stack Developer at Limpopo Chefs Academy, I spearheaded the end-to-end creation of a comprehensive educational portal. Utilizing Next.js, React, TypeScript, Tailwind CSS, MongoDB, and Prisma, I developed critical functionalities including secure user profiles, online tests, grading systems, and AWS S3 document management. I also implemented NextAuth for robust authentication. This solution achieved a Real Experience Score of 98, dramatically streamlining academic operations.",
    video: "/LCA-admin.mp4",
    links: [
      { label: "Live Site", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Supporting Project",
    images: [
      { src: "/next.svg", caption: "Next.js project setup." },
      { src: "/next.svg", caption: "API integration example." },
      { src: "/next.svg", caption: "Custom UI components." },
      { src: "/next.svg", caption: "Performance optimization." },
      { src: "/next.svg", caption: "Deployment workflow." },
      { src: "/next.svg", caption: "Testing and QA." },
    ],
    breakdown:
      "This project highlights API integrations and advanced React/Next.js features.",
    video: null,
    links: [
      { label: "Live Site", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];
