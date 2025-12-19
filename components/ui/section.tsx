'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

type SectionProps = {
  children: ReactNode
  delay?: number
  skipAnimation?: boolean
  id?: string
  withoutPadding?: boolean
}

const Section = ({ children, skipAnimation = false, id, withoutPadding = false }: SectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <section
      ref={ref}
      className={`overflow-hidden grid gap-2 w-full font-sans ${
        withoutPadding ? '' : ' pt-8 px-2'
      }`}
      id={id}
    >
      {skipAnimation ? (
        children
      ) : (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, transform: 'translateY(10px)', filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              transform: 'translateY(0)',
              filter: 'blur(0)',
              transition: {
                duration: 0.2,
              },
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </section>
  )
}

export default Section
