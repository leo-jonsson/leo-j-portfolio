import Section from "@/components/ui/section";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <Section>
      <h2 className="text-2xl font-bold">CONTACT</h2>
      <p className="text-base text-foreground/70">
        Want to get in touch?{" "}
        <Link
          href={"/https://x.com/leomrgreen"}
          target="_blank"
          className="text-blue-500
"
        >
          Just shoot me a dm on twitter
        </Link>{" "}
        and I&apos;ll get back ASAP. Feel free to connect with me on Linkedin
        aswell.
      </p>
    </Section>
  );
};

export default Contact;
