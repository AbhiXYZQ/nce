import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="About NCE"
      subtitle="An overview of Nalanda College of Engineering, Chandi — our legacy, campus, and commitment to quality technical education."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "About NCE" }]}
      sections={[
        {
          title: "Overview",
          cards: [
            { title: "Institution Profile", kicker: "About", text: "Basic profile, approvals, and institutional highlights (to be filled with official details)." },
            { title: "Campus & Facilities", kicker: "Campus", text: "Library, hostels, labs, sports, and student amenities." },
            { title: "Quality & Governance", kicker: "Quality", text: "Administration, committees, and continuous improvement processes." },
          ],
        },
        {
          title: "Downloads",
          note: "Add official PDFs here (brochure, prospectus, affiliations, approvals).",
          cards: [
            { title: "College Brochure", kicker: "PDF", text: "Upload brochure and link it here.", href: "/nirf" },
            { title: "Approvals & Affiliations", kicker: "Docs", text: "AICTE / State / University related documents." },
            { title: "Campus Map", kicker: "Map", text: "Add a campus map and directions." },
          ],
        },
      ]}
    />
  );
}
