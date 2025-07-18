export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "MeetAI",
    title: "MeetAI",
    category: "Full Stack Application",
    shortDescription: "A modern, full-stack meeting assistant platform that blends real-time video calls with the power of AI.",
    description: ["🤖 MeetAI is a modern, full-stack meeting assistant platform that blends real-time video calls with the power of AI. From intelligent agent participation to auto-transcribed summaries — it's like having a smart co-host for every meeting."
    ],
    features: [
      "🎥 Real-time video/audio powered by Stream Video SDK",
      " AI agents using Google Gemini and OpenRouter APIs",
      "✍️ Live transcription & summarization after each call",
      "📅 Schedule meetings, configure agents, track recordings",
      "🔁 Handles background tasks seamlessly via Inngest",
      "💅 Built with modular UI using Shadcn UI & Tailwind CSS",
      "🧭 Fully type-safe backend with tRPC + Drizzle ORM"
    ],
    technologies: ["React 19", "Typescript", "Javascript", "Tailwindcss", "Shadcn UI", "tRPC", "Drizzle ORM", "Inngest", "Stream Video SDK", "Google Gemini API", "OpenRouter API"],
    coverImage: "/Meetai-cover.png",
    thumbnailImage: "/meetai-thumbnail.png",
    gallery: [
      { url: "/meetai-screen1.png", caption: "Home Screen with Meeting Options" },
      { url: "/meetai-screen2.png", caption: "Create Agent Screen" },
      { url: "/meetai-screen3.png", caption: "Create Meeting Screen" },
      { url: "/meetai-screen4.png", caption: "Meeting UI" },
    ],
    timeline: "2 months",
    role: "Full Stack Developer",
    liveUrl: "https://example.com/meetai",
    githubUrl: "https://github.com/anishvkalbhor/meetai",
    relatedProjects: [
      {
        slug: "dispenzo",
        title: "Dispenzo",
        category: "Hardware Application",
        image: "/modern-finance-overview.png",
      },
    ],
  },
  {
    id: 2,
    slug: "Carryure",
    title: "Carryure",
    category: "Ecommerce Application",
    shortDescription: "A modern job search application designed to connect job seekers with employers efficiently.",
    description: ["This project is a user-friendly E-Pharmacy web application developed using ReactJS and Firebase. It provides users with a seamless experience for browsing and purchasing medicines online, with functionalities that cater to both customers and administrators. This project was created as part of a submission assignment, focusing on delivering an intuitive and efficient online pharmacy platform."
    ],
    features: [
      "🏠 Home & Search – Browse medicines with search and detailed info for each item.",
      "🛒 Cart & Orders – Add to cart, adjust quantity, view order history.",
      "👤 User Profile – Edit profile image and name; auto-fetch login details.",
      "⚙️ Admin Panel – CRUD operations for managing medicine inventory.",
      "🌍 Integrations – Google Meet for consultations; map to locate nearby clinics."
    ],
    technologies: ["React", "Javascript", "Node.js", "Express", "Firebase", "Framer Motion", "OpenStreetMap API"],
    coverImage: "/carrycure-cover.png",
    thumbnailImage: "/carrycure-thumbnail.png",
    gallery: [
      { url: "/job-finder-screen1.png", caption: "Home Screen with Job Recommendations" },
      { url: "/job-finder-screen2.png", caption: "Job Detail View" },
      { url: "/job-finder-screen3.png", caption: "User Profile and Skills" },
      { url: "/job-finder-screen4.png", caption: "Application Tracking Dashboard" },
    ],
    timeline: "3 months",
    role: "Full Stack Developer",
    liveUrl: "https://example.com/carrycure",
    githubUrl: "https://github.com/anishvkalbhor/mini",
    relatedProjects: [
      {
        slug: "dispenzo",
        title: "Dispenzo",
        category: "Hardware Application",
        image: "/modern-finance-overview.png",
      },
    ],
  },
  {
    id: 3,
    slug: "dispenzo",
    title: "Dispenzo",
    category: "Hardware Application",
    shortDescription:
      "A comprehensive financial management dashboard for tracking investments, expenses, and financial goals.",
    description: [
      "The Smart Ration Distribution System (SRDS) modernizes the Public Distribution System (PDS) by using RFID authentication to ensure that only eligible beneficiaries receive their rations. By automating the process, it reduces fraud, manual errors, and delays, offering a more efficient and transparent distribution system.",
      "The system provides real-time access to accurate records through a web portal, ensuring fair and timely ration distribution.",
    ],
    features: [
      "RFID-Based Access Control – Ensures only authorized users can receive rations",
      "Real-Time Data Access – Web portal for real-time record tracking",
      "Automated Workflow – Reduces human intervention in ration dispensing",
      "Fraud Reduction – Minimizes risk by automating ration distribution",
      "Efficient Rationing – Ensures timely and accurate distribution of food items",
    ],
    technologies: ["Arduino UNO", "MFRC522 RFID Module", "HX711 Load Cell Amplifier", "Relay Module", "Node.js", "React", "Firebase"],
    coverImage: "/dispenzo-cover.png",
    thumbnailImage: "/dispenzo-thumbnail.png",
    gallery: [
      { url: "/finance-dashboard-screen1.png", caption: "Main Dashboard Overview" },
      { url: "/finance-dashboard-screen2.png", caption: "Expense Analysis" },
      { url: "/finance-dashboard-screen3.png", caption: "Investment Portfolio" },
      { url: "/finance-dashboard-screen4.png", caption: "Financial Goals Tracker" },
    ],
    timeline: "4 months (Q3-Q4 2022)",
    role: "Hardware Engineer & Full Stack Developer",
    liveUrl: "https://example.com/dispenzo",
    githubUrl: "https://github.com/anishvkalbhor/DISPENZO",
    relatedProjects: [
      {
        slug: "Carrycure",
        title: "Carrycure",
        category: "Web Application",
        image: "/modern-finance-app.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
