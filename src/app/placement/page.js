import PageShell from "@/components/PageShell";

export default function PlacementPage() {
  return (
    <PageShell
      accentLabel="Placements"
      title="Training & Placement Cell"
      subtitle="Placement activities, training programs, recruiters, and student career support."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "T&P Cell" }]}
      sections={[
        {
          title: "Placement Overview",
          cards: [
            { title: "Placement Statistics", kicker: "Stats", text: "Add year-wise placement stats (offers, packages, recruiters)." },
            { title: "Training Programs", kicker: "Training", text: "Aptitude, soft skills, technical training, mock interviews." },
            { title: "Recruiters", kicker: "Industry", text: "List of recruiting partners and MoUs." },
          ],
        },
        {
          title: "For Recruiters",
          cards: [
            { title: "Why NCE", kicker: "Hiring", text: "Talent pool, infrastructure, and hiring process." },
            { title: "Placement Policy", kicker: "Policy", text: "Rules and policies for campus recruitment." },
            { title: "Contact T&P", kicker: "Contact", text: "Official T&P contact details.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
