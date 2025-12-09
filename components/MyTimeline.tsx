import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline'

const items = [
  {
    id: 1,
    date: 'Dec 2025 - Ongoing',
    title: 'Software Developer | Redmind - Fulltime',
    description: 'Scaling and maintaining client applications, building UIs and resolving bugs.',
  },
  {
    id: 2,
    date: 'Mar 2025 - Dec 2025',
    title: 'Full Stack Developer | Redmind - Internship',
    description: 'Building mobile apps in React Native using modern techonologies.',
  },
  {
    id: 3,
    date: 'Aug 2023 - Jun 2025',
    title: 'Frontend Development | Noroff - Study',
    description: 'Frontend Development program @ Noroff Higher Vocational School',
  },
  {
    id: 4,
    date: 'Oct 2022 - Dec 2022',
    title: 'Programming in C# | Nackademin - Study',
    description: 'C# course where I got to touch programming basics and fundamentals.',
  },
]

export default function MyTimeLine() {
  return (
    <Timeline defaultValue={1} className="mt-5">
      {items.map(item => (
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
  )
}
