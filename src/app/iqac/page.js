import PageShell from "@/components/PageShell";

export default function IQACPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="IQAC"
      subtitle="Internal Quality Assurance Cell — policies, activities, and quality initiatives."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "IQAC" }]}
      sections={[
        {
          title: "Quality Framework",
          cards: [
            { title: "IQAC Composition", kicker: "Team", text: "Members, roles, and responsibilities (add official list)." },
            { title: "Policies", kicker: "Policy", text: "Quality policy, OBE, feedback processes, audit cycles." },
            { title: "Annual Reports", kicker: "Reports", text: "Link activity reports and minutes of meetings." },
          ],
        },
        {
          title: "Downloads",
          note: "Add AQAR / reports / meeting minutes as PDFs.",
          cards: [
            { title: "AQAR", kicker: "PDF", text: "Annual Quality Assurance Report" },
            { title: "Minutes of Meetings", kicker: "PDF", text: "IQAC meeting minutes and action taken reports" },
            { title: "Feedback Forms", kicker: "Forms", text: "Student/Faculty/Alumni feedback forms" },
          ],
        },
      ]}
    />
  );
}
