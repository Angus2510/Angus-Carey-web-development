// This file contains all the case study details for dynamic rendering in the portfolio.
// Each object represents a case study for a project, similar to projectCards.ts

export const caseStudies = [
  {
    title: "Shopify Demo",
    images: [
      {
        src: "/shopify store.png",
        caption: "Modern Shopify storefront with custom theming.",
      },
    ],
    breakdown:
      "A Shopify storefront built using shopify themes, utilizing the Storefront API for dynamic content. This project demonstrates custom theme development, product management, and seamless checkout experiences.",
    video: null,
    links: [
      { label: "Live Site", href: "https://08nzx5-kb.myshopify.com/" },
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
      { label: "Live Site", href: "https://portal.limpopochefs.co.za" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/limpopo-chefs-next",
      },
    ],
  },
  {
    title: "Info-Chef Event Registration",
    images: [
      { src: "/info-chefs.png", caption: "Main event registration interface." },
    ],
    breakdown:
      "A full stack event registration system built for Info-Chef events. Features include user registration, payment processing, event management, and administrative dashboards. Built with Next.js, React, and modern web technologies to provide a seamless registration experience.",
    video: "/Info-Chefs.mp4",
    links: [
      { label: "Live Site", href: "https://infochef.sachefs.co.za/" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/info-chef-registration",
      },
    ],
  },
  {
    title: "Hey-bro men's mental health",
    images: [
      {
        src: "/main-hey-bro.png",
        caption: "Main landing page with mental health focus.",
      },
      { src: "/mens-circles.png", caption: "Men's support circles feature." },
      { src: "/mental-reset.png", caption: "Mental reset and wellness tools." },
      { src: "/hey-bro-chat.png", caption: "AI-powered chat interface." },
    ],
    breakdown:
      "An innovative AI-powered mental health platform specifically designed for men. Features include an intelligent chatbot for mental health support, community circles for peer support, wellness tracking tools, and mental reset exercises. Built with Next.js, AI integration, and modern UX principles to create a safe space for men's mental health conversations.",
    video: null,
    links: [
      { label: "Live Site", href: "https://hey-bro.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Angus2510/hey-bro" },
    ],
  },
  {
    title: "Limpopo Chefs Academy Application",
    images: [
      { src: "/apply-main.png", caption: "Application portal main interface." },
      { src: "/apply submit.png", caption: "Application submission process." },
      { src: "/login.png", caption: "Secure authentication system." },
      {
        src: "/student-dashboard.png",
        caption: "Student application tracking.",
      },
    ],
    breakdown:
      "A comprehensive application system for Limpopo Chefs Academy prospective students. Features include online application forms, document upload capabilities, application tracking, payment integration, and administrative review tools. Built with Next.js, secure authentication, and file management to streamline the enrollment process.",
    video: "/LCA-Application.mp4",
    links: [
      { label: "Live Site", href: "https://apply.limpopochefs.co.za/apply" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/Apply-to-Limpopo-Chefs-Academy",
      },
    ],
  },
  {
    title: "South African Chefs Association Voting Portal",
    images: [
      {
        src: "/voting-main.png",
        caption: "Voting portal main interface and dashboard.",
      },
      {
        src: "/voting-login.png",
        caption: "Secure authentication system for voters.",
      },
    ],
    breakdown:
      "A comprehensive voting portal for the South African Chefs Association, enabling secure democratic processes for association elections and decisions. Features include secure voter authentication, ballot management, real-time vote counting, result visualization, and administrative oversight tools. Built with Next.js, secure authentication protocols, and robust data management to ensure election integrity and transparency.",
    video: ["/SA-Voting.mp4", "/SA-Voting2.mp4"],
    links: [
      { label: "Live Site", href: "https://sa-chefs-association.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/Angus2510/-SA-Chefs-Association",
      },
    ],
  },
];
