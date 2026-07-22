/**
 * Single source of truth for all portfolio content.
 * Edit this file to change copy, projects, experience, links, etc.
 */

export const profile = {
  name: "Manohar Chawada",
  role: "React Native & Full Stack Developer",
  shortRole: "Mobile & Web Applications",
  tagline:
    "Results-driven React Native Developer with 3 years of experience building and deploying high-performance mobile and web applications for Android and iOS. 4 production apps shipped. Expanding into full-stack development.",
  location: "Indore, India",
  email: "Manoharchawada01@gmail.com",
  github: "https://github.com/manoharchawada",
  linkedin: "https://linkedin.com/in/manohar-chawada-7976311b7",
  resumeUrl: "/resume.pdf",
  resumeUpdated: "Jun 2026",
  avatarUrl: "/avatar.png",
  available: true,
  roles: [
    "React Native Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Next.js Developer"
  ]
} as const;

export const about = {
  paragraphs: [
    "I love building things that make everyday life a little easier. What started as curiosity about how apps work has grown into a passion for creating products that combine thoughtful engineering with intuitive user experiences.",
    "I enjoy solving challenging problems, learning continuously, and collaborating with people who care about building meaningful software. For me, success isn't measured by lines of code—it's measured by the value a product creates for the people who use it.",
    'Over the past <strong class="font-medium text-[var(--color-text)]">3+ years</strong>, I\'ve built high-performance mobile and web applications, taking ideas from concept to production. As the sole developer behind multiple production-grade products—including an OTT streaming platform, a football community app, and a social platform—I\'ve been responsible for delivering reliable, scalable solutions with a <strong class="font-medium text-[var(--color-text)]">100% first-submission approval rate</strong>.',
    'My work has spanned everything from real-time communication and live streaming to secure payment systems and scalable backend services. While I enjoy working with modern technologies, I believe great software is built on <strong class="font-medium text-[var(--color-text)]">clean architecture, maintainable code, and exceptional user experiences</strong>.',
    'Beyond my day-to-day work, I\'m actively expanding my expertise in <strong class="font-medium text-[var(--color-text)]">full-stack development, backend engineering, and system design</strong> to build complete end-to-end solutions. Every project teaches me something new, and that continuous journey of learning is what keeps me excited about software development.',
    "When I'm not building products, you'll usually find me exploring new technologies, refining my development workflow, or challenging myself to become a better engineer than I was yesterday. Along the way, I was honored to receive the <strong class=\"font-medium text-[var(--color-text)]\">Game Changer Award 2025</strong> in recognition of my contributions."
  ],
  highlights: [
    { label: "Years Experience", value: "3" },
    { label: "Production Apps Deployed", value: "4" },
    { label: "App Store Approval Rate", value: "100%" },
    { label: "Live OTT Platform", value: "3" }
  ]
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Ideal IT Techno Pvt. Ltd.",
    role: "React Native Developer",
    period: "May 2023 — Present",
    location: "Indore, India",
    type: "Full-Time",
    bullets: [
      "Architected and delivered IQONS, an end-to-end football community app driving engagement via real-time feeds and push notifications. Integrated Google AdMob for monetization.",
      "Engineered Veels, a full-featured OTT platform from scratch with dual streaming architecture (Agora SDK + AWS IVS), managing content, low-latency streaming, and monetization via Stripe and in-app purchases.",
      "Developed Second Appraisal, a mobile claims management app utilizing React Hook Form with validation for multi-step smart forms, secure APIs, and photo captures.",
      "Contributed to Swingist, a comprehensive social web platform utilizing Next.js (SSR & SSG) and Firebase Firestore for sub-second real-time messaging delivery.",
      "Managed sole development, submission, review, and live deployment for multiple apps, achieving a 100% first-submission approval rate on both Google Play Store and Apple App Store."
    ],
    stack: [
      "React Native",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "Agora SDK",
      "AWS IVS",
      "Stripe"
    ]
  }
];

export type Project = {
  title: string;
  period: string;
  blurb: string;
  problem: string;
  architecture: string[];
  stack: string[];
  website: string;
  demo?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "Veels - OTT Streaming Platform",
    period: "2025",
    blurb:
      "Full-featured OTT streaming platform supporting movies, web series, music, podcasts & short-form video (Reels).",
    problem:
      "Building a complex OTT platform typically requires a full engineering team. Veels was developed solo, addressing challenges like dual streaming architectures, low-latency playback, and robust monetization systems.",
    architecture: [
      "Implemented a dual streaming architecture leveraging Agora SDK for low-latency internal streaming and AWS IVS for scalable external broadcasting.",
      "Integrated a comprehensive monetization ecosystem featuring virtual gifting, Stripe bank integration, coin redemption, and iOS/Android in-app purchases.",
      "Optimized media loading and caching strategies to significantly reduce content delivery latency."
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Agora SDK",
      "AWS IVS",
      "Stripe",
      "Redux Toolkit"
    ],
    website:
      "https://play.google.com/store/apps/details?id=com.veelsappstreaming&pcampaignid=web_share" // Note: Replace with actual URL
    // highlight: "Full-Featured App",
  },
  {
    title: "IQONS - Football Community App",
    period: "2025",
    blurb:
      "End-to-end football community mobile application with real-time engagement and monetization.",
    problem:
      "Creating a reliable, real-time social experience for sports fans required complex real-time feed updates and reliable push notifications.",
    architecture: [
      "Architected real-time feeds and community interaction modules to drive user engagement.",
      "Integrated Google AdMob to establish a passive revenue stream through targeted in-app advertising.",
      "Managed the full lifecycle of app submission and deployment, achieving 100% first-submission approval."
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "Google AdMob"
    ],
    website:
      "https://play.google.com/store/apps/details?id=com.iqons.app&pcampaignid=web_share" // Note: Replace with actual URL
  },
  {
    title: "Swingist - Social Web Platform",
    period: "2024",
    blurb:
      "Comprehensive social web platform with news feed, stories, events, live streaming, real-time chat, and more.",
    problem:
      "Achieving fast page loads and SEO compliance in a large-scale social network required significant optimization.",
    architecture: [
      "Leveraged Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG) to optimize initial load times and SEO.",
      "Integrated Firebase Firestore listeners to achieve sub-second message delivery in real-time chats.",
      "Developed an extensive feature set covering news feeds, stories, events, and groups."
    ],
    stack: ["Next.js", "React.js", "Firebase", "REST APIs"],
    website: "https://www.swingist.com/" // Note: Replace with actual URL
  },
<<<<<<< Updated upstream
  {
=======
   {
>>>>>>> Stashed changes
    title: "Video-Streaming-Backend",
    period: "2026",
    blurb:
      "A YouTube-style video sharing platform backend with user auth, video uploads, playlists, comments, and likes.",
    problem:
      "Needed a scalable REST API to handle video uploads, streaming metadata, and social features (comments, likes, playlists) with secure, stateless authentication.",
    architecture: [
      "Implemented JWT-based access and refresh token authentication with bcrypt password hashing for secure, stateless sessions.",
      "Integrated Multer and Cloudinary to handle video, thumbnail, avatar, and cover image uploads and hosting.",
      "Used Mongoose with mongoose-aggregate-paginate-v2 to build paginated aggregation pipelines for video feeds and playlists.",
      "Designed modular Express routers and controllers separating users, videos/playlists, and comments for maintainability."
    ],
    stack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Multer",
      "REST APIs"
    ],
    website: "https://github.com/manoharchawada/full-stack-application"
  }
];

export type SkillGroup = {
  category: string;
  items: { name: string; note?: string }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", note: "primary" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React Native", note: "primary" },
      { name: "React.js" },
      { name: "Next.js" }
    ]
  },
  {
    category: "State Management",
    items: [{ name: "Redux Toolkit" }, { name: "Context API" }]
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Firebase Firestore" },
      { name: "Firebase Auth" }
    ]
  },
  {
    category: "APIs & Integration",
    items: [{ name: "REST APIs" }, { name: "GraphQL" }, { name: "Axios" }]
  },
  {
    category: "Streaming & Payments",
    items: [
      { name: "Agora SDK" },
      { name: "AWS IVS" },
      { name: "Stripe" },
      { name: "In-App Purchases" }
    ]
  },
  {
    category: "Dev Tools",
    items: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "React Navigation" },
      { name: "React Hook Form" }
    ]
  }
];

export type Achievement = {
  label: string;
  detail: string;
  href?: string;
};

export const achievements: Achievement[] = [
  {
    label: "Game Changer Award 2025",
    detail:
      "Awarded by Ideal IT Techno Pvt. Ltd. for outstanding individual contribution and exceptional technical performance."
  },
  {
    label: "B.E. Electrical Engineering",
    detail:
      "Prestige Institute of Engineering Management & Research, Indore (Aug 2018 - Jun 2021)"
  }
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Stack" },
  { id: "contact", label: "Contact" }
] as const;
