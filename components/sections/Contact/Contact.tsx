import ContactForm from '@/components/ContactForm'
import Section from '@/components/ui/section'

const Contact = () => {
  return (
    <Section delay={0.6}>
      <h2 className="text-2xl font-bold mt-8">CONTACT</h2>
      <p className="md:text-lg text-foreground/70">
        You can fill out the form below - but I highly recommend calling or texting me on{' '}
        <a href="tel:+46737043031" className="text-blue-700 dark:text-blue-500">
          +46737043031
        </a>{' '}
        for a faster response!
      </p>
      <ContactForm />
    </Section>
  )
}

export default Contact
