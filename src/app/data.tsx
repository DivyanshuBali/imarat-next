import Image from "next/image";
import {
  IEC_05,
  IEC_07,
  IEC_10,
  PROJECT_IMAGES,
  PROJECT_KEYS,
} from "./_utils/constants";
import LandingCarousel from "./_components/LandingCarousel/LandingCarousel";

export const LANDING_CAROUSEL_DATA = [
  {
    content: (
      <LandingCarousel
        images={PROJECT_IMAGES[PROJECT_KEYS.STUDIO_1252].pictures}
      />
    ),
    title: "Studio 1252",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  {
    content: (
      <Image
        src={PROJECT_IMAGES[PROJECT_KEYS.BUDDHIST_MONASTERY].sketches[0].src}
        alt={"A sketch of Buddhist Monastry Concept"}
        fill
        priority
      />
    ),
    title: "Buddhist Monastry",
    link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
  },
  {
    content: (
      <Image
        src={IEC_07}
        alt={"A building at Imarat Earth Centre"}
        fill
        priority
      />
    ),
    title: "Imarat Earth Centre",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
    textWhite: true,
  },
  {
    content: (
      <LandingCarousel
        images={PROJECT_IMAGES[PROJECT_KEYS.NYAYPURI_HOUSE].pictures}
      />
    ),
    title: "Nyaypuri House",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
  {
    content: (
      <Image
        src={IEC_05}
        alt={"A building at Imarat Earth Centre - 01"}
        fill
        priority
      />
    ),
    title: "Imarat Earth Centre",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
    textWhite: true,
  },
  {
    content: (
      <Image
        src={IEC_10}
        alt={"Interior view of a building at Imarat Earth Centre - 10"}
        fill
        priority
      />
    ),
    title: "Imarat Earth Centre",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
    textWhite: true,
  },
  {
    content: (
      <Image
        src={PROJECT_IMAGES[PROJECT_KEYS.BUDDHIST_MONASTERY].sketches[1].src}
        alt={"A sketch of Buddhist Monastry Concept"}
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    ),
    title: "Buddhist Monastry",
    link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
  },
];
