import PageShell from "@/components/PageShell";

export default function ResearchPage() {
  return (
    <PageShell
      accentLabel="Academics"
      title="Research"
      subtitle="Research areas, laboratories, projects, and publications across departments."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }, { label: "Research" }]}
      sections={[
        {
          title: "Research Ecosystem",
          cards: [
            { title: "Labs & Facilities", kicker: "Infrastructure", text: "Major labs and research facilities (add official list)." },
            { title: "Projects", kicker: "Projects", text: "Sponsored and student projects, hackathons, and competitions." },
            { title: "Publications", kicker: "Papers", text: "Publications, patents, and achievements." },
          ],
        },
        {
          title: "Collaboration",
          cards: [
            { title: "Industry Collaboration", kicker: "Industry", text: "MoUs and industry partnerships." },
            { title: "Centers of Excellence", kicker: "CoE", text: "COEs, labs, and incubation initiatives." },
            { title: "Student Innovation", kicker: "Students", text: "Clubs, innovation cell, and mentorship.", href: "/clubs" },
          ],
        },
      ]}
    />
  );
}
