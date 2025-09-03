import ContactForm from "@/components/ContactForm";
import Section from "@/components/ui/section";
import React from "react";

const Contact = () => {
  return (
    <Section index={5}>
      <h2 className="text-2xl font-bold mt-8">CONTACT</h2>
      <p className="md:text-lg text-foreground/70">
        Fill out the form below, but if you want me to respond even faster -
        just call or text me on{" "}
        <a href="tel:+46737043031" className="text-blue-700 dark:text-blue-500">
          073-704 30 31
        </a>
      </p>
      <ContactForm />
    </Section>
  );
};

export default Contact;
