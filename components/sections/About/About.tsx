import MyTimeLine from '@/components/MyTimeline'
import Section from '@/components/ui/section'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <Section delay={0.2}>
        <h2 className="text-2xl font-bold">ABOUT</h2>
        <p className="text-foreground/80 md:text-lg md:leading-8">
          23 year old developer who enjoys building cool stuff. I&apos;m currently working for{' '}
          <Link
            href={'https://www.redmind.se/en/'}
            target="_blank"
            className="text-red-500 hover:underline transition-all"
          >
            Redmind
          </Link>{' '}
          as a Software Developer where I do everything from building UI&apos;s, resolving bugs,
          maintaning and scaling backends for our client&apos;s applications.
        </p>
      </Section>
      <Section delay={0.3}>
        <h2 className="text-2xl font-bold">DEV JOURNEY</h2>
        <MyTimeLine />
      </Section>
    </>
  )
}

export default About
