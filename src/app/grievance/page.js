import PageShell from "@/components/PageShell";

export default function GrievancePage() {
  return (
    <PageShell
      accentLabel="Student Corner"
      title="Grievance Cell"
      subtitle="A structured channel for student grievances and resolution (page scaffold)."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Corner" }, { label: "Grievance Cell" }]}
      sections={[
        {
          title: "How It Works",
          cards: [
            { title: "Submit Grievance", kicker: "Step 1", text: "Add a form or portal link for submitting grievances." },
            { title: "Review & Resolution", kicker: "Step 2", text: "Process, timelines, and escalation matrix." },
            { title: "Contact", kicker: "Step 3", text: "Official grievance cell contact details.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
