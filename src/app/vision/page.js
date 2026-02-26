import PageShell from "@/components/PageShell";

export default function VisionMissionPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="Vision & Mission"
      subtitle="Our vision, mission, and core values that guide teaching, research, and student development."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "Vision & Mission" }]}
      sections={[
        {
          title: "Vision",
          cards: [
            { title: "Vision Statement", kicker: "Vision", text: "Add the official vision statement of the institute." },
            { title: "Long-Term Goals", kicker: "Goals", text: "Where we want to be in the next 5–10 years." },
            { title: "Impact", kicker: "Outcome", text: "How NCE aims to contribute to society and industry." },
          ],
        },
        {
          title: "Mission",
          cards: [
            { title: "Mission Points", kicker: "Mission", text: "Add the official mission points here." },
            { title: "Student Outcomes", kicker: "Academics", text: "Outcome-based education, skills, and employability focus." },
            { title: "Research & Innovation", kicker: "R&D", text: "Promoting research culture and innovation in engineering." },
          ],
        },
      ]}
    />
  );
}
