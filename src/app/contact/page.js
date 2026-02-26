import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      accentLabel="Contact"
      title="Contact Us"
      subtitle="Reach the administration office for admissions, academics, and official queries."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      sections={[
        {
          title: "Office Contact",
          cards: [
            { title: "Phone", kicker: "Call", text: "Add official phone numbers for office and help desk." },
            { title: "Email", kicker: "Mail", text: "Add official email IDs for departments and office." },
            { title: "Address", kicker: "Visit", text: "Add full postal address and Google Maps link." },
          ],
        },
        {
          title: "Quick Help",
          cards: [
            { title: "Admission Queries", kicker: "Admission", text: "Admission help desk and working hours.", href: "/admission" },
            { title: "Placements", kicker: "T&P", text: "Contact T&P cell.", href: "/placement" },
            { title: "Notices", kicker: "Updates", text: "Check latest announcements.", href: "/notices" },
          ],
        },
      ]}
    />
  );
}
