import { StaticImageData } from "next/image";
import { PROJECT_KEYS } from "./constants";

// Interface for a project image
export type ProjectImage = {
  src: StaticImageData | null;
  alt: string;
  link: PROJECT_KEYS;
};

export type ProjectData = {
  title: string;
  link: PROJECT_KEYS;
  date: string;
  type: string;
  area: string;
  methodology: string;
  materials: string;
  description: string;
  images: ProjectImage[];
};
