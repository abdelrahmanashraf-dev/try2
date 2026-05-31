import pyramisImg from '../assets/pyramis.png';
import pyramis2Img from '../assets/pyrmais2.png';
import wearopiaImg from '../assets/wearopia.png';
import wearopia2Img from '../assets/wearopia2.png';
import wearopia3Img from '../assets/wearopia3.png';
import qrdevelopmentImg from '../assets/qrdevelopment.png';
import qrdevelopment2Img from '../assets/qrdevelopment2.png';
import qrdevelopment3Img from '../assets/qrdevelopment3.png';

export type Project = {
  id: string;
  category: string;
  name: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
  description?: string;
  role?: string;
  timeline?: string;
  pitch?: string;
  corePoints?: string[];
  tag?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    category: "Product Design",
    tag: "PRODUCT DESIGN • AI ECOSYSTEM",
    name: "Pyramis",
    pitch: "An all-in-one tourism platform for Egypt with an AI trip planner, hotel bookings, and car rentals.",
    description: "Led product design and front-end alignment, simplifying user journeys into a modern booking experience.",
    corePoints: [
      "End-to-End Product Design (UX Research & IA)",
      "Multi-service Dashboard Design",
      "Bridging design and engineering for a Vue.js/.NET stack"
    ],
    role: "Lead UI/UX Designer and Frontend Developer",
    timeline: "1 Month",
    images: {
      col1Top: pyramis2Img,
      col1Bottom: pyramisImg,
      col2: pyramisImg
    }
  },
  {
    id: "02",
    category: "E-Commerce",
    tag: "E-COMMERCE • UI/UX DESIGN",
    name: "Wearopia",
    pitch: "A modern e-commerce platform for a contemporary clothing brand, focused on intuitive product discovery and a friction-free checkout.",
    description: "A modern e-commerce platform for a contemporary clothing brand, focused on intuitive product discovery and a friction-free checkout.",
    corePoints: [
      "Conversion funnel optimization",
      "Balance between brand identity and clean UI",
      "Minimalist aesthetics for product-first impact"
    ],
    role: "Product Designer",
    timeline: "2 weeks",
    images: {
      col1Top: wearopia2Img,
      col1Bottom: wearopia3Img,
      col2: wearopiaImg
    }
  },
  {
    id: "03",
    category: "Web Design",
    tag: "WEB DESIGN • B2B SAAS",
    name: "QR Development",
    pitch: "High-converting marketing and service pages for a tech-driven SaaS company, showcasing corporate capabilities and software solutions.",
    description: "High-converting marketing and service pages for a tech-driven SaaS company, showcasing corporate capabilities and software solutions.",
    corePoints: [
      "High-converting B2B information architecture",
      "Visual hierarchy and strategic CTAs",
      "Production-ready component thinking and frontend feasibility"
    ],
    role: "UI/UX Designer",
    timeline: "1 week",
    images: {
      col1Top: qrdevelopment3Img,
      col1Bottom: qrdevelopment2Img,
      col2: qrdevelopmentImg
    }
  }
];
