import PageShell from "@/components/PageShell";

export default function ClubsPage() {
  return (
    <PageShell
      accentLabel="Student Corner"
      title="Clubs & Activities"
      subtitle="Technical clubs, cultural activities, innovation programs, and student-led communities."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Corner" }, { label: "Clubs & Activities" }]}
      sections={[
        {
          title: "Student Life",
          cards: [
            { title: "Technical Clubs", kicker: "Tech", text: "Coding, robotics, aeromodelling, electronics, and more." },
            { title: "Cultural Clubs", kicker: "Culture", text: "Music, arts, events, and cultural fests." },
            { title: "Innovation & Hackathons", kicker: "Innovation", text: "Innovation cell activities and hackathon participation." },
          ],
        },
      ]}
    />
  );
}
