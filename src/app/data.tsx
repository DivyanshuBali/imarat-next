import Image from "next/image";
import { PROJECT_IMAGES, PROJECT_KEYS } from "./_utils/constants";
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
        src={
          PROJECT_IMAGES[PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY].sketches[0]
            .src as string
        }
        alt={"A sketch of Aranya Sangharama Monastry Concept"}
        fill
        priority
      />
    ),
    title: "Aranya Sangharama Monastry",
    link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
  },
  {
    content: (
      <LandingCarousel
        images={PROJECT_IMAGES[PROJECT_KEYS.IMARAT_EARTH_CENTRE].pictures}
      />
    ),
    title: "Nyaypuri House",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
];
