import PageShell from "@/components/PageShell";
import FacultyPeople from "@/components/FacultyPeople";
import { principal, facultyDepartments } from "@/lib/facultyPeople";

export default function FacultyPage() {
  return (
    <PageShell
      accentLabel="People"
      title="Faculty"
      subtitle="Principal, Heads of Department, and Assistant Professors — a clean directory with smooth animations."
      bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
      patternType="faculty"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
      quickLinks={[
        { label: "Departments", href: "/departments" },
        { label: "Contact Office", href: "/contact" },
      ]}
    >
      <FacultyPeople principal={principal} departments={facultyDepartments} />
    </PageShell>
  );
}
