import PageShell from "@/components/PageShell";

export default function AntiRaggingPage() {
  return (
    <PageShell
      accentLabel="Student Corner"
      title="Anti-Ragging"
      subtitle="Policies, committee details, and important resources for a safe campus."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Corner" }, { label: "Anti-Ragging" }]}
      sections={[
        {
          title: "Policy & Resources",
          note: "Add official anti-ragging committee info, helpline numbers, and required undertakings.",
          cards: [
            { title: "Anti-Ragging Policy", kicker: "Policy", text: "Institution’s anti-ragging policy and rules." },
            { title: "Committee", kicker: "Committee", text: "Committee members and contact details." },
            { title: "Helpline", kicker: "Emergency", text: "Important helplines and reporting channels." },
          ],
        },
      ]}
    />
  );
}
