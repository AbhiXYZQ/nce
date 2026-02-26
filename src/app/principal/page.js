import PageShell from "@/components/PageShell";

export default function PrincipalDeskPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="Principal's Desk"
      subtitle="Message from the Principal and the institute’s priorities for excellence in engineering education."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "Principal's Desk" }]}
      sections={[
        {
          title: "Message",
          cards: [
            { title: "Principal’s Message", kicker: "Message", text: "Add the official message and a photo of the Principal." },
            { title: "Key Focus Areas", kicker: "Focus", text: "Teaching quality, placements, research, student welfare, campus culture." },
            { title: "Contact Office", kicker: "Contact", text: "Office hours, email, and official communication channels.", href: "/contact" },
          ],
        },
      ]}
    />
  );
}
