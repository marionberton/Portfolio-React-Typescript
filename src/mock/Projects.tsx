import mindiply from "../assets/mindiply-preview-updated-21.png";
import music from "../assets/musicPreview-1-2.png";
import ux from "../assets/UXA.png";

export interface Work {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const PROJECTS = [
  {
    image: mindiply,
    alt: " ",
    title: "Mindiply",
    description: "SaaS work management",
  },
  {
    image: music,
    alt: " ",
    title: "Apala",
    description: " music discovery",
  },
  {
    image: ux,
    alt: " ",
    title: "uxAnalytic",
    description: "SaaS ux analysis",
  },
];
