import { PROJECT_DATA, PROJECT_KEYS } from "@/app/_utils/constants";
import { notFound } from "next/navigation";

// Define params type for generateStaticParams
type Params = {
  params: {
    slug: string;
  };
};

// This becomes a Server Component by default
export default function ProjectPage({ params }: Params) {
  const { slug } = params;
  const projectData = PROJECT_DATA[slug as PROJECT_KEYS];

  // Handle case when project doesn't exist
  if (!projectData) {
    notFound();
  }

  return (
    <div>
      <h1>{projectData.title}</h1>
    </div>
  );
}

// Replace getStaticPaths with generateStaticParams
export async function generateStaticParams() {
  const projects = Object.values(PROJECT_KEYS);

  return projects.map((slug: string) => ({
    slug,
  }));
}
