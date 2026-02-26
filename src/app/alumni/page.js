import PageShell from "@/components/PageShell";

export default function AlumniPage() {
  return (
    <PageShell
      accentLabel="Community"
      title="Alumni"
      subtitle="Alumni network, achievements, and engagement programs (structure page)."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Alumni" }]}
      sections={[
        {
          title: "Alumni Network",
          cards: [
            { title: "Alumni Association", kicker: "Network", text: "Add alumni association details and membership info." },
            { title: "Success Stories", kicker: "Stories", text: "Feature alumni achievements and testimonials." },
            { title: "Connect", kicker: "Contact", text: "Add a Google Form / email for alumni registration.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
