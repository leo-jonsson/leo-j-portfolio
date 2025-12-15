import Section from '@/components/ui/section'
import Image from 'next/image'

const Intro = () => {
  return (
    <Section delay={0.1}>
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">Leo Jonsson A.</h1>
          <p className="text-2xl text-muted-foreground ml-0.5 mt-1">Software Developer</p>
        </div>
        <Image
          src="/assets/Me.jpeg"
          alt="Image of me"
          width={130}
          height={130}
          className="rounded-full object-cover grayscale md:block hidden"
        />
      </div>
    </Section>
  )
}

export default Intro
