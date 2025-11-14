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
import NYH_SKETCH01 from "../../../public/assets/NYH_SKETCH01.jpeg";

// Vrindavan
import VVC01 from "../../../public/assets/VVC01.jpeg";
import VVC02 from "../../../public/assets/VVC02.jpeg";
import VVC_SKETCH01 from "../../../public/assets/VVC_SKETCH01.png";
import VVC_SKETCH02 from "../../../public/assets/VVC_SKETCH02.jpg";
import VVC_DRAWING01 from "../../../public/assets/VVC_DRAWING01.jpg";
import { ProjectAssets, ProjectData } from "./types";

export enum PROJECT_KEYS {
  IMARAT_EARTH_CENTRE = "200901-imarat-earth-centre-icea",
  DIVYANSHU_BALI_HOUSE = "202502-dbh",
  NYAYPURI_HOUSE = "201801-nyaypuri-house",
  CTRL_Z = "202506-ctrl-z",
  BILLY_GOAT_RESORT = "202506-billy-goat-resort",
  STUDIO_1252 = "201701-studio-1252",
  ARANYA_SANGHARAMA_MONASTERY = "202308-aranya-sangharama-monastery",
  VRINDAVAN = "202308-vrindavan",
  HOUSE_OF_THE_SPEAKER = "202507-house-of-the-speaker",
}

export const PROJECT_IMAGES: Record<PROJECT_KEYS, ProjectAssets> = {
  [PROJECT_KEYS.IMARAT_EARTH_CENTRE]: {
    pictures: [
      {
        id: "iec-pic-0010",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617443/20140823-IMG_9998_u59yav.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0011",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617435/20140823-IMG_9999_inb1c6.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0012",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617432/20140823-IMG_9997_nno88r.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0013",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617432/20140823-IMG_9996_xedrtn.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0014",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617431/20140823-IMG_9995_ymtrmh.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0015",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617431/20140823-IMG_9994_wmgpum.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0016",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617430/20140823-IMG_9993_jwcotq.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0017",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617431/20140823-IMG_9992_wndfsi.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0018",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617431/20140823-IMG_9991_ji4erc.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0019",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617430/20140823-IMG_0015_afp9pu.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0020",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617429/20140823-IMG_0014_pmbude.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0021",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617430/20140823-IMG_0007_xlawxi.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0022",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617429/20140823-IMG_0003_ohdall.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-0023",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1762617429/20140823-IMG_0002_o2jxv7.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078160/IEC_01_e7hzsa.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078067/IEC_02_wmeu6i.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078128/IEC_03_qwhbv7.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078092/IEC_04_sjx3cx.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-005",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078153/IEC_05_vmnyfm.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-006",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078101/IEC_06_z0lgas.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-007",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078148/IEC_07_puemxn.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-008",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078134/IEC_08_zlecuv.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
      {
        id: "iec-pic-009",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750078132/IEC_09_rleiib.jpg",
        alt: "Imarat Earth Centre",
        link: `projects/${PROJECT_KEYS.IMARAT_EARTH_CENTRE}`,
      },
    ],
    sketches: [],
    drawings: [],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750080269/IEC_THUMB01_v8tgfw.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750080272/IEC_THUMB02_uocxfm.png",
    ],
  },
  [PROJECT_KEYS.STUDIO_1252]: {
    pictures: [
      {
        id: "imo-pic-001",
        src: IMO_01,
        alt: "Studio 1252 - Exterior View",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
      {
        id: "imo-pic-002",
        src: IMO_02,
        alt: "Studio 1252 - Workspace Interior",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
      {
        id: "imo-pic-003",
        src: IMO_03,
        alt: "Studio 1252 - View 3",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
      {
        id: "imo-pic-004",
        src: IMO_04,
        alt: "Studio 1252 - View 4",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
      {
        id: "imo-pic-005",
        src: IMO_05,
        alt: "Studio 1252 - View 5",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
      {
        id: "imo-pic-006",
        src: IMO_06,
        alt: "Studio 1252 - View 6",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
    ],
    sketches: [],
    drawings: [
      {
        id: "imo-draw-001",
        src: IMO_AXO02,
        alt: "Studio 1252 - Axonometric View 2",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
      {
        id: "imo-draw-002",
        src: IMO_DRAWING01,
        alt: "Studio 1252 - Technical Drawing",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
      {
        id: "imo-draw-003",
        src: IMO_AXO01,
        alt: "Studio 1252 - Axonometric View 1",
        link: `projects/${PROJECT_KEYS.STUDIO_1252}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1763128175/IMO_THUMB01_cv1kq7.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1763128175/IMO_THUMB01_cv1kq7.png",
    ],
  },
  [PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY]: {
    pictures: [
      {
        id: "btm-pic-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125108/ASM_-_1_pfyntt.jpg",
        alt: "ASM - water painting by architect",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125108/ASM_-_2_owiixn.jpg",
        alt: "Architect interacting with the monks",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125108/ASM_-_3_sap9ty.jpg",
        alt: "Architect interacting with the monks outdoors",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125108/ASM_-_4_rt4ua9.jpg",
        alt: "Intern holding a model",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-005",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125110/ASM_-_5_esllb2.jpg",
        alt: "Architect explaining his design and idea",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-006",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125110/ASM_-_6_j7tnlh.jpg",
        alt: "Architect explaining his vision",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-007",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125110/ASM_-_7_ntsea5.jpg",
        alt: "Crowd gathers around the architect",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-008",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125110/ASM_-_8_daakv4.jpg",
        alt: "Monks discussing the design",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-009",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125112/ASM_-_9_ayqdzu.jpg",
        alt: "Stylized picture of the model",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-010",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125113/ASM_-_10_fdbuij.jpg",
        alt: "Model making",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-pic-011",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763125115/ASM_-_11_wozwir.jpg",
        alt: "People amused by the model at display",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
    ],
    sketches: [
      {
        id: "btm-sketch-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751470402/BTM_SKETCH01_yrzjqc.jpg",
        alt: "Aranya Sangharama Monastery - Concept Sketch",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-sketch-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751470401/BTM_SKETCH02_io6cnk.jpg",
        alt: "Aranya Sangharama Monastery - Elevation Sketch",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-sketch-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751470402/BTM_SKETCH03_wabrs6.jpg",
        alt: "Aranya Sangharama Monastery - Sketch 3",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
    ],
    drawings: [
      {
        id: "btm-draw-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751461754/BTM_DRAWING01_txncho.jpg",
        alt: "Aranya Sangharama Monastery - Drawing 01",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-draw-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751461752/BTM_DRAWING02_pyqrvf.jpg",
        alt: "Aranya Sangharama Monastery - Drawing 02",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-draw-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751461753/BTM_DRAWING03_o0ymmm.jpg",
        alt: "Aranya Sangharama Monastery - Drawing 03",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
      {
        id: "btm-draw-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751461755/BTM_DRAWING04_swk3dx.jpg",
        alt: "Aranya Sangharama Monastery - Drawing 04",
        link: `projects/${PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1751470402/BTM_THUMB01_fztjxz.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1751470402/BTM_THUMB02_q7bdas.png",
    ],
  },
  [PROJECT_KEYS.NYAYPURI_HOUSE]: {
    pictures: [
      {
        id: "nyh-pic-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1761396543/NYH01_djrbgh.jpg",
        alt: "Nyaypuri House - Interior View",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-pic-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1761396565/NYH02_ox7pxo.jpg",
        alt: "Nyaypuri House - Courtyard View",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-pic-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1761396565/NYH03_cy2jvh.jpg",
        alt: "Nyaypuri House - Interior View 2",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-pic-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1761397002/NYH04_eirdpd.jpg",
        alt: "Nyaypuri House - Landscape View",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-pic-006",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1761396543/NYH06_kyr63f.jpg",
        alt: "Nyaypuri House - Interior View 3",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-pic-007",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1761396543/NYH07_z1ibgk.jpg",
        alt: "Nyaypuri House - Interior View 4",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-pic-008",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1761396543/NYH08_bzi16n.jpg",
        alt: "Nyaypuri House - Interior View 5",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
    ],
    sketches: [
      {
        id: "nyh-sketch-001",
        src: NYH_SKETCH01,
        alt: "Nyaypuri House - Design Sketch",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
    ],
    drawings: [
      {
        id: "nyh-draw-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1752166777/NYH_DRAWING01_obc5i2.jpg",
        alt: "Nyaypuri House - North Elevation",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-draw-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1752166777/NYH_DRAWING02_rzxpss.jpg",
        alt: "Nyaypuri House - East Elevation",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-draw-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1752166777/NYH_DRAWING03_zjv4ah.jpg",
        alt: "Nyaypuri House - West Elevation",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
      {
        id: "nyh-draw-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1752166778/NYH_DRAWING04_mfiv32.jpg",
        alt: "Nyaypuri House - South Elevation",
        link: `projects/${PROJECT_KEYS.NYAYPURI_HOUSE}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1763128239/NYH_THUMB01_t6uylw.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1763128238/NYH_THUMB02_k7ezqz.png",
    ],
  },
  [PROJECT_KEYS.VRINDAVAN]: {
    pictures: [
      {
        id: "vvc-pic-001",
        src: VVC01,
        alt: "Vrindavan Project - Concept View",
        link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
      },
      {
        id: "vvc-pic-002",
        src: VVC02,
        alt: "Vrindavan Project - Draft Board",
        link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
      },
    ],
    sketches: [
      {
        id: "vvc-sketch-001",
        src: VVC_SKETCH01,
        alt: "Vrindavan Project - Design Sketch 1",
        link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
      },
      {
        id: "vvc-sketch-002",
        src: VVC_SKETCH02,
        alt: "Vrindavan Project - Design Sketch 2",
        link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
      },
    ],
    drawings: [
      {
        id: "vvc-draw-001",
        src: VVC_DRAWING01,
        alt: "Vrindavan Project - Design Sketch 3",
        link: `projects/${PROJECT_KEYS.VRINDAVAN}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1763128289/VVC_THUMB01_e2s5hk.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1763128289/VVC_THUMB01_e2s5hk.png",
    ],
  },
  [PROJECT_KEYS.CTRL_Z]: {
    pictures: [
      {
        id: "ctrl-pic-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855394/CTRL_Z01_nd5evq.jpg",
        alt: "CTRL Z - Store Front Facade",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855395/CTRL_Z02_yrchcq.jpg",
        alt: "CTRL Z - Store Interior, Motion Blur Shot",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855395/CTRL_Z03_bk06w2.jpg",
        alt: "CTRL Z - Store Interior ground floor",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855395/CTRL_Z04_ivgj9l.jpg",
        alt: "CTRL Z - Waiting Area",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-005",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855396/CTRL_Z05_a2xwvb.jpg",
        alt: "CTRL Z - person exiting the store",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-006",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855396/CTRL_Z07_hcdsre.jpg",
        alt: "CTRL Z - First Floor View",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-007",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855395/CTRL_Z08_jqj7nl.jpg",
        alt: "CTRL Z - Phones on display for customers",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-008",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855396/CTRL_Z09_o6gbun.jpg",
        alt: "CTRL Z - People interacting in the store",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-009",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855395/CTRL_Z10_zt1i5x.jpg",
        alt: "CTRL Z - Store Workspace",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-pic-010",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1753855395/CTRL_Z11_o386ra.jpg",
        alt: "CTRL Z - Interior View at night",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },

      // 3d renders
      {
        id: "ctrl-draw-005",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580649/CTRL_Z_01_esj0nt.jpg",
        alt: "CTRL Z - Store Front 3D Render",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-draw-006",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580649/CTRL_Z_02_pu0ag3.jpg",
        alt: "CTRL Z - Store Ground Floor 3D Render",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-draw-007",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580650/CTRL_Z_03_mtf9j0.jpg",
        alt: "CTRL Z - Store Upper Floor 3D Render",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-draw-008",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580650/CTRL_Z_04_uynzvf.jpg",
        alt: "CTRL Z - Store Entrance 3D Render",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-draw-009",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580650/CTRL_Z_05_rsuojp.jpg",
        alt: "CTRL Z - Store Front Facade 3D Render",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
    ],
    sketches: [],
    drawings: [
      {
        id: "ctrl-draw-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580798/CTRL_Z_DRG_01_ks8avq.jpg",
        alt: "",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-draw-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580799/CTRL_Z_DRG_02_muiqap.jpg",
        alt: "",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-draw-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580800/CTRL_Z_DRG_03_mcm6ul.jpg",
        alt: "",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
      {
        id: "ctrl-draw-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750580801/CTRL_Z_DRG_04_vlyfxq.jpg",
        alt: "",
        link: `projects/${PROJECT_KEYS.CTRL_Z}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750255270/CTRL_Z_THUMB01_ruyvnw.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750255271/CTRL_Z_THUMB02_pacoum.png",
    ],
  },
  [PROJECT_KEYS.BILLY_GOAT_RESORT]: {
    pictures: [
      {
        id: "bgr-pic-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750490489/BGR_01_nthjok.jpg",
        alt: "Billy Goat Resort - Elevation Model",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750490489/BGR_02_agkchc.jpg",
        alt: "Billy Goat Resort - Sketch",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750490490/BGR_03_qlwwgm.jpg",
        alt: "The road leading up to the site",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750490490/BGR_04_ejgcvf.jpg",
        alt: "Billy Goat Resort - Site View",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-005",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750490490/BGR_05_ykm7om.jpg",
        alt: "Billy Goat Resort - Incline View",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-006",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751530330/BGR_06_rfos7s.jpg",
        alt: "Billy Goat Resort - Model 01",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-007",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751530330/BGR_07_gu7md9.jpg",
        alt: "Billy Goat Resort - Model 02",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-008",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751530330/BGR_08_mdnrim.jpg",
        alt: "Billy Goat Resort - Model 03",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-009",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751530331/BGR_09_akq14j.jpg",
        alt: "Billy Goat Resort - Model 04",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-pic-010",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751530331/BGR_10_bwkyjn.jpg",
        alt: "Billy Goat Resort - Model 05",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
    ],
    sketches: [
      {
        id: "bgr-sketch-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750501072/BGR_SKETCH01_v9omez.jpg",
        alt: "Billy Goat Resort - Bakehouse Sketch",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-sketch-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750501073/BGR_SKETCH02_euy0tw.jpg",
        alt: "Billy Goat Resort - Layout Sketch",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-sketch-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750501073/BGR_SKETCH03_hxkbo7.jpg",
        alt: "Billy Goat Resort - Concept Sketch",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
      {
        id: "bgr-sketch-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750501073/BGR_SKETCH03_hxkbo7.jpg",
        alt: "Billy Goat Resort - Public House Sketch",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
    ],
    drawings: [
      {
        id: "bgr-draw-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750500796/BGR_DRG01_epd7ed.jpg",
        alt: "Billy Goat Resort - Site Plan",
        link: `projects/${PROJECT_KEYS.BILLY_GOAT_RESORT}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750255362/BGR_THUMB01_b2r2i6.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750255363/BGR_THUMB02_if3t8w.png",
    ],
  },
  [PROJECT_KEYS.DIVYANSHU_BALI_HOUSE]: {
    pictures: [
      {
        id: "dbh-pic-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751628122/DBH_05_hrpqpd.jpg",
        alt: "DBH - Complete Model Exterior",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750577985/DBH_01_k2sq2x.jpg",
        alt: "DBH - Model Photo 01",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750577985/DBH_02_g2qmry.jpg",
        alt: "DBH - Model Photo 02",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751628122/DBH_03_nttnxb.jpg",
        alt: "DBH - Inner staircase design model",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-005",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751628122/DBH_04_gfppch.jpg",
        alt: "DBH - Model Photo 03",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-006",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115142/DBH_-_1_klxboo.jpg",
        alt: "DBH - Light Slit",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-007",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115142/DBH_-_2_gglxpv.jpg",
        alt: "DBH - Wiring Conduits",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-008",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115142/DBH_-_3_wp3h6t.jpg",
        alt: "DBH - Happy Client",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-009",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115144/DBH_-_4_rbwcpv.jpg",
        alt: "DBH - Architect and Carpenter",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-010",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115144/DBH_-_5_utzohq.jpg",
        alt: "DBH - Flitch Beams, top down view",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-011",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115143/DBH_-_6_drsd6p.jpg",
        alt: "DBH - Flitch Beams, side view",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-012",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115145/DBH_-_7_aa4fqd.jpg",
        alt: "DBH - Flitch Beams, cross section",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-013",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115144/DBH_-_8_aoaow0.jpg",
        alt: "DBH - Pine Wood Columns",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-014",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115143/DBH_-_9_w30il0.jpg",
        alt: "DBH - Pine wall bottom up view",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-pic-015",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1763115143/DBH_-_10_gwqqcv.jpg",
        alt: "DBH - Pine wall evening light",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
    ],
    sketches: [
      {
        id: "dbh-sketch-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751627716/DBH_SKETCH01_plmrh0.jpg",
        alt: "DBH - Front Facade Ideation Sketch",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-sketch-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751627716/DBH_SKETCH02_dqxlpd.jpg",
        alt: "DBH - Model making work in progress picture",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-sketch-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751627716/DBH_SKETCH03_ddbjd9.jpg",
        alt: "DBH - Le Corbusier inspiration image",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-sketch-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751627716/DBH_SKETCH04_i0tieu.jpg",
        alt: "DBH - Hempcrete material for front facade",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
    ],
    drawings: [
      {
        id: "dbh-draw-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1752166455/DBH_DRAWING03_chbgxl.jpg",
        alt: "DBH - Front Elevation",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-draw-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1752166456/DBH_DRAWING04_jkex5y.jpg",
        alt: "DBH - Side Elevation",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-draw-003",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1752166456/DBH_DRAWING05_hibaer.jpg",
        alt: "DBH - Side Elevation 02",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-draw-004",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750577752/DBH_SKETCH01_ru0oxr.jpg",
        alt: "DBH - Ground Floor Drawing",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
      {
        id: "dbh-draw-005",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1750577752/DBH_SKETCH02_lco5qo.jpg",
        alt: "DBH - First Floor Drawing",
        link: `projects/${PROJECT_KEYS.DIVYANSHU_BALI_HOUSE}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750255104/DBH_THUMB01_moqr4j.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1750255104/DBH_THUMB02_nrhuqd.png",
    ],
  },
  [PROJECT_KEYS.HOUSE_OF_THE_SPEAKER]: {
    pictures: [],
    sketches: [],
    drawings: [
      {
        id: "bjo-draw-001",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751481485/BJO_DRAWING01_rvzdrz.jpg",
        alt: "",
        link: `projects/${PROJECT_KEYS.HOUSE_OF_THE_SPEAKER}`,
      },
      {
        id: "bjo-draw-002",
        src: "https://res.cloudinary.com/drcns5wjs/image/upload/v1751481485/BJO_DRAWING02_tkbrh0.jpg",
        alt: "",
        link: `projects/${PROJECT_KEYS.HOUSE_OF_THE_SPEAKER}`,
      },
    ],
    thumbnails: [
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1751545125/BJO_THUMBNAIL01_ndp0jc.png",
      "https://res.cloudinary.com/drcns5wjs/image/upload/v1751545126/BJO_THUMBNAIL02_vfukgt.png",
    ],
  },
};

export const PROJECT_DATA: Record<PROJECT_KEYS, ProjectData> = {
  [PROJECT_KEYS.IMARAT_EARTH_CENTRE]: {
    title: "IMARAT EARTH CENTRE",
    link: PROJECT_KEYS.IMARAT_EARTH_CENTRE,
    date: "2009 - ONGOING",
    type: "Institution",
    area: "4850 sq yd",
    location: "Kulvaheri, Haryana",
    methodology: "Artisan skill training, Earthen Materials, Solar Passive",
    materials: "Mud Bricks, Bamboo, Sal, Sheesham, Thatch, Chachra",
    description: `
      The Earth Centre began in 2009 with a simple dwelling. The challenge was to use mud architecture in the challenging climate of the gangetic plains, to build economically and to demonstrate a vocabulary of natural materials. The result was a 2 bed room dwelling, where the lower mezzanine room is the excavated earth used to manufacture mud bricks. For the project, natural systems such as filler slabs, Wood and Bamboo roofs, stack ventilation, Earth berming, Thatch roofing and in the further stages, lime and oxide flooring, Chachra and bamboo roofing and ferrocement roofing as well. The dwelling was built economically at a total cost of just 26,00,000 INR in 2014. Since then, the site has expanded to include 6 more smaller dwellings to cater to the new institution of 'Imarat Centre for Earth Architecture'.
    `,
    images: PROJECT_IMAGES[PROJECT_KEYS.IMARAT_EARTH_CENTRE],
    ogDesc:
      "A pioneering mud-architecture dwelling that evolved into the Imarat Centre, showcasing natural, economical building techniques.",
  },
  [PROJECT_KEYS.STUDIO_1252]: {
    title: "STUDIO 1252",
    link: PROJECT_KEYS.STUDIO_1252,
    date: "2018",
    type: "Studio/Multi-use",
    area: "150 sq yd",
    location: "Chandigarh, India",
    methodology: "Retrofit, Renovation, Multi-use Programs",
    materials: "Bricks, Concrete, Deodar, Pine",
    description:
      "The greatest act of building sustainably means not building at all. In recent years, architects have forayed into the potential of an architecture of retrofit. Studio 1252 was Imarat’s response to this challenge, by attempting to convert an HIG government housing apartment into a mixed use studio cum residence. The studio is now the headquarters for Imarat Architects at Chandigarh. What was before a dark dingy space was converted into an open setting of various walls, some which allow views, others physical access. By inserting slabs at the 7 foot level circulation spaces were given greater definition, making hallway spaces seem higher. Lastly, the finishes of mud plasters with rice husk fibres, exposed bricks and wooden fitting demonstrate the timeless and resilient qualities of natural materials, creating a material vocabulary for clients of the firm.",
    images: PROJECT_IMAGES[PROJECT_KEYS.STUDIO_1252],
    ogDesc:
      "A sustainable retrofit turning a dark HIG apartment into Imarat’s Chandigarh studio, using natural materials and thoughtful spatial edits.",
  },
  [PROJECT_KEYS.NYAYPURI_HOUSE]: {
    title: "NYAYPURI HOUSE",
    link: PROJECT_KEYS.NYAYPURI_HOUSE,
    date: "2018 - Ongoing",
    type: "Residence",
    area: "1000 sq yd",
    location: "Nyaypuri, Karnal",
    methodology: "Contemporising Mud, Hybrid Construction, In-house Furniture",
    materials: "Mud Bricks, Bricks, Concrete, Lime",
    description: `The Nyayapuri House was started in 2014 with the vision of making the mud house typology a possibility in the urban regions of the city. Its viability in rural settings in terms of economy and sustainability as well as its resilience to the climate were well demonstrated at the Earth Centre in Kuva Heri. But the urban dweller has needs for lower maintenance, durability and well insulated spaces in a habitat. So this house combines a structure with mud walls and concrete columns as well as brick pillars to create a hybrid system. This minimises carbon footprint and more importantly brings in mud into the foray of standard building materials.
    \n
    In a leap of experimentation, the making of this house brought in a team of talented woodworkers, producing furniture and furnishings in house. The experimentations were carried on with several other artisans such as the stone mason for the use of terrazzo and the use of a ferrocement slab over timber joists for spanning. The most liberating visual aspect, though, is the 6 foot cantilevers in heavy sloped concrete slabs supported by mud walls, breaking  the assumptions about mud as a kucca construction.`,
    images: PROJECT_IMAGES[PROJECT_KEYS.NYAYPURI_HOUSE],
    ogDesc:
      "An urban mud-house hybrid using mud walls, concrete, and brick to create a sustainable, low-carbon home with bold structural experiments.",
  },
  [PROJECT_KEYS.VRINDAVAN]: {
    title: "VRINDAVAN",
    link: PROJECT_KEYS.VRINDAVAN,
    date: "2023 - ONGOING",
    type: "Institution",
    area: "17 Acres",
    location: "Karnal, Haryana",
    methodology:
      "Zero Cement Construction, Lime and Brick, Bamboo Spans, Landscape Infills",
    materials: "Bricks, Lime, Jaggery, Red Sandstone, Kota Stone",
    description:
      "Vrindavan is invisioned as ‘an Indian village’. The visual logic of villages, clustered, huddle around open spaces that account for activities. The challenge of this brief is to accomplish the puritan vision of building naturally- to the level that no cement is brought to the site. The program as well as the construction aim to respond to this. The masterplan is organised to create an atmosphere of a rural setting with densely clustered masses, spaced around open areas. The idea of meandering through and that of the promenade are the two movement patterns which shape its structure as well. This vision has allowed the client to build slowly and due to this slow pace, lime has been favoured with local additives such as jaggery and jackfruit to be used as mortar, replacing cement while kota stone in combination with lime becomes the damp proof course.",
    images: PROJECT_IMAGES[PROJECT_KEYS.VRINDAVAN],
    ogDesc:
      "A cement-free masterplan for Vrindavan shaped as an Indian village, using clustered forms, lime mortar, and meandering rural pathways.",
  },
  [PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY]: {
    title: "ARANYA SANGHARAMA MONASTERY",
    link: PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY,
    date: "2023, unbuilt",
    type: "Insitution",
    area: "1500 sq yd",
    location: "Yamunanagar, Haryana",
    methodology:
      "Monolithic Domed Construction, Mud walls, Landscape rejuvenation",
    materials: "Mud Bricks, Timber, RCC",
    description:
      "Imarat was chosen for designing the first centre for Thai Forest Buddhism, with the venerable Ajahn Jivako as the representative of the sect. The first vision is sketched to the ideals of monastic living, the path to asceticism, and the elements of the architecture that establish its identity. This vision is worked towards refinement into the section and the general plan and onwards until the detailed wall section itself is resolved. The elements of the monastic life, its rituals guide aspects of the design, each activity is granted circular walls while the service spaces are rectilinear. A simpler design by a different agency was ultimately procured for a temporary shelter for the monks.",
    images: PROJECT_IMAGES[PROJECT_KEYS.ARANYA_SANGHARAMA_MONASTERY],
    ogDesc:
      "A design vision for a Thai Forest Buddhist centre shaped by monastic rituals, circular forms, and the ideals of ascetic living.",
  },
  [PROJECT_KEYS.CTRL_Z]: {
    title: "CTRL Z",
    link: PROJECT_KEYS.CTRL_Z,
    date: "2025, Ongoing",
    type: "Retail Store",
    area: "720 sq ft.",
    location: "Gurugram, Haryana",
    methodology: "",
    materials: "Mild Steel, Pine, Kota Stone, Lime, Polycarbonate",
    description: `
      Control Z set out to rethink how we consume the defining artefact of the 21st century: the phone. In a world where phone models go out of style each year, the cost isn’t just financial—it’s environmental. The brand’s mission is to counteract this by refurbishing older phones, extending their life cycles, and making premium devices accessible at lower price points.
      \n \n
      The brief was to translate that mission into architecture—for their first retail store.
      The design needed to echo their ethos: raw, transparent, and in motion.
      \n \n
      Rather than hide the mechanics behind sleek surfaces, the store reveals its process. Tools from their refurbishment labs line the walls. The floor is laid in unpolished Kota stone; the walls finished in lime—materials chosen not just for their honesty, but for their low embodied energy. The goal? To bring the energy of the workshop to the street. To let people see how things are made, fixed, and reimagined.
      \n \n
      It’s a deliberate break from retail minimalism. Instead of pristine displays and polish, the store feels alive—mid-assembly, mid-idea. Like the phones it houses, it’s a space of revival, not replacement.
    `,
    images: PROJECT_IMAGES[PROJECT_KEYS.CTRL_Z],
    ogDesc:
      "A raw, workshop-inspired store that reflects Control Z’s mission of refurbishing phones and redefining sustainable tech retail.",
  },
  [PROJECT_KEYS.BILLY_GOAT_RESORT]: {
    title: "BILLY GOAT RESORT",
    link: PROJECT_KEYS.BILLY_GOAT_RESORT,
    date: "2024",
    type: "Resort",
    area: "52,000 sq ft",
    location: "Barog, HP",
    methodology: "Local Supply Chains, Community upliftment,  Historiography",
    materials: "Brick, Lime, Mud Plaster, Pine wood, Steel, Limestone",
    description: `
      The site is surrounded by a pine forest in the region of Barog. The local folklore of a British appointed charge for digging the railway tunnel, Colonel Barog is what gives the town its name. The tunnel and the railway station are intact as relics of that time and offer themselves as clues for how to build sensitively in such contexts. The new age ideas of treading lightly on the earth were considered as postulates for building here too, but with the average slope of 40 degrees, to perch lightly would have resulted in shadowed underbellies; signature of contemporary constructions. Cut and filling is used in the lightest means instead, using split levels and yet generating small spans. The 1.5 acre resort offers a bakehouse, tea house and bath house, in an upward trail, for the wanderer that stumbles upon it. 9 sets of rooms adjoin these facilities, scattered about the site’s landscape. The site is steep and the project celebrates the physical challenge of this condition. To hike up the mountain like a Billy Goat- is where the name draws from.
      \n
      The conditions of the site shape the imaginations of this project. Nostalgic to the typical movement patterns of cities in the Himalayan region, the project seeks to capture the spirit of a Himalayan settlement. The generosity of Chaugans that restore leisures of time, The clustered hawkers lavishing food and craft and, the snug village houses with niches and small wooden windows; all cultivate the atmospheres of Himalayan Habitats.They work with the vegetation. Facts of simple pleasure which are left behind in modern luxury resorts. A green metal bench next to a cliff, well placed, with an absence of whirring sounds of generators can work wonders. The idea is simple; to preserve what is good and to make what is missing.
    `,
    images: PROJECT_IMAGES[PROJECT_KEYS.BILLY_GOAT_RESORT],
    ogDesc:
      "A Barog retreat rooted in Himalayan settlement patterns, lightly engaging the steep site with split levels and intimate, scattered spaces.",
  },
  [PROJECT_KEYS.DIVYANSHU_BALI_HOUSE]: {
    title: "DBH",
    link: PROJECT_KEYS.DIVYANSHU_BALI_HOUSE,
    date: "2025",
    type: "Residence",
    area: "1200 sq ft.",
    location: "",
    methodology:
      "Subverting Interiority, Surrealism, Double Heights, Adaptability and Multiple Functionality.",
    materials: "Brick, Mild Steel, Glass Blocks",
    description: `
      The House of Glass is an impractical dream in North Indian setting. But this project tries to make it true. To bring in its living room, a tree; something living. To make small spaces big and with a unity of small gestures, beckon a sense of surrealism. DBH was brought on when 6 columns and their foundations had already been put up, so the idea was simply to inquire about what can supplement, compliment and contrast; the end result is an inner dialogue of light filigree steel spans and typical brick and concrete masonry; the classical binary of the stereotomic and tectonic. The small plot is sliced into two symmetrical halves, and through the slice goes the promenade. Walking on it, encounters on the left and right fluctuate; the outer court with a patch of green, the inner double volume, a wall of glass on the left and the comfort couch on the right, a lamp on the left a kitchen counter reaching out on the right, a staircase to the left and further ahead a wardrobe on the right, then a bed and then a washroom and exiting it all, a backyard on top of which hangs attached to a gardened terrace, planted flowers drooping down.
      \n\n
      The client, an eccentric engineer, is also a skateboarder. The house is such a boyhood club. The house grows into a home and with time the spaces are meant to adapt. The floor above which contains a small room connected to the terrace garden also bears a study hanging out of it, ‘the cockpit’. Overlooking the larger double volume, it brings a sense of exteriority to the living space. And with the lamp post and the tree and the glass wall, it cultivates a magical surrealism. The practical intentions are to imagine  beautiful conditions of living in a small plot of 45’ by 20’. But the impractical dream is what makes this project one of the favourites on our drafting boards.
    `,
    images: PROJECT_IMAGES[PROJECT_KEYS.DIVYANSHU_BALI_HOUSE],
    ogDesc:
      "A surreal glass-walled home in North India, blending light steel, brick, and nature to turn an impractical dream into living art.",
  },
  [PROJECT_KEYS.HOUSE_OF_THE_SPEAKER]: {
    title: "HOUSE OF THE SPEAKER",
    link: PROJECT_KEYS.HOUSE_OF_THE_SPEAKER,
    date: "2025",
    type: "Office",
    area: "4000 sq ft.",
    location: "",
    methodology:
      "Column free construction, Debris reuse, Public office prototype, Microclimate rejuvenation, Local supply chains",
    materials: "Brick, Mud, Steel, Red Sandstone, White Marble.",
    description: `
      The idea was to create a novel prototype of what a public office could be. The freshly appointed speaker for Haryana, Mr. Harvinder Kalyan had a vision to change the way we envisioned government offices in India. The examples that generally span this architectural typology contain run down plasticised materials, dingy under-lighted spaces, and unregulated public traffic. This had to change, giving way to representation of local identity. Frugal sensibilities, natural materials and open, green environs. To set a bar, the functions were planned around a courtyard. The main circulation is through a three tier corridor, regulating pedestrian traffic. How people perceive their leaders changes their own attitudes towards materials and building traditions. Natural materials and vernacular techniques are currently being abandoned in villages for faster constructions. But this can change and therein lies the project’s biggest hope. 
      \n\n
      The blocks are planned without a single concrete column and with pitched roofs. The volumes face open courts to allow for flexibility in accommodating wider populations. The existing trees on site were not displaced in the process of this construction. Lying on the north south axis are wall articulations which offer greater support than singular straight walls and further chop down the harsh Indian sun. This reduces glare inside while filling the spaces with ample light. Despite the functional and climatic concerns, the project inquires about local living patterns with manjis in verandahs and veras in the shade of lofty trees, where village gatherings typically happened to resolve matters. Beyond the local mud plaster techniques which derive from Indian building traditions it is these mannerisms which cultivate the architecture of this project.
    `,
    images: PROJECT_IMAGES[PROJECT_KEYS.HOUSE_OF_THE_SPEAKER],
    ogDesc:
      "A courtyard-centred public office for Haryana, using natural materials and vernacular forms to redefine government architecture.",
  },
};

// Also export individual image references for direct access
export {
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
  NYH_SKETCH01,

  // Vrindavan
  VVC01,
  VVC02,
  VVC_SKETCH01,
  VVC_SKETCH02,
  VVC_DRAWING01,
};
