import PageShell from "@/components/PageShell";
import { notFound, redirect } from "next/navigation";
import { DEPARTMENTS, SLUG_ALIASES } from "@/lib/departments";

export function generateMetadata({ params }) {
  const rawSlug = params?.slug;
  const slug = SLUG_ALIASES[rawSlug] ?? rawSlug;
  const dept = DEPARTMENTS[slug];
  if (!dept) return {};
  return {
    title: `${dept.title} | NCE Chandi`,
    description: dept.subtitle,
  };
}

export default function DepartmentPage({ params }) {
  const rawSlug = params?.slug;
  const slug = SLUG_ALIASES[rawSlug] ?? rawSlug;

  if (rawSlug !== slug) {
    redirect(`/departments/${slug}`);
  }

  const dept = DEPARTMENTS[slug];
  if (!dept) return notFound();

  const labs = Array.isArray(dept.labs) ? dept.labs : [];
  const labObjects = labs.map((lab) =>
    typeof lab === "string" ? { name: lab, desc: "", equipment: [] } : lab
  );

  const downloads = Array.isArray(dept.downloads) ? dept.downloads : [];

  return (
    <PageShell
      accentLabel="Department"
      title={dept.title}
      subtitle={dept.subtitle}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Departments", href: "/departments" },
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
              text: dept.about ?? "To be updated.",
            },
            {
              title: "Program Snapshot",
              kicker: dept.program?.name ?? "Program",
              points: [
                `Duration: ${dept.program?.duration ?? "To be updated"}`,
                `Intake: ${dept.program?.intake ?? "To be updated"}`,
              ],
            },
            {
              title: "HOD",
              kicker: "Leadership",
              points: [
                `Name: ${dept.hod?.name ?? "To be updated"}`,
                `Email: ${dept.hod?.email ?? "To be updated"}`,
              ],
            },
            {
              title: "Vision",
              kicker: "Vision",
              text: dept.vision ?? "To be updated.",
            },
            {
              title: "Mission",
              kicker: "Mission",
              points: dept.mission ?? ["To be updated."],
            },
          ],
        },
        {
          title: "Outcomes (OBE)",
          cards: [
            { title: "PEO", kicker: "PEO", points: dept.peos ?? ["To be updated."] },
            { title: "PO", kicker: "PO", points: dept.pos ?? ["To be updated."] },
            { title: "PSO", kicker: "PSO", points: dept.psos ?? ["To be updated."] },
          ],
        },
        {
          title: "Key Strengths",
          cards: [
            {
              title: "Key Focus Areas",
              kicker: "Highlights",
              points: dept.highlights ?? [],
            },
            {
              title: "Student Activities",
              kicker: "Students",
              points: dept.activities ?? ["To be updated."],
            },
            {
              title: "Faculty & Leadership",
              kicker: "People",
              text: "Faculty list and profiles.",
              href: "/faculty",
            },
          ],
        },
        {
          title: "Labs & Facilities",
          cards: [
            ...labObjects.map((lab) => ({
              title: lab.name,
              kicker: "Lab",
              text: lab.desc || "To be updated.",
              points: (lab.equipment || []).length ? lab.equipment : undefined,
            })),
            {
              title: "Projects & Innovation",
              kicker: "Projects",
              text: "Mini projects, capstones, competitions, and student achievements.",
              href: "/clubs",
            },
            {
              title: "Industry Connect",
              kicker: "Industry",
              text: "MoUs, guest lectures, workshops, internships, and training programs.",
              href: "/placement",
            },
          ],
        },
        {
          title: "Downloads",
          cards:
            downloads.length > 0
              ? downloads.map((d) => ({
                  title: d.label,
                  kicker: "Download",
                  text: "Open the related page.",
                  href: d.href,
                }))
              : [
                  {
                    title: "Department Documents",
                    kicker: "Docs",
                    text: "To be updated.",
                    href: "/syllabus",
                  },
                ],
        },
        {
          title: "Careers & Opportunities",
          cards: [
            { title: "Career Paths", kicker: "Careers", points: dept.careers ?? [] },
            {
              title: "Training & Placement",
              kicker: "T&P",
              text: "Placement preparation, recruiters, and campus drives.",
              href: "/placement",
            },
            {
              title: "Higher Studies",
              kicker: "Next",
              text: "Guidance for GATE and higher studies.",
              href: "/academics",
            },
          ],
        },
      ]}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(DEPARTMENTS).map((slug) => ({ slug }));
}

