import PageShell from "@/components/PageShell";
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {
  return (
    <PageShell
      accentLabel="Institute"
      title="About NCE"
      subtitle="A premium, official-ready overview of Nalanda College of Engineering — campus, academics, governance, and student outcomes."
      bgImage="https://www.collegebatch.com/static/clg-gallery/nalanda-college-of-engineering-chandi-nalanda-351897.webp"
      patternType="about"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institute" }, { label: "About NCE" }]}
      quickLinks={[
        { label: "Faculty", href: "/faculty" },
        { label: "Departments", href: "/departments" },
        { label: "Contact", href: "/contact" },
      ]}
    >
      <AboutContent />
    </PageShell>
  );
}
