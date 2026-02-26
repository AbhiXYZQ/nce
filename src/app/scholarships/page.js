import PageShell from "@/components/PageShell";

export default function ScholarshipsPage() {
  return (
    <PageShell
      accentLabel="Student Corner"
      title="Scholarships"
      subtitle="Scholarship schemes, eligibility, and application guidance for students."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Corner" }, { label: "Scholarships" }]}
      sections={[
        {
          title: "Scholarship Information",
          note: "Add official scholarship links and deadlines.",
          cards: [
            { title: "Government Schemes", kicker: "Schemes", text: "State/Central scholarship schemes and eligibility." },
            { title: "Institute Support", kicker: "Aid", text: "Institute-level support or fee concessions (if applicable)." },
            { title: "Help Desk", kicker: "Support", text: "For queries, contact student section.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
