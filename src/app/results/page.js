import PageShell from "@/components/PageShell";

export default function ResultsPage() {
  return (
    <PageShell
      accentLabel="Academics"
      title="Results"
      subtitle="Semester results and academic performance updates."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }, { label: "Results" }]}
      sections={[
        {
          title: "Result Links",
          note: "If results are hosted on an official portal, add the portal links here.",
          cards: [
            { title: "Result Portal", kicker: "Link", text: "Link to the official results portal." },
            { title: "Revaluation", kicker: "Process", text: "Revaluation procedure and forms." },
            { title: "Contact Exam Cell", kicker: "Help", text: "Exam cell contact details and help desk.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
