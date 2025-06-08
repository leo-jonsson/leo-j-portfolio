import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "Mar 2025 - Ongoing",
    title: "Full Stack Developer | Redmind - Internship",
    description:
      "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
  {
    id: 2,
    date: "Aug 2023 - Jun 2025",
    title: "Frontend Development | Noroff - Study",
    description:
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
  },
];

export default function MyTimeLine() {
  return (
    <Timeline defaultValue={3} className="mt-10">
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
