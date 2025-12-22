'use client'

import Section from '@/components/ui/section'
import { TextAnimate } from '@/components/ui/text-animate'
import Link from 'next/link'

type IntroImage = { url: string; isLandscape: boolean }

const IMAGES: IntroImage[] = [
  { url: 'img11.JPG', isLandscape: false },
  { url: 'img1.JPG', isLandscape: true },
  { url: 'img10.JPG', isLandscape: false },
  // { url: 'img2.jpeg', isLandscape: true },
  { url: 'img12.JPG', isLandscape: true },
  { url: 'img4.jpeg', isLandscape: false },
  { url: 'img5.JPG', isLandscape: false },
  // { url: 'img6.JPG', isLandscape: false },
  { url: 'img8.JPG', isLandscape: false },
  { url: 'img7.JPG', isLandscape: true },
  { url: 'img9.JPG', isLandscape: false },
]

const navLinks = [
  { id: 'about', label: 'ABOUT', delay: 3.2 },
  { id: 'dev_journey', label: 'DEV_JOURNEY', delay: 3.5 },
  { id: 'tech_stack', label: 'TECH_STACK', delay: 3.8 },
  { id: 'projects', label: 'PROJECTS', delay: 4.1 },
  { id: 'contact', label: 'CONTACT', delay: 4.4 },
]

const Intro = () => {
  return (
    <Section skipAnimation withoutPadding>
      <div className="w-full flex flex-col justify-center lg:justify-around overflow-hidden relative  h-screen font-mono p-2 gap-8 lg:gap-0">
        <div className=" w-full  max-h-[20rem] top-4 lg:pl-8">
          <TextAnimate
            delay={0.8}
            animation="slideLeft"
            by="character"
            as={'h1'}
            once
            className="text-3xl sm:text-5xl font-bold  z-20 "
          >
            LEO JONSSON A.
          </TextAnimate>
          <TextAnimate
            animation="slideUp"
            once
            by="line"
            delay={1.2}
            as={'h2'}
            className="text-lg sm:text-2xl text-muted-foreground font-normal uppercase"
          >
            Software Developer with focus on development in React w/ TypeScript
          </TextAnimate>
        </div>
        <ul className="grid gap-2  lg:pl-8 text-xl tabular-nums">
          {navLinks.map((link, index) => (
            <li
              className="list-none tabular-nums text-muted-foreground hover:text-primary transition-colors w-fit"
              key={index}
            >
              <Link href={`#${link.id}`}>
                <TextAnimate
                  animation="slideRight"
                  once
                  by="line"
                  delay={index * 0.125 + 1.7}
                  as={'span'}
                  className="list-none tabular-nums text-foreground hover:text-muted-foreground transition-colors"
                >
                  {`0${index + 1} ${link.label}`}
                </TextAnimate>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden w-full  lg:flex justify-center items-center relative overflow-hidden px-2">
          {/* <div className="mx-auto w-full md:block hidden">
            <div className="columns-2 md:columns-3 gap-2">
              {IMAGES.map((image, idx) => (
                <BlurFade key={idx} delay={2.7 + idx * 0.1}>
                  <Image
                    src={`/assets/me/${image.url}`}
                    alt={`image-${idx}`}
                    height={700}
                    width={700}
                    className={`mb-2 rounded-none ${
                      image.isLandscape ? 'aspect-[4/3]' : 'h-auto'
                    } object-cover w-full grayscale-80 hover:grayscale-0 transition-all`}
                  />
                </BlurFade>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </Section>
  )
}

export default Intro
