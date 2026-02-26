import PageShell from "@/components/PageShell";
import { DEPARTMENT_LIST } from "@/lib/departments";

export default function DepartmentsIndexPage() {
  return (
    <PageShell
      accentLabel="Programs"
      title="Departments"
      subtitle="Explore all academic departments at Nalanda College of Engineering, Chandi."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Departments" }]}
      sections={[
        {
          title: "Academic Departments",
          cards: DEPARTMENT_LIST.map((d) => ({
            title: d.title,
            kicker: d.short,
            href: `/departments/${d.slug}`,
            text: d.subtitle,
          })),
          note: "These are scaffold pages — we can add HOD, faculty list, labs, intake, and photo gallery next.",
        },
      ]}
    />
  );
}
