import PageShell from "@/components/PageShell";
import { notFound } from "next/navigation";

const DEPARTMENTS = {
  cse: {
    title: "Computer Science & Engineering (CSE)",
    subtitle: "Algorithms, systems, software engineering, and modern computing foundations.",
  },
  aiml: {
    title: "AI & Machine Learning (AI & ML)",
    subtitle: "Deep learning, computer vision, NLP, and data-driven engineering.",
  },
  ce: {
    title: "Civil Engineering", 
    subtitle: "Structures, geo-technical, transportation, and environmental engineering.",
  },
  me: {
    title: "Mechanical Engineering",
    subtitle: "Thermal, manufacturing, design, and applied mechanics.",
  },
  aero: {
    title: "Aeronautical Engineering",
    subtitle: "Aerodynamics, propulsion, aircraft structures, and flight technologies.",
  },
  eee: {
    title: "Electrical & Electronics Engineering (EEE)",
    subtitle: "Power systems, control, machines, and core electronics.",
  },
};

export default function DepartmentPage({ params }) {
  const slug = params?.slug;
  const dept = DEPARTMENTS[slug];
  if (!dept) return notFound();

  return (
    <PageShell
      accentLabel="Department"
      title={dept.title}
      subtitle={dept.subtitle}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Departments", href: "/" },
        { label: dept.title },
      ]}
      quickLinks={[
        { label: "Programs", href: "/academics" },
        { label: "Syllabus", href: "/syllabus" },
        { label: "Research", href: "/research" },
        { label: "Contact", href: "/contact" },
      ]}
      sections={[
        {
          title: "Department Overview",
          cards: [
            {
              title: "About the Department",
              kicker: "Overview",
              text: "Add the official department description, vision/mission, and academic focus areas.",
            },
            {
              title: "HOD Message",
              kicker: "Leadership",
              text: "Add Head of Department details and a short message.",
            },
            {
              title: "Intake & Program",
              kicker: "Academics",
              text: "Add approved intake, program structure, and any specialisations.",
            },
          ],
        },
        {
          title: "Labs & Facilities",
          note: "Add lab names, equipment highlights, and photos.",
          cards: [
            { title: "Core Laboratories", kicker: "Labs", text: "List of major labs and their use-cases." },
            { title: "Projects", kicker: "Projects", text: "Student projects, capstones, and outcomes." },
            { title: "Industry Connect", kicker: "Industry", text: "MoUs, guest lectures, workshops, and internships." },
          ],
        },
        {
          title: "Faculty & Activities",
          cards: [
            { title: "Faculty Directory", kicker: "People", text: "Add faculty list and profiles.", href: "/faculty" },
            { title: "Student Activities", kicker: "Clubs", text: "Department clubs, events, and achievements.", href: "/clubs" },
            { title: "Downloads", kicker: "Docs", text: "Syllabus, lab manuals, and important documents.", href: "/syllabus" },
          ],
        },
      ]}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(DEPARTMENTS).map((slug) => ({ slug }));
}
