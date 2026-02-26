import PageShell from "@/components/PageShell";

export default function AdmissionPage() {
  return (
    <PageShell
      accentLabel="Admission"
      title="Admission"
      subtitle="Eligibility, application process, important dates, and required documents for admission."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admission" }]}
      sections={[
        {
          title: "Admission Process",
          cards: [
            { title: "Eligibility", kicker: "Step 1", text: "Eligibility criteria for B.Tech programs (add official rules)." },
            { title: "How to Apply", kicker: "Step 2", text: "Application/registration steps and counselling details." },
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
