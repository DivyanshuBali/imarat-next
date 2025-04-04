// Imarat Earth Center
import EC01 from "../../../public/assets/EC01.jpg";
import EC02 from "../../../public/assets/EC02.jpg";
import EC03 from "../../../public/assets/EC03.jpg";

// Buddhist Monastry
import BTM_01 from "../../../public/assets/BTM_01.jpeg";
import BTM_SKETCH01 from "../../../public/assets/BTM_SKETCH01.jpg";
import BTM_SKETCH02 from "../../../public/assets/BTM_SKETCH02.jpeg";
import BTM_SKETCH03 from "../../../public/assets/BTM_SKETCH03.jpg";
import BTM_AXO01 from "../../../public/assets/BTM_AXO01.png";

// Imarat Office Studio 1252
import IMO_01 from "../../../public/assets/IMO_01.jpeg";
import IMO_02 from "../../../public/assets/IMO_02.jpeg";
import IMO_03 from "../../../public/assets/IMO_03.jpeg";
import IMO_04 from "../../../public/assets/IMO_04.jpeg";
import IMO_05 from "../../../public/assets/IMO_05.jpeg";
import IMO_06 from "../../../public/assets/IMO_06.jpeg";
import IMO_AXO01 from "../../../public/assets/IMO_AXO01.png";
import IMO_AXO02 from "../../../public/assets/IMO_AXO02.png";
import IMO_DRAWING01 from "../../../public/assets/IMO_DRAWING01.png";

// Nyaypuri House
import NYH01 from "../../../public/assets/NYH01.jpg";
import NYH02 from "../../../public/assets/NYH02.jpg";
import NYH03 from "../../../public/assets/NYH03.jpeg";
import NYH04 from "../../../public/assets/NYH04.jpg";
import NYH05 from "../../../public/assets/NYH05.jpeg";
import NYH_SKETCH01 from "../../../public/assets/NYH_SKETCH01.jpeg";

// Vrindavan
import VVC01 from "../../../public/assets/VVC01.jpeg";
import VVC_SKETCH01 from "../../../public/assets/VVC_SKETCH01.png";
import VVC_SKETCH02 from "../../../public/assets/VVC_SKETCH02.jpg";
import VVC_SKETCH03 from "../../../public/assets/VVC_SKETCH03.jpg";

// Kindergarten
import PPS_AXO_01 from "../../../public/assets/PPS_AXO_01.png";

export enum PROJECT_KEYS {
  IMARAT_EARTH_CENTRE = "200901-imarat-earth-centre-icea",
  STUDIO_1252 = "201701-studio-1252",
  BUDDHIST_MONASTERY = "202308-buddhist-monastery",
  NYAYPURI_HOUSE = "201801-nyaypuri-house",
  VRINDAVAN = "202308-vrindavan",
  // PKS_KINDERGARTEN = "202412-pks-kindergarten",
  // DBH_HOUSE = "202501-dbh-house",
}

export const PROJECT_IMAGES = {
  [PROJECT_KEYS.IMARAT_EARTH_CENTRE]: [
    {
      src: EC01,
      alt: "Imarat Earth Centre - Main View",
      link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
    },
    {
      src: EC02,
      alt: "Imarat Earth Centre - Interior View",
      link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
    },
    {
      src: EC03,
      alt: "Imarat Earth Centre",
      link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
    },
  ],
  [PROJECT_KEYS.STUDIO_1252]: [
    {
      src: IMO_01,
      alt: "Studio 1252 - Exterior View",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_AXO01,
      alt: "Studio 1252 - Axonometric View 1",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_02,
      alt: "Studio 1252 - Workspace Interior",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_03,
      alt: "Studio 1252 - View 3",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_04,
      alt: "Studio 1252 - View 4",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_05,
      alt: "Studio 1252 - View 5",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_06,
      alt: "Studio 1252 - View 6",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_AXO02,
      alt: "Studio 1252 - Axonometric View 2",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
    {
      src: IMO_DRAWING01,
      alt: "Studio 1252 - Technical Drawing",
      link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
    },
  ],
  [PROJECT_KEYS.BUDDHIST_MONASTERY]: [
    {
      src: BTM_SKETCH01,
      alt: "Buddhist Monastery - Concept Sketch",
      link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
    },
    {
      src: BTM_SKETCH02,
      alt: "Buddhist Monastery - Elevation Sketch",
      link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
    },
    {
      src: BTM_AXO01,
      alt: "Buddhist Monastery - Axonometric View",
      link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
    },
    {
      src: BTM_01,
      alt: "Buddhist Monastery - Draft Board",
      link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
    },
    {
      src: BTM_SKETCH03,
      alt: "Buddhist Monastery - Sketch 3",
      link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
    },
  ],
  [PROJECT_KEYS.NYAYPURI_HOUSE]: [
    {
      src: NYH03,
      alt: "Nyaypuri House - Interior View",
      link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
    },
    {
      src: NYH_SKETCH01,
      alt: "Nyaypuri House - Design Sketch",
      link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
    },
    {
      src: NYH01,
      alt: "Nyaypuri House - Exterior View",
      link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
    },
    {
      src: NYH02,
      alt: "Nyaypuri House - Courtyard View",
      link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
    },
    {
      src: NYH04,
      alt: "Nyaypuri House - Landscape View",
      link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
    },
    {
      src: NYH05,
      alt: "Nyaypuri House",
      link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
    },
  ],
  [PROJECT_KEYS.VRINDAVAN]: [
    {
      src: VVC_SKETCH03,
      alt: "Vrindavan Project - Design Sketch 3",
      link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
    },
    {
      src: VVC01,
      alt: "Vrindavan Project - Concept View",
      link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
    },
    {
      src: VVC_SKETCH01,
      alt: "Vrindavan Project - Design Sketch 1",
      link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
    },
    {
      src: VVC_SKETCH02,
      alt: "Vrindavan Project - Design Sketch 2",
      link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
    },
  ],
  // [PROJECT_KEYS.PKS_KINDERGARTEN]: [
  //   {
  //     src: PPS_AXO_01,
  //     alt: "Kindergarten - Design Render",
  //     link: `projects/${PROJECT_KEYS.PKS_KINDERGARTEN}`,
  //   },
  // ],
  // [PROJECT_KEYS.DBH_HOUSE]: [
  //   {
  //     src: null, // Placeholder for future images
  //     alt: "DBH House - Concept Sketch",
  //     link: `projects/${PROJECT_KEYS.DBH_HOUSE}`,
  //   },
  // ],
};

export const PROJECT_DATA = {
  [PROJECT_KEYS.IMARAT_EARTH_CENTRE]: {
    title: "200901 - IMARAT EARTH CENTRE (ICEA)",
    link: PROJECT_KEYS.IMARAT_EARTH_CENTRE,
    date: "2009 - ONGOING",
    type: null,
    area: "4850 sq yards",
    location: null,
    methodology: "Artisan skill training, Earthen Materials, Solar Passive",
    materials: "Mud Bricks, Bamboo, Sal, Sheesham, Thatch, Chachra",
    description: `
      The Earth Centre began in 2009 with a simple dwelling. The challenge was to use mud architecture in the challenging climate of the gangetic plains, to build economically and to demonstrate a vocabulary of natural materials. The result was a 2 bed room dwelling, where the lower mezzanine room is the excavated earth used to manufacture mud bricks. For the project, natural systems such as filler slabs, Wood and Bamboo roofs, stack ventilation, Earth berming, Thatch roofing and in the further stages, lime and oxide flooring, Chachra and bamboo roofing and ferrocement roofing as well. The dwelling was built economically at a total cost of just 26,00,000 INR in 2014. Since then, the site has expanded to include 6 more smaller dwellings to cater to the new institution of 'Imarat Centre for Earth Architecture'.
    `,
    images: PROJECT_IMAGES[PROJECT_KEYS.IMARAT_EARTH_CENTRE],
  },
  [PROJECT_KEYS.STUDIO_1252]: {
    title: "201701 - STUDIO 1252",
    link: PROJECT_KEYS.STUDIO_1252,
    date: "2018",
    type: "Creative Workspace",
    area: "150 Sq Yards",
    location: "Chandigarh, India",
    methodology: "Retrofit, Renovation, Multi-use Programs",
    materials: "Bricks, Concrete, Deodar, Pine",
    description:
      "The greatest act of building sustainably means not building at all. In recent years, architects have forayed into the potential of an architecture of retrofit. Studio 1252 was Imarat’s response to this challenge, by attempting to convert an HIG government housing apartment into a mixed use studio cum residence. The studio is now the headquarters for Imarat Architects at Chandigarh. What was before a dark dingy space was converted into an open setting of various walls, some which allow views, others physical access. By inserting slabs at the 7 foot level circulation spaces were given greater definition, making hallway spaces seem higher. Lastly, the finishes of mud plasters with rice husk fibres, exposed bricks and wooden fitting demonstrate the timeless and resilient qualities of natural materials, creating a material vocabulary for clients of the firm.",
    images: PROJECT_IMAGES[PROJECT_KEYS.STUDIO_1252],
  },
  [PROJECT_KEYS.NYAYPURI_HOUSE]: {
    title: "201801 - NYAYPURI HOUSE",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
    date: "2018- ONGOING",
    type: "Residential",
    area: "1000 sq yards",
    location: null,
    methodology: "Contemporising Mud, Hybrid Construction, In-house Furniture",
    materials: "Mud Bricks, Bricks, Concrete, Lime",
    description: `The Nyayapuri House was started in 2014 with the vision of making the mud house typology a possibility in the urban regions of the city. Its viability in rural settings in terms of economy and sustainability as well as its resilience to the climate were well demonstrated at the Earth Centre in Kuva Heri. But the urban dweller has needs for lower maintenance, durability and well insulated spaces in a habitat. So this house combines a structure with mud walls and concrete columns as well as brick pillars to create a hybrid system. This minimises carbon footprint and more importantly brings in mud into the foray of standard building materials.
    \n
    In a leap of experimentation, the making of this house brought in a team of talented woodworkers, producing furniture and furnishings in house. The experimentations were carried on with several other artisans such as the stone mason for the use of terrazzo and the use of a ferrocement slab over timber joists for spanning. The most liberating visual aspect, though, is the 6 foot cantilevers in heavy sloped concrete slabs supported by mud walls, breaking  the assumptions about mud as a kucca construction.`,
    images: PROJECT_IMAGES[PROJECT_KEYS.NYAYPURI_HOUSE],
  },
  [PROJECT_KEYS.VRINDAVAN]: {
    title: "202308 - VRINDAVAN",
    link: PROJECT_KEYS.VRINDAVAN,
    date: "2023 - ONGOING",
    type: null,
    area: "17 Acres",
    location: null,
    methodology:
      "Zero Cement Construction, Lime and Brick, Bamboo Spans, Landscape Infills",
    materials: "Bricks, Lime, Jaggery, Red Sandstone, Kota Stone",
    description:
      "Vrindavan is invisioned as ‘an Indian village’. The visual logic of villages, clustered, huddle around open spaces that account for activities. The challenge of this brief is to accomplish the puritan vision of building naturally- to the level that no cement is brought to the site. The program as well as the construction aim to respond to this. The masterplan is organised to create an atmosphere of a rural setting with densely clustered masses, spaced around open areas. The idea of meandering through and that of the promenade are the two movement patterns which shape its structure as well. This vision has allowed the client to build slowly and due to this slow pace, lime has been favoured with local additives such as jaggery and jackfruit to be used as mortar, replacing cement while kota stone in combination with lime becomes the damp proof course.",
    images: PROJECT_IMAGES[PROJECT_KEYS.VRINDAVAN],
  },

  // THESE PROJECTS CONTAIN AI GENERATED DATA
  [PROJECT_KEYS.BUDDHIST_MONASTERY]: {
    title: "202308 - BUDDHIST MONASTERY",
    link: PROJECT_KEYS.BUDDHIST_MONASTERY,
    date: "ONGOING",
    type: "Religious & Contemplative Space",
    area: "8500 SQ M",
    location: "Bodh Gaya, Bihar",
    methodology:
      "Traditional Construction Techniques, Sacred Geometry, Community Involvement",
    materials: "Lime Mortar, Local Stone, Timber, Bamboo, Clay Tiles, Thatch",
    description:
      "The Buddhist Monastery project seeks to create a contemporary interpretation of traditional monastic architecture, balancing ritualistic requirements with functional needs. Set in a serene natural landscape, the complex is designed as a place for meditation, learning, and community gathering.\n\nThe spatial arrangement follows principles of sacred geometry, with meditation halls, living quarters, and communal spaces organized around a central stupa. Covered walkways connect different parts of the complex, providing shelter while framing views of the surrounding landscape.\n\nConstruction employs traditional techniques executed by local craftspeople, ensuring that the building process itself becomes a form of spiritual practice. Natural materials sourced from the region root the project in its context while minimizing environmental impact.",
    images: PROJECT_IMAGES[PROJECT_KEYS.BUDDHIST_MONASTERY],
  },
  // [PROJECT_KEYS.PKS_KINDERGARTEN]: {
  //   title: "202412 - PKS KINDERGARTEN",
  //   link: PROJECT_KEYS.PKS_KINDERGARTEN,
  //   date: "ONGOING",
  //   type: "Educational",
  //   area: "3200 SQ M",
  //   location: "Bengaluru, Karnataka",
  //   methodology: "Child-centered Design, Playful Learning, Safe Materials",
  //   materials:
  //     "Compressed Earth Blocks, Bamboo, Recycled Wood, Natural Finishes, Local Stone, Clay Tiles",
  //   description:
  //     "The PKS Kindergarten project reimagines early childhood education spaces through a design that stimulates curiosity, supports development, and connects children with nature. Scale, safety, and sensory experience guide all design decisions, creating environments that encourage exploration and wonder.\n\nThe kindergarten is organized as a cluster of small learning pavilions arranged around outdoor play areas and gardens. Each pavilion houses different learning activities, while covered walkways and gathering spaces facilitate movement and social interaction. Low windows, tactile surfaces, and varying spatial qualities respond to children's perceptions and behaviors.\n\nConstruction utilizes non-toxic, natural materials that age gracefully and create healthy indoor environments. The building itself serves as a teaching tool, with visible systems demonstrating principles of sustainability and natural processes to young learners.",
  //   images: PROJECT_IMAGES[PROJECT_KEYS.PKS_KINDERGARTEN],
  // },
  // [PROJECT_KEYS.DBH_HOUSE]: {
  //   title: "202501 - DBH HOUSE",
  //   link: PROJECT_KEYS.DBH_HOUSE,
  //   date: "ONGOING",
  //   type: "Residential",
  //   area: "650 SQ M",
  //   location: "Goa, India",
  //   methodology: "Biophilic Design, Energy Efficiency, Custom Craftsmanship",
  //   materials:
  //     "Rammed Earth, Reclaimed Wood, Stone, Glass, Copper, Living Roof",
  //   description:
  //     "The DBH House explores the relationship between built form and natural landscape, creating a residence that feels both sheltered and connected to its surroundings. Designed for clients with a deep appreciation for nature, the house balances privacy, comfort, and environmental responsibility.\n\nThe spatial organization follows the natural contours of the site, with living areas arranged to capture views and optimize passive heating and cooling. Large openings dissolve boundaries between inside and outside, while carefully detailed transitions create a rich experiential journey through the house.\n\nThe material palette emphasizes tactile qualities and natural aging processes, with rammed earth walls providing thermal mass and reclaimed wood elements adding warmth and character. Advanced systems for water harvesting, solar generation, and waste management are integrated discreetly, supporting a lifestyle that minimizes resource consumption.",
  //   images: PROJECT_IMAGES[PROJECT_KEYS.DBH_HOUSE],
  // },
};

// Export all images with metadata for consumption by other components
export const ALL_PROJECT_IMAGES = {
  // Imarat Earth Centre
  EC01: {
    src: EC01,
    alt: "Imarat Earth Centre - Main View",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
  },
  EC02: {
    src: EC02,
    alt: "Imarat Earth Centre - Interior View",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
  },
  EC03: {
    src: EC03,
    alt: "Imarat Earth Centre",
    link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
  },

  // Buddhist Monastery
  BTM_SKETCH01: {
    src: BTM_SKETCH01,
    alt: "Buddhist Monastery - Concept Sketch",
    link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
  },
  BTM_SKETCH02: {
    src: BTM_SKETCH02,
    alt: "Buddhist Monastery - Elevation Sketch",
    link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
  },
  BTM_AXO01: {
    src: BTM_AXO01,
    alt: "Buddhist Monastery - Axonometric View",
    link: `projects/${PROJECT_KEYS.BUDDHIST_MONASTERY}`,
  },

  // Studio 1252
  IMO_01: {
    src: IMO_01,
    alt: "Studio 1252 - Exterior View",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_02: {
    src: IMO_02,
    alt: "Studio 1252 - Workspace Interior",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_03: {
    src: IMO_03,
    alt: "Studio 1252 - View 3",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_04: {
    src: IMO_04,
    alt: "Studio 1252 - View 4",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_05: {
    src: IMO_05,
    alt: "Studio 1252 - View 5",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_06: {
    src: IMO_06,
    alt: "Studio 1252 - View 6",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_AXO01: {
    src: IMO_AXO01,
    alt: "Studio 1252 - Axonometric View 1",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_AXO02: {
    src: IMO_AXO02,
    alt: "Studio 1252 - Axonometric View 2",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },
  IMO_DRAWING01: {
    src: IMO_DRAWING01,
    alt: "Studio 1252 - Technical Drawing",
    link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
  },

  // Nyaypuri House
  NYH01: {
    src: NYH01,
    alt: "Nyaypuri House - Exterior View",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
  NYH02: {
    src: NYH02,
    alt: "Nyaypuri House - Courtyard View",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
  NYH_SKETCH01: {
    src: NYH_SKETCH01,
    alt: "Nyaypuri House - Design Sketch",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
  NYH03: {
    src: NYH03,
    alt: "Nyaypuri House - Interior View",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
  NYH04: {
    src: NYH04,
    alt: "Nyaypuri House - Landscape View",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },
  NYH05: {
    src: NYH05,
    alt: "Nyaypuri House",
    link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
  },

  // Vrindavan
  VVC01: {
    src: VVC01,
    alt: "Vrindavan Project - Concept View",
    link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
  },
  VVC_SKETCH01: {
    src: VVC_SKETCH01,
    alt: "Vrindavan Project - Design Sketch 1",
    link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
  },
  VVC_SKETCH02: {
    src: VVC_SKETCH02,
    alt: "Vrindavan Project - Design Sketch 2",
    link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
  },
  VVC_SKETCH03: {
    src: VVC_SKETCH03,
    alt: "Vrindavan Project - Design Sketch 3",
    link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
  },

  // Kindergarten
  PPS_AXO_01: {
    src: PPS_AXO_01,
    alt: "Kindergarten - Design Render",
    link: "",
  },
};

// Also export individual image references for direct access
export {
  // Earth Centre
  EC01,
  EC02,
  EC03,

  // Buddhist Monastry
  BTM_SKETCH01,
  BTM_SKETCH02,
  BTM_AXO01,

  // Studio - 1252
  IMO_01,
  IMO_02,
  IMO_03,
  IMO_04,
  IMO_05,
  IMO_06,
  IMO_AXO01,
  IMO_AXO02,
  IMO_DRAWING01,

  // Nyaypuri
  NYH01,
  NYH02,
  NYH03,
  NYH04,
  NYH05,
  NYH_SKETCH01,

  // Vrindavan
  VVC01,
  VVC_SKETCH01,
  VVC_SKETCH02,
  VVC_SKETCH03,

  // Kindergarten
  PPS_AXO_01,
};
