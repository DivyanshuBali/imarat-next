import type { Metadata } from "next";
import styles from "./page.module.css";
import { getCldOgImageUrl } from "next-cloudinary";

const ogImage = getCldOgImageUrl({
  src: "BTM_SKETCH01_yrzjqc",
  width: 1200,
  height: 627,
  format: "jpg",
});

export const metadata: Metadata = {
  title: "Works",
  description:
    "A record of completed, ongoing, and under-design projects by Imarat Architects spanning three decades.",
  alternates: {
    canonical: "/about/works",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about/works",
    title: "Works | Imarat Architects",
    description:
      "A record of completed, ongoing, and under-design projects by Imarat Architects spanning three decades.",
    siteName: "Imarat Architects",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 627,
        alt: "Imarat Architects — Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Works | Imarat Architects",
    description:
      "A record of completed, ongoing, and under-design projects by Imarat Architects spanning three decades.",
    images: [ogImage],
  },
};

type WorksGroup = {
  heading: string;
  projects: string[];
};

const RECENTLY_COMPLETED: string[] = [
  "BJP OFFICE, KUTIAL, KARNAL",
  "MR. PILANI HOUSE, SECTOR 32, KARNAL",
  "SITE OFFICE, VRINDA FARMS",
  "ECO VILLAGE, KARNAL",
  "HOUSE OF SHRI SHRI RAVI SHANKAR, MALL ROAD, KARNAL",
  "HOUSE NO. 69 NYAYPURI RESIDENCE, KARNAL",
  "MUD COTTAGES, GULMOHAR ECO-VILLAGE, NAVEL",
  "CZB STORE, GURGAON",
  "SITE OFFICE, ICEA",
];

const ONGOING: string[] = [
  "RSH, CHANDIGARH",
  "DBH, MOHALI",
  "BGR, BAROG",
  "ASO, CHANDIGARH",
];

const UNDER_DESIGN: string[] = [
  "AYURVEDIC CENTRE",
  "DOG SHELTER, ROPAR",
  "FARMHOUSE, ROPAR",
  "VRINDAVAN RESORTS",
];

const BUILT_90S: string[] = [
  "MUD COTTAGE",
  "OFFICE",
  "MR. RAJESH",
  "MR S.L. GARG",
  "MR. RIPPIN GOEL (23-NYAYPURI)",
  "MR. SUBHLAKSH (NURSI VILLAGE)",
  "DR. CHOPA (853/9)",
  "MR. HARJINDER SINGH (DAYAL SINGH COLONY)",
  "MRS. KAMLESH (706/134)",
  "MR. SANGWAN",
  "MR. SACHDEVA (22/13)",
  "MR. PARVEEN BANSAL",
  "MR. PARGAT (462/5)",
  "PLOT NO - 1065, SECTOR-6",
  "MR. YUGAL GUPTA (644/7)",
  "MR. RAJAN GUPTA",
  "MR. BHARAT (1014/13)",
  "MR. SANJIV GOYAL (631/8)",
  "MR. GROVER (MODEL TOWN)",
  "MR. M.K. GOEL",
  "MR. GOURAV JAIN (1070/6)",
  "MR. SUSHIL (1113/9)",
  "MR. SATISH GOYAL (1295/6)",
  "JANNAT",
  "MR. NARESH (2186/13)",
  "MR. RALPAL (1686/7)",
  "AMRITDHARA IVE CENTRE",
  "MR. SHAM SUNDE (414/7)",
  "MR. SURENDER SINGH",
  "MRS. ANJU DHAWAN (PLOT NO - 269 R)",
  "MRS. AARTI GUPTA",
  "MR. MANGAL MANSION (640/8)",
  "MR. JATINDER GOYAL (180/6)",
  "MR. SADURAM (1107/13)",
  "GOYAL BHAWAN",
  "MR. GOYAL (PLOT NO - 176, SECTOR-14)",
  "DR. TANEJA",
  "PLOT NO - 2242, SECTOR-7",
  "PLOT NO - 1086, SECTOR-13",
  "MR. GOPAL (PLOT NO - 22, SECTOR-7)",
  "PLOT NO - 1026, SECTOR-9",
  "PLOT NO - 989, SECTOR-9",
  "MR. RAMAN GUPTA (PLOT NO - 244, SECTOR-6)",
  "PLOT NO - 133, SECTOR-14",
  "MR. N.K. BHATI (PLOT NO - 1561, SECTOR-9)",
  "MR. MUKTYAR SINGH (PLOT NO - 1682, SECTOR-9)",
  "MR. CHEEMA (PLOT NO - 49, MODEL TOWN KARNAL)",
  "MR. RANA (2169, SECTOR-7)",
  "MR. GUPTA PLOT NO - 129",
  "MR. MANJEET SINGH (PLOT NO - 2173, SECTOR-7)",
  "MRS. RANJU PLOT NO - 829, SECTOR-13",
  "MR. MUNEESH (PLOT NO - 658, SECTOR-7)",
  "MR. VICKY BANSAL (78E, SECTOR-9)",
  "MR. CHASHANPAL SINGH",
  "MR. S.D. CHOUDARY (PLOT NO - 1740, SECTOR-1)",
  "MR. RAJAT DAYAL SINGH COLONY",
  "CANTEEN (KHALSA COLLAGE)",
  "MR. SINGLA",
  "MR. J.P. SINGH",
  "PLOT NO - 244, SECTOR-6",
  "MR. AJAY",
  "MR. DALJIT",
  "MR. RAJAN",
  "MR. GURBACHEN SINGH",
  "MRS. MADHU",
  "PLOT NO - 765, SECTOR-8",
  "MR. RISHIPAL BANSAL PLOT NO - 649",
  "K.B.S.",
  "SANDEEP NARSI VILLAGE",
  "MR. KARMBIR",
  "PLOT NO - 999, PANIPAT",
  "PLOT NO - 1615, SECTOR-9",
  "DR. JYOTI (SRAFA BAZAR)",
  "MR. MIDHA (120 - L MODEL TOWN, KARNAL)",
  "MR. DINESH GUPTA",
  "GURUDWARA, MODEL TOWN",
  "MR. BALDEV",
  "MR. KOHLI (PLOT NO - 1685)",
  "PLOT NO - 1124, SECTOR-9",
  "SUS JALANDER",
  "ASHOK BAMBA",
  "AARTI JAIN",
  "MR. MIGLANI, KAITHAL",
  "MR. M.P. SINGH",
  "KHALSA COLLEGE",
  "MR. DEEPAK WADHERA",
  "MR. MANJEET SINGH (PLOT NO - 2173, SECTOR -13)",
  "PLOT NO - 1680, SECTOR-9",
  "CHETAK COOKWARE",
  "CENTURY PLY",
  "PLOT NO - 633, PANIPAT",
  "MRS. TEJINDRA KAUR",
  "MR. DHARMRAJ ROHTAK",
  "MR. GOPAL PLOT NO - 22, SECTOR-1",
  "RICHA SOBTI",
  "MR. VIKAS DAWER",
  "RICHA SOBTI",
  "VIJH N",
];

const TOP_GROUPS: WorksGroup[] = [
  { heading: "RECENTLY COMPLETED PROJECTS", projects: RECENTLY_COMPLETED },
  { heading: "ONGOING PROJECTS", projects: ONGOING },
];

export default function WorksPage() {
  return (
    <article className={styles.worksContent}>
      <div className={styles.topRow}>
        {TOP_GROUPS.map((group) => (
          <section key={group.heading} className={styles.worksGroup}>
            <h2 className={styles.groupHeading}>{group.heading}</h2>
            <ol className={styles.projectList}>
              {group.projects.map((project, i) => (
                <li key={i}>{project}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <section className={styles.worksGroup}>
        <h2 className={styles.groupHeading}>UNDER DESIGN PROJECTS</h2>
        <ol className={styles.projectList}>
          {UNDER_DESIGN.map((project, i) => (
            <li key={i}>{project}</li>
          ))}
        </ol>
      </section>

      <section className={styles.worksGroup}>
        <h2 className={styles.groupHeading}>BUILT PROJECTS IN THE 90s</h2>
        <ol className={`${styles.projectList} ${styles.twoColList}`}>
          {BUILT_90S.map((project, i) => (
            <li key={i}>{project}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}
