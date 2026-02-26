import PageShell from "@/components/PageShell";

export default function SyllabusPage() {
  return (
    <PageShell
      accentLabel="Academics"
      title="Syllabus"
      subtitle="Program-wise syllabus and curriculum structure."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }, { label: "Syllabus" }]}
      sections={[
        {
          title: "Program-wise Syllabus",
          note: "Add semester-wise PDFs for each department.",
          cards: [
            { title: "CSE", kicker: "PDF", text: "Semester-wise syllabus PDFs." },
            { title: "AI & ML", kicker: "PDF", text: "Semester-wise syllabus PDFs." },
            { title: "Civil", kicker: "PDF", text: "Semester-wise syllabus PDFs." },
            { title: "Mechanical", kicker: "PDF", text: "Semester-wise syllabus PDFs." },
            { title: "Aeronautical", kicker: "PDF", text: "Semester-wise syllabus PDFs." },
            { title: "EEE", kicker: "PDF", text: "Semester-wise syllabus PDFs." },
          ],
        },
      ]}
    />
  );
}
