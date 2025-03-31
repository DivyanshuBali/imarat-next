// Imarat Earth Center
import EC01 from "../../../public/assets/EC01.jpg";
import EC02 from "../../../public/assets/EC02.jpg";

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
  PPS_KINDERGARTEN = "202412-pps-kindergarten",
  // DBH_HOUSE = "202501-dbh-house",
}

export const PROJECT_IMAGES = {
  [PROJECT_KEYS.IMARAT_EARTH_CENTRE]: [
    {
      src: EC01,
      alt: "Imarat Earth Centre - Main View",
      link: PROJECT_KEYS.IMARAT_EARTH_CENTRE,
    },
    {
      src: EC02,
      alt: "Imarat Earth Centre - Interior View",
      link: PROJECT_KEYS.IMARAT_EARTH_CENTRE,
    },
  ],
  [PROJECT_KEYS.STUDIO_1252]: [
    {
      src: IMO_01,
      alt: "Studio 1252 - Exterior View",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_AXO01,
      alt: "Studio 1252 - Axonometric View 1",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_02,
      alt: "Studio 1252 - Workspace Interior",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_03,
      alt: "Studio 1252 - View 3",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_04,
      alt: "Studio 1252 - View 4",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_05,
      alt: "Studio 1252 - View 5",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_06,
      alt: "Studio 1252 - View 6",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_AXO02,
      alt: "Studio 1252 - Axonometric View 2",
      link: PROJECT_KEYS.STUDIO_1252,
    },
    {
      src: IMO_DRAWING01,
      alt: "Studio 1252 - Technical Drawing",
      link: PROJECT_KEYS.STUDIO_1252,
    },
  ],
  [PROJECT_KEYS.BUDDHIST_MONASTERY]: [
    {
      src: BTM_SKETCH01,
      alt: "Buddhist Monastery - Concept Sketch",
      link: PROJECT_KEYS.BUDDHIST_MONASTERY,
    },
    {
      src: BTM_SKETCH02,
      alt: "Buddhist Monastery - Elevation Sketch",
      link: PROJECT_KEYS.BUDDHIST_MONASTERY,
    },
    {
      src: BTM_AXO01,
      alt: "Buddhist Monastery - Axonometric View",
      link: PROJECT_KEYS.BUDDHIST_MONASTERY,
    },
    {
      src: BTM_01,
      alt: "Buddhist Monastery - Draft Board",
      link: PROJECT_KEYS.BUDDHIST_MONASTERY,
    },
    {
      src: BTM_SKETCH03,
      alt: "Buddhist Monastery - Sketch 3",
      link: PROJECT_KEYS.BUDDHIST_MONASTERY,
    },
  ],
  [PROJECT_KEYS.NYAYPURI_HOUSE]: [
    {
      src: NYH_SKETCH01,
      alt: "Nyaypuri House - Design Sketch",
      link: PROJECT_KEYS.NYAYPURI_HOUSE,
    },
    {
      src: NYH01,
      alt: "Nyaypuri House - Exterior View",
      link: PROJECT_KEYS.NYAYPURI_HOUSE,
    },
    {
      src: NYH02,
      alt: "Nyaypuri House - Courtyard View",
      link: PROJECT_KEYS.NYAYPURI_HOUSE,
    },
    {
      src: NYH03,
      alt: "Nyaypuri House - Interior View",
      link: PROJECT_KEYS.NYAYPURI_HOUSE,
    },
    {
      src: NYH04,
      alt: "Nyaypuri House - Landscape View",
      link: PROJECT_KEYS.NYAYPURI_HOUSE,
    },
  ],
  [PROJECT_KEYS.VRINDAVAN]: [
    {
      src: VVC_SKETCH03,
      alt: "Vrindavan Project - Design Sketch 3",
      link: PROJECT_KEYS.VRINDAVAN,
    },
    {
      src: VVC01,
      alt: "Vrindavan Project - Concept View",
      link: PROJECT_KEYS.VRINDAVAN,
    },
    {
      src: VVC_SKETCH01,
      alt: "Vrindavan Project - Design Sketch 1",
      link: PROJECT_KEYS.VRINDAVAN,
    },
    {
      src: VVC_SKETCH02,
      alt: "Vrindavan Project - Design Sketch 2",
      link: PROJECT_KEYS.VRINDAVAN,
    },
  ],
  [PROJECT_KEYS.PPS_KINDERGARTEN]: [
    {
      src: PPS_AXO_01,
      alt: "Kindergarten - Design Render",
      link: PROJECT_KEYS.PPS_KINDERGARTEN,
    },
  ],
  // [PROJECT_KEYS.DBH_HOUSE]: [
  //   {
  //     src: null, // Placeholder for future images
  //     alt: "DBH House - Concept Sketch",
  //     link: PROJECT_KEYS.DBH_HOUSE,
  //   },
  // ],
};

export const PROJECT_DATA = {
  [PROJECT_KEYS.IMARAT_EARTH_CENTRE]: {
    title: "200901 - IMARAT EARTH CENTRE (ICEA)",
    link: PROJECT_KEYS.IMARAT_EARTH_CENTRE,
    date: "September 2009 - July 2012",
    type: "Cultural & Education Centre",
    area: "15000 SQ M",
    location: "Udaipur, Rajasthan",
    methodology:
      "Slow Construction, Artisan Training, Natural Materials, Passive Cooling",
    materials: "Adobe Blocks, Lime Plaster, Filler Slab, Bamboo, Wood, Stone",
    description:
      "The Imarat Earth Centre represents a pioneering effort to revive traditional building techniques while addressing contemporary spatial needs. Located in a peri-urban setting, the centre serves as both a cultural hub and a living laboratory for sustainable construction practices.\n\nThe design incorporates passive cooling strategies, with thick adobe walls providing thermal mass and carefully positioned courtyards enhancing natural ventilation. Local artisans were extensively involved in the construction process, allowing for knowledge transfer and skill development within the community.\n\nThe Centre houses exhibition spaces, workshops, a library, and residential quarters for visiting researchers. Its architecture responds sensitively to the surroundings, minimizing environmental impact while creating spaces that foster learning and cultural exchange.",
    images: PROJECT_IMAGES[PROJECT_KEYS.IMARAT_EARTH_CENTRE],
  },
  [PROJECT_KEYS.STUDIO_1252]: {
    title: "201701 - STUDIO 1252",
    link: PROJECT_KEYS.STUDIO_1252,
    date: "January 2017 - August 2018",
    type: "Creative Workspace",
    area: "4500 SQ M",
    location: "Delhi, India",
    methodology: "Adaptive Reuse, Urban Regeneration, Collaborative Design",
    materials: "Reclaimed Brick, Steel, Glass, Wood, Concrete, Local Stone",
    description:
      "Studio 1252 transforms an abandoned industrial structure into a vibrant creative workspace, preserving the building's character while adapting it to contemporary needs. The project demonstrates how thoughtful intervention can breathe new life into neglected urban spaces.\n\nThe design approach maintains the original structural framework while introducing flexible interior arrangements that can accommodate various work modes. Large skylights and strategically positioned windows flood the spaces with natural light, while exposed services celebrate the building's industrial heritage.\n\nThe studio houses a mix of private workspaces, collaborative areas, and public-facing galleries. Outdoor courtyards carved from the original building footprint provide natural ventilation and create spaces for informal interaction and events.",
    images: PROJECT_IMAGES[PROJECT_KEYS.STUDIO_1252],
  },
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
  [PROJECT_KEYS.NYAYPURI_HOUSE]: {
    title: "201801 - NYAYPURI HOUSE",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
    date: "January 2018 - March 2020",
    type: "Residential",
    area: "450 SQ M",
    location: "Jaipur, Rajasthan",
    methodology:
      "Climate-Responsive Design, Indoor-Outdoor Living, Craftsmanship",
    materials:
      "Rammed Earth, Terracotta, Wood, Local Stone, Brick, Lime Plaster",
    description:
      "The Nyaypuri House reimagines domestic living through a careful consideration of climate, context, and cultural patterns. Designed for a multigenerational family, the residence balances privacy with communal interaction through a thoughtful arrangement of spaces.\n\nThe house is organized around a central courtyard that serves as the heart of family life while facilitating natural ventilation. Deep verandas and carefully positioned openings mediate between interior and exterior, providing shade while framing views of the surrounding landscape.\n\nThe material palette draws from the regional vernacular, with rammed earth walls providing thermal mass and terracotta elements adding visual warmth. Crafted details throughout the house speak to a commitment to quality and an appreciation for the handmade.",
    images: PROJECT_IMAGES[PROJECT_KEYS.NYAYPURI_HOUSE],
  },
  [PROJECT_KEYS.VRINDAVAN]: {
    title: "202308 - VRINDAVAN",
    link: PROJECT_KEYS.VRINDAVAN,
    date: "ONGOING",
    type: "Spiritual Complex",
    area: "22000 SQ M",
    location: "Vrindavan, Uttar Pradesh",
    methodology:
      "Sacred Architecture, Water Management, Heritage Craft Techniques",
    materials: "Sandstone, Marble, Lime Mortar, Wood, Brass, Terracotta",
    description:
      "The Vrindavan project draws inspiration from traditional temple architecture while responding to contemporary spiritual and communal needs. Located in a historically significant pilgrimage town, the complex serves as a place for worship, cultural activities, and community service.\n\nThe design is structured around a series of courtyards that create a gradual transition from public to sacred spaces. Water features prominently throughout the complex, referencing the region's historical water management systems while creating a sense of tranquility and reflection.\n\nConstruction employs heritage craft techniques executed by master artisans, many of whom come from families that have practiced these skills for generations. Intricate stone carving, wooden joinery, and metalwork demonstrate a commitment to preserving traditional knowledge while creating spaces that resonate with contemporary users.",
    images: PROJECT_IMAGES[PROJECT_KEYS.VRINDAVAN],
  },
  [PROJECT_KEYS.PPS_KINDERGARTEN]: {
    title: "202412 - PPS KINDERGARTEN",
    link: PROJECT_KEYS.PPS_KINDERGARTEN,
    date: "ONGOING",
    type: "Educational",
    area: "3200 SQ M",
    location: "Bengaluru, Karnataka",
    methodology: "Child-centered Design, Playful Learning, Safe Materials",
    materials:
      "Compressed Earth Blocks, Bamboo, Recycled Wood, Natural Finishes, Local Stone, Clay Tiles",
    description:
      "The PKS Kindergarten project reimagines early childhood education spaces through a design that stimulates curiosity, supports development, and connects children with nature. Scale, safety, and sensory experience guide all design decisions, creating environments that encourage exploration and wonder.\n\nThe kindergarten is organized as a cluster of small learning pavilions arranged around outdoor play areas and gardens. Each pavilion houses different learning activities, while covered walkways and gathering spaces facilitate movement and social interaction. Low windows, tactile surfaces, and varying spatial qualities respond to children's perceptions and behaviors.\n\nConstruction utilizes non-toxic, natural materials that age gracefully and create healthy indoor environments. The building itself serves as a teaching tool, with visible systems demonstrating principles of sustainability and natural processes to young learners.",
    images: PROJECT_IMAGES[PROJECT_KEYS.PPS_KINDERGARTEN],
  },
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
    link: PROJECT_KEYS.IMARAT_EARTH_CENTRE,
  },
  EC02: {
    src: EC02,
    alt: "Imarat Earth Centre - Interior View",
    link: PROJECT_KEYS.IMARAT_EARTH_CENTRE,
  },

  // Buddhist Monastry
  BTM_SKETCH01: {
    src: BTM_SKETCH01,
    alt: "Buddhist Monastery - Concept Sketch",
    link: PROJECT_KEYS.BUDDHIST_MONASTERY,
  },
  BTM_SKETCH02: {
    src: BTM_SKETCH02,
    alt: "Buddhist Monastery - Elevation Sketch",
    link: PROJECT_KEYS.BUDDHIST_MONASTERY,
  },
  BTM_AXO01: {
    src: BTM_AXO01,
    alt: "Buddhist Monastery - Axonometric View",
    link: PROJECT_KEYS.BUDDHIST_MONASTERY,
  },

  // Studio 1252
  IMO_01: {
    src: IMO_01,
    alt: "Studio 1252 - Exterior View",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_02: {
    src: IMO_02,
    alt: "Studio 1252 - Workspace Interior",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_03: {
    src: IMO_03,
    alt: "Studio 1252 - View 3",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_04: {
    src: IMO_04,
    alt: "Studio 1252 - View 4",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_05: {
    src: IMO_05,
    alt: "Studio 1252 - View 5",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_06: {
    src: IMO_06,
    alt: "Studio 1252 - View 6",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_AXO01: {
    src: IMO_AXO01,
    alt: "Studio 1252 - Axonometric View 1",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_AXO02: {
    src: IMO_AXO02,
    alt: "Studio 1252 - Axonometric View 2",
    link: PROJECT_KEYS.STUDIO_1252,
  },
  IMO_DRAWING01: {
    src: IMO_DRAWING01,
    alt: "Studio 1252 - Technical Drawing",
    link: PROJECT_KEYS.STUDIO_1252,
  },

  // Nyaypuri House
  NYH01: {
    src: NYH01,
    alt: "Nyaypuri House - Exterior View",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
  },
  NYH02: {
    src: NYH02,
    alt: "Nyaypuri House - Courtyard View",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
  },
  NYH_SKETCH01: {
    src: NYH_SKETCH01,
    alt: "Nyaypuri House - Design Sketch",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
  },
  NYH03: {
    src: NYH03,
    alt: "Nyaypuri House - Interior View",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
  },
  NYH04: {
    src: NYH04,
    alt: "Nyaypuri House - Landscape View",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
  },

  // Vrindavan
  VVC01: {
    src: VVC01,
    alt: "Vrindavan Project - Concept View",
    link: PROJECT_KEYS.VRINDAVAN,
  },
  VVC_SKETCH01: {
    src: VVC_SKETCH01,
    alt: "Vrindavan Project - Design Sketch 1",
    link: PROJECT_KEYS.VRINDAVAN,
  },
  VVC_SKETCH02: {
    src: VVC_SKETCH02,
    alt: "Vrindavan Project - Design Sketch 2",
    link: PROJECT_KEYS.VRINDAVAN,
  },
  VVC_SKETCH03: {
    src: VVC_SKETCH03,
    alt: "Vrindavan Project - Design Sketch 3",
    link: PROJECT_KEYS.VRINDAVAN,
  },

  // Kindergarten
  PPS_AXO_01: {
    src: PPS_AXO_01,
    alt: "Kindergarten - Design Render",
    link: PROJECT_KEYS.PPS_KINDERGARTEN,
  },
};

// Also export individual image references for direct access
export {
  // Earth Centre
  EC01,
  EC02,

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
  NYH_SKETCH01,

  // Vrindavan
  VVC01,
  VVC_SKETCH01,
  VVC_SKETCH02,
  VVC_SKETCH03,

  // Kindergarten
  PPS_AXO_01,
};
