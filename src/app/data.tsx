import Image from "next/image";
import {
  BTM_SKETCH01,
  IEC_03,
  IEC_05,
  IEC_10,
  PROJECT_IMAGES,
  PROJECT_KEYS,
} from "./_utils/constants";
import LandingCarousel from "./_components/LandingCarousel/LandingCarousel";

export const LANDING_CAROUSEL_DATA = [
  {
    content: (
      <LandingCarousel
        images={[
          ...PROJECT_IMAGES[PROJECT_KEYS.STUDIO_1252].pictures,
          ...PROJECT_IMAGES[PROJECT_KEYS.STUDIO_1252].drawings,
        ]}
      />
    ),
    title: "Imarat Earth Centre",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
  },
  {
    content: (
      <Image
        src={BTM_SKETCH01}
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
      <LandingCarousel
        images={[
          ...PROJECT_IMAGES[PROJECT_KEYS.NYAYPURI_HOUSE].pictures,
          ...PROJECT_IMAGES[PROJECT_KEYS.NYAYPURI_HOUSE].drawings,
        ]}
      />
    ),
    title: "Nyaypuri House",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
  {
    content: (
      <Image
        src={IEC_03}
        alt={"A building at Imarat Earth Centre at night"}
        fill
        priority
      />
    ),
    title: "Imarat Earth Centre",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
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
  },
];
