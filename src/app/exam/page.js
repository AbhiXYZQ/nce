import PageShell from "@/components/PageShell";

export default function ExaminationPage() {
  return (
    <PageShell
      accentLabel="Academics"
      title="Examination"
      subtitle="Exam schedules, guidelines, notices, and important updates."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Academics" }, { label: "Examination" }]}
      sections={[
        {
          title: "Exam Information",
          cards: [
            { title: "Exam Timetable", kicker: "Schedule", text: "Upload date sheets and timetables." },
            { title: "Guidelines", kicker: "Rules", text: "Rules for exams, admit card, and evaluation process." },
            { title: "Notices", kicker: "Updates", text: "Exam-related notices and circulars.", href: "/notices" },
          ],
        },
      ]}
    />
  );
}
