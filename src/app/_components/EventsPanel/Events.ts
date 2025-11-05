import { Event } from "./EventsPanel";

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "LECTURE BY TONK AND ANNA LIU",
    date: "15 Nov 2025",
    dateString: new Date("2025-11-15"),
    description: {
      subtitle:
        "Launching Imarat Forum with an exhibition and inaugural lecture by London based architects, Anna and Tonkin Liu on Asking, Looking, Playing, Making: A nature-focused design process.",
      href: "https://forms.gle/TzE3TduTmsV9mxMj7",
      hrefText: "Registration Link",
      place: "Cafe Well Being, sector 22C Chandigarh",
      additionalInfo: ["Food and Beverages are included in the registration"],
    },
  },
  {
    id: 2,
    title: "BUILDING WITH HEMPCRETE",
    date: "18 Nov 2025",
    dateString: new Date("2025-11-18"),
    description: {
      subtitle:
        "A hands on workshop for architects and aspirants to explore working with hempcrete; a regenerative material offering alternate possibilities in construction.",
      href: "https://forms.gle/7qDE34FRbwQAU3HY9",
      hrefText: "Registration Link",
      place: "3448, Sector 89 Mohali",
      additionalInfo: ["Tea and snacks will be included"],
    },
  },
  {
    id: 3,
    title: "MATERIAL STUDIES",
    date: "21 Nov 2025",
    dateString: new Date("2025-11-21"),
    description: {
      subtitle:
        "Figure out how to use technical research for creative possibilities in the field of construction by a hands-on demonstration of diverse materials including lime, pine, slate and steel",
      href: "https://forms.gle/TEhnHhTSbdYreFDy6",
      hrefText: "Registration Link",
      place: "3448, sector 89 Mohali",
      additionalInfo: ["Tea and Snacks will be served"],
    },
  },
  {
    id: 5,
    title: "HANDMADE EARTH",
    date: "24 Jun 2025",
    dateString: new Date("2025-06-24"),
    description: {
      href: "https://www.instagram.com/p/DLSXgBxy6bu/",
      hrefText: "Instagram Post",
      place: "IIT, Roorkee",
    },
  },
];
