// This file contains all the case study details for dynamic rendering in the portfolio.
// Each object represents a case study for a project, similar to projectCards.ts

export const caseStudies = [
  {
    title: "Bloedlemoen Shopify Store",
    images: [
      {
        src: "/bloed-hero.png",
        caption:
          "Modern Shopify storefront hero section with festive moments branding.",
      },
      {
        src: "/cocktails.png",
        caption:
          "Classic cocktails section showcasing product offerings and recipes.",
      },
      {
        src: "/gifts.png",
        caption: "Festive gifts carousel with interactive product display.",
      },
      {
        src: "/products.png",
        caption:
          "Products page with filtering, sorting, and inventory management.",
      },
      {
        src: "/rewards-login.png",
        caption: "Customer rewards and loyalty program integration.",
      },
    ],
    breakdown:
      "A Shopify storefront built using shopify themes, utilizing the Storefront API for dynamic content. This project demonstrates custom theme development, product management, and seamless checkout experiences.",
    video: ["/bloedlemoen.mp4", "/bloedlemoen-rewards.mp4"],
    links: [
      { label: "Live Site", href: "https://shop.bloedlemoengin.com/" },
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
      "Problem\n\nThe Limpopo Chefs Academy needed a centralized, digital platform to manage students, staff, and guardians. Previously, processes like attendance, assignments, assessments, and financial tracking were manual, error-prone, and time-consuming. The academy required a secure, scalable, and mobile-friendly system to streamline operations.\n\nSolution\n\nI designed and implemented a comprehensive management system that included:\n\nMulti-user Authentication & Permissions: Staff, students, and guardians with role-based access.\n\nAssignment & Assessment System: Students can submit tasks, get graded in real-time, and retry attempts within configurable limits.\n\nAttendance Management: QR code-based scanning, calendar tracking, WEL attendance monitoring.\n\nFinancial Management: Billing, payment tracking, arrears alerts, and guardian access.\n\nStudent Information System: Complete student profiles, document management, academic tracking.\n\nStaff Management & Analytics: Assignment allocation, moderation, and performance reporting.\n\nOutcome\n\nReduced manual administrative work by over 40%.\n\nHandled 100+ concurrent student submissions with zero downtime.\n\nAllowed guardians to access real-time student progress and financial info.\n\nImproved reporting accuracy and operational transparency.\n\nDelived a production-ready, secure, and mobile-first system that scaled with the academy's needs.",
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
      "Problem\n\nSA Chefs Association needed a centralized, automated registration and payment system for culinary events. The old manual processes caused errors, slow payment tracking, and administrative burden.\n\nSolution\n\nI developed a comprehensive registration platform with:\n\nDynamic Pricing System: Automatic calculation based on attendee type, membership, group discounts, and VAT.\n\nPayment Integration: Yoco for card payments, EFT for bank transfers, with dual test/live configuration.\n\nEmail Automation: Admin alerts and user confirmations with payment tracking.\n\nMulti-Type Registration: Individual, bulk, booth, and sponsor registration.\n\nUser Experience: Multi-step forms, real-time validation, success/failure pages, mobile-responsive design.\n\nData Management: Prisma ORM for database persistence, unique reference numbers, robust error handling.\n\nOutcome\n\nReduced registration errors to near zero.\n\nAutomated payments and confirmations improved financial tracking.\n\nStreamlined event registration for hundreds of attendees across multiple categories.\n\nDelivered a scalable, professional, and mobile-friendly platform.",
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
      "Problem\n\nThe SA Chefs Association needed a secure, modern platform to manage online elections for the Board of Directors. The previous system was manual, error-prone, and made it difficult to ensure voting integrity, eligibility, and transparency.\n\nSolution\n\nI built a full-stack voting platform with:\n\nMember Authentication & Validation: Only eligible members could vote, preventing duplicates.\n\nDynamic Voting Form: Interactive candidate selection with enforced voting rules.\n\nReal-Time Feedback: Toast notifications for success/errors.\n\nAdmin Dashboard: Secure interface to monitor results, manage elections, and receive email alerts per submission.\n\nVoting Period Control: Admins could close voting while preserving the system for future use.\n\nAccessibility & Responsiveness: Mobile-friendly, inclusive UI.\n\nOutcome\n\nSuccessfully digitized board voting, replacing manual processes.\n\nEnsured election integrity with no duplicate or invalid submissions.\n\nReduced administrative effort and improved transparency.\n\nDelivered a scalable, secure, and user-friendly system accessible from any device.",
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
