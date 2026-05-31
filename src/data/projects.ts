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
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    category: "Client",
    name: "Pyramis",
    description: "A comprehensive brand identity and digital presence overhaul for Pyramis, focusing on modern aesthetics and streamlined user experiences.",
    role: "Lead UI/UX Designer",
    timeline: "3 Months",
    images: {
      col1Top: pyramisImg,
      col1Bottom: pyramis2Img,
      col2: pyramis2Img
    }
  },
  {
    id: "02",
    category: "Personal",
    name: "Wearopia",
    description: "An innovative e-commerce concept for a fashion brand, emphasizing immersive product discovery and smooth checkout flows.",
    role: "Product Designer",
    timeline: "2 Months",
    images: {
      col1Top: wearopiaImg,
      col1Bottom: wearopia3Img,
      col2: wearopia2Img
    }
  },
  {
    id: "03",
    category: "Client",
    name: "QR development",
    description: "A functional and sleek dashboard interface designed to help users generate, track, and manage QR codes effectively.",
    role: "UI/UX Designer",
    timeline: "1.5 Months",
    images: {
      col1Top: qrdevelopmentImg,
      col1Bottom: qrdevelopment2Img,
      col2: qrdevelopment3Img
    }
  }
];
