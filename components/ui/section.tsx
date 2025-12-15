'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

type SectionProps = {
  children: ReactNode
  delay?: number
  skipAnimation?: boolean
  id?: string
}

const Section = ({ children, delay = 0, skipAnimation = false, id }: SectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <section ref={ref} className="grid gap-2 pt-8 w-full font-sans" id={id}>
      {skipAnimation ? (
        children
      ) : (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, transform: 'translateY(20px)' },
            visible: {
              opacity: 1,
              transform: 'translateY(0)',
              transition: {
                duration: 0.7 + delay,
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
