import PageShell from "@/components/PageShell";

export default function FacultyPage() {
  return (
    <PageShell
      accentLabel="People"
      title="Faculty"
      subtitle="Faculty directory structure — departments, qualifications, and contact (to be filled)."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Faculty" }]}
      sections={[
        {
          title: "Faculty Directory",
          note: "Next step: add a real list per department (name, designation, qualification, email).",
          cards: [
            { title: "Department-wise Faculty", kicker: "Directory", text: "CSE / AI & ML / Civil / Mechanical / Aeronautical / EEE." },
            { title: "Research Profiles", kicker: "Profiles", text: "Publications, projects, and Google Scholar links." },
            { title: "Contact", kicker: "Office", text: "Official contact for faculty coordination.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
