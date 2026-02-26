import PageShell from "@/components/PageShell";

export default function CalendarPage() {
  return (
    <PageShell
      accentLabel="Academics"
      title="Academic Calendar"
      subtitle="Important academic dates, semester schedule, examinations, and events."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }, { label: "Academic Calendar" }]}
      sections={[
        {
          title: "Academic Year",
          note: "Upload the official calendar PDF and list key dates here.",
          cards: [
            { title: "Odd Semester Calendar", kicker: "PDF", text: "Add a link to the Odd Semester calendar." },
            { title: "Even Semester Calendar", kicker: "PDF", text: "Add a link to the Even Semester calendar." },
            { title: "Holiday List", kicker: "PDF", text: "Add a link to the official holiday list." },
          ],
        },
      ]}
    />
  );
}
