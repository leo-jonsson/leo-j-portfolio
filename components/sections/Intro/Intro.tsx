import { BlurFade } from '@/components/ui/blur-fade'
import Section from '@/components/ui/section'
import { TextAnimate } from '@/components/ui/text-animate'
import Link from 'next/link'

// type IntroImage = { url: string; isLandscape: boolean }

// const IMAGES: IntroImage[] = [
//   { url: 'img11.JPG', isLandscape: false },
//   { url: 'img1.JPG', isLandscape: true },
//   { url: 'img10.JPG', isLandscape: false },
//   { url: 'img2.jpeg', isLandscape: true },
//   // { url: 'img3.JPG', isLandscape: true },
//   { url: 'img4.jpeg', isLandscape: false },
//   { url: 'img5.JPG', isLandscape: false },
//   // { url: 'img6.JPG', isLandscape: false },
//   { url: 'img8.JPG', isLandscape: false },
//   { url: 'img7.JPG', isLandscape: true },
//   { url: 'img9.JPG', isLandscape: false },
// ]

const Intro = () => {
  return (
    <Section delay={0.1} skipAnimation>
      <div className="w-full flex overflow-hidden relative max-w-[40rem] mx-auto min-h-[90vh] pt-8 font-mono px-2">
        <div className="flex flex-col justify-around">
          <div className="max-w-[35rem] w-full  max-h-[20rem] top-4 md:pl-8">
            <TextAnimate
              animation="slideLeft"
              by="character"
              as={'h1'}
              once
              className="text-5xl font-bold  z-20 "
            >
              LEO JONSSON A.
            </TextAnimate>
            <TextAnimate
              animation="slideUp"
              once
              by="line"
              delay={1}
              as={'h2'}
              className="text-2xl text-muted-foreground font-normal uppercase"
            >
              Software Developer with focus on development in React w/ TypeScript
            </TextAnimate>
          </div>
          <ul className="grid gap-2 md:pl-8 text-xl">
            <BlurFade delay={3.2 - 2}>
              <li className="list-disc">
                <Link href={'#about'}>ABOUT</Link>
              </li>
            </BlurFade>
            <BlurFade delay={3.5 - 2}>
              <li className="list-disc">
                <Link href={'#dev_journey'}>DEV_JOURNEY</Link>
              </li>
            </BlurFade>
            <BlurFade delay={3.8 - 2}>
              <li className="list-disc">
                <Link href={'#tech_stack'}>TECH_STACK</Link>
              </li>
            </BlurFade>
            <BlurFade delay={4.1 - 2}>
              <li className="list-disc">
                <Link href={'#projects'}>PROJECTS</Link>
              </li>
            </BlurFade>
            <BlurFade delay={4.4 - 2}>
              <li className="list-disc">
                <Link href={'#contact'}>CONTACT</Link>
              </li>
            </BlurFade>
          </ul>
        </div>
        {/* <div className="size-fit fixed -right-8 bottom-0 max-w-[40rem] md:block hidden">
          <div className="columns-2 md:columns-3">
            {IMAGES.map((image, idx) => (
              <BlurFade key={idx} delay={2 + idx * 0.05}>
                <Image
                  src={`/assets/me/${image.url}`}
                  alt={`image-${idx}`}
                  height={200}
                  width={200}
                  className={`mb-4 rounded-md ${
                    image.isLandscape ? 'aspect-[4/3]' : 'h-auto'
                  } object-cover w-full grayscale-100 hover:grayscale-0 transition-all`}
                />
              </BlurFade>
            ))}
          </div>
        </div> */}
      </div>
    </Section>
  )
}

export default Intro
