import PageShell from "@/components/PageShell";

export default function AdministrationPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="Administration"
      subtitle="Administrative structure, key officers, and institutional committees."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "Administration" }]}
      sections={[
        {
          title: "Leadership",
          cards: [
            { title: "Principal", kicker: "Office", text: "Principal’s office information and responsibilities." , href: "/principal"},
            { title: "Administrative Officers", kicker: "Team", text: "Registrar / accounts / academics / exam cell details." },
            { title: "Committees", kicker: "Governance", text: "Statutory and non-statutory committees." },
          ],
        },
        {
          title: "Office Services",
          cards: [
            { title: "Student Services", kicker: "Support", text: "Certificates, scholarships, grievance redressal, and help desk." },
            { title: "Academic Office", kicker: "Academics", text: "Academic schedule, course coordination, and student records." },
            { title: "Downloads", kicker: "Docs", text: "Forms and circulars can be linked here.", href: "/notices" },
          ],
        },
      ]}
    />
  );
}
