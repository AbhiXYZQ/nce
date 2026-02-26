import PageShell from "@/components/PageShell";

export default function StudentLoginPage() {
  return (
    <PageShell
      accentLabel="Student Corner"
      title="Student Login"
      subtitle="Access student services, notices, academic resources, and internal portals (to be connected)."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Student Corner" }, { label: "Student Login" }]}
      sections={[
        {
          title: "Student Services",
          note: "This is a structure-only page. Connect it with your actual student portal later.",
          cards: [
            { title: "Portal Access", kicker: "Login", text: "Add portal link or integrate authentication." },
            { title: "Notices", kicker: "Updates", text: "View notices and circulars.", href: "/notices" },
            { title: "Grievance", kicker: "Support", text: "Submit a grievance.", href: "/grievance" },
          ],
        },
      ]}
    />
  );
}
