import PageShell from "@/components/PageShell";

export default function NIRFPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="NIRF Data"
      subtitle="National Institutional Ranking Framework (NIRF) data and mandatory disclosures."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "NIRF Data" }]}
      sections={[
        {
          title: "Mandatory Disclosures",
          cards: [
            { title: "NIRF Submission", kicker: "NIRF", text: "Upload and link NIRF submission documents here." },
            { title: "Annual Reports", kicker: "Reports", text: "Institute annual report, key statistics, achievements." },
            { title: "RTI / Disclosure", kicker: "Compliance", text: "Required disclosures and compliance links." },
          ],
        },
      ]}
    />
  );
}
