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
      "Building mobile apps in React Native using modern techonologies.",
  },
  {
    id: 2,
    date: "Aug 2023 - Jun 2025",
    title: "Frontend Development | Noroff - Study",
    description:
      "Frontend Development program @ Noroff Higher Vocational School",
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
