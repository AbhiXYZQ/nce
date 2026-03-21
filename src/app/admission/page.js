import PageShell from "@/components/PageShell";

export default function AdmissionPage() {
  return (
    <PageShell
      accentLabel="Admission"
      title="Admission"
      subtitle="Eligibility, application process, important dates, and required documents for admission."
      bgImage="https://images.unsplash.com/photo-1523050335456-c38447d0d93f?q=80&w=2070&auto=format&fit=crop"
      patternType="about"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admission" }]}
      sections={[
        {
          title: "Admission Process",
          cards: [
            { title: "Eligibility", kicker: "Step 1", text: "Eligibility criteria for B.Tech programs (add official rules)." },
            { title: "Counseling & Allotment", kicker: "Step 2", text: "Admission is through BCECE / UGEAC counseling process." },
            { title: "Documents Required", kicker: "Step 3", text: "List of required documents for verification." },
          ],
        },
        {
          title: "Important Information",
          note: "Add official admission notices and last dates here.",
          cards: [
            { title: "Important Dates", kicker: "Dates", text: "Start date, last date, counselling, reporting." },
            { title: "Fee Structure", kicker: "Fees", text: "Year-wise fee structure and payment instructions." },
            { title: "Help Desk", kicker: "Support", text: "Phone/email for admission queries.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
