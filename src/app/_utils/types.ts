import { StaticImageData } from "next/image";
import { PROJECT_KEYS } from "./constants";

// Interface for a project image
export type ProjectImage = {
  id: string;
  src: string | StaticImageData | null;
  alt: string;
  link: string;
};

export type ProjectAssets = {
  pictures: ProjectImage[];
  sketches: ProjectImage[];
  drawings: ProjectImage[];
  thumbnails: string[];
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
  images: ProjectAssets;
  ogDesc: string;
  location: string;
};
