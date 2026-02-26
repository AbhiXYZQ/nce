import PageShell from "@/components/PageShell";

export default function NoticesPage() {
  return (
    <PageShell
      accentLabel="Updates"
      title="Notices & Circulars"
      subtitle="Latest announcements, circulars, and official updates (structure page)."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Notices" }]}
      sections={[
        {
          title: "Latest Updates",
          note: "Replace these cards with real notices (date + PDF link).",
          cards: [
            { title: "Admission Registration Extended", kicker: "Notice", text: "Add notice PDF and date." },
            { title: "Exam Date Sheet Released", kicker: "Circular", text: "Add circular PDF and date." },
            { title: "Campus Drive Announcement", kicker: "Placement", text: "Add company details and registration link." },
          ],
        },
      ]}
    />
  );
}
