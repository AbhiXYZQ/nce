import PageShell from "@/components/PageShell";
import { notFound, redirect } from "next/navigation";
import { DEPARTMENTS, SLUG_ALIASES } from "@/lib/departments";
import { facultyDepartments } from "@/lib/facultyPeople";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug;
  const slug = SLUG_ALIASES[rawSlug] ?? rawSlug;
  const dept = DEPARTMENTS[slug];
  if (!dept) return {};
  return {
    title: `${dept.title} | NCE`,
    description: dept.subtitle,
  };
}

export default async function DepartmentPage({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams?.slug;
  const slug = SLUG_ALIASES[rawSlug] ?? rawSlug;

  if (rawSlug !== slug) {
    redirect(`/departments/${slug}`);
  }

  const dept = DEPARTMENTS[slug];
  if (!dept) return notFound();

  // Handle pattern type
  const isMtech = slug.startsWith("mtech");
  const patternType = isMtech ? "mtech" : slug;

  // Find faculty for this department
  const facultyMapping = {
    "mtech-cse": "cse",
    "mtech-ps": "eee",
  };
  const lookupKey = facultyMapping[slug] || slug;
  const facultyDept = facultyDepartments.find((fd) => fd.key === lookupKey);

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
      bgImage={dept.bannerImage}
      gallery={dept.gallery}
      patternType={patternType}
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
          title: "Academic Programs",
          cards: (dept.programs ?? []).map(p => ({
            title: p.name,
            kicker: "Duration: " + (p.duration ?? "To be updated"),
            text: p.desc ?? "",
            points: [
              `Intake: ${p.intake ?? "To be updated"} Seats`,
              `Type: ${p.name.startsWith("M.Tech") ? "Postgraduate" : "Undergraduate"}`
            ],
          })),
        },
        {
          title: "Vision & Mission",
          cards: [
            {
              title: "Vision",
              kicker: "Perspective",
              text: dept.vision ?? "To be updated.",
            },
            {
              title: "Mission",
              kicker: "Strategic Goals",
              points: dept.mission ?? ["To be updated."],
            },
            {
              title: "HOD",
              kicker: "Leadership",
              points: [
                `Name: ${dept.hod?.name ?? "To be updated"}`,
                `Email: ${dept.hod?.email ?? "To be updated"}`,
              ],
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
          title: "Faculty",
          cards: facultyDept
            ? [
                {
                  title: facultyDept.head.name,
                  kicker: "Head of Department",
                  text: `${facultyDept.head.qualification} | ${facultyDept.head.email}`,
                  points: facultyDept.head.areas || [],
                },
                ...facultyDept.assistants.map((f) => ({
                  title: f.name,
                  kicker: "Assistant Professor",
                  text: `${f.qualification} | ${f.email}`,
                  points: f.areas || [],
                })),
              ]
            : [
                {
                  title: "Faculty Profiles",
                  kicker: "People",
                  text: "Information to be updated soon.",
                },
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
              title: "Full Faculty List",
              kicker: "People",
              text: "Browse profiles of all institute faculty members.",
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

