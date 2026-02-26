import PageShell from "@/components/PageShell";

export default function AcademicsPage() {
  return (
    <PageShell
      accentLabel="Academics"
      title="Programs Offered"
      subtitle="B.Tech programs, academic regulations, and learning resources to support student success."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }, { label: "Programs Offered" }]}
      quickLinks={[
        { label: "Academic Calendar", href: "/calendar" },
        { label: "Syllabus", href: "/syllabus" },
        { label: "Examination", href: "/exam" },
        { label: "Results", href: "/results" },
      ]}
      sections={[
        {
          title: "Programs",
          cards: [
            { title: "B.Tech Departments", kicker: "Programs", text: "Explore academic departments and intake details.", href: "/" },
            { title: "Regulations", kicker: "Rules", text: "Academic regulations, attendance, evaluation, and grading." },
            { title: "Learning Resources", kicker: "Resources", text: "Library, e-resources, labs, and mentoring." },
          ],
        },
        {
          title: "Academic Support",
          cards: [
            { title: "Mentoring", kicker: "Student", text: "Mentoring system for academic and personal guidance." },
            { title: "Scholarships", kicker: "Aid", text: "Scholarship information and eligibility.", href: "/scholarships" },
            { title: "Student Corner", kicker: "Portal", text: "Login and student services.", href: "/student-login" },
          ],
        },
      ]}
    />
  );
}
