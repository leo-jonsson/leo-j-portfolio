"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/lib/constants";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Loader2, Send } from "lucide-react";

const ContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent) => {
    if (!formRef.current) return;

    e.preventDefault();

    setLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
    } catch (e) {
      console.error(e);
      throw new Error("Error sending mail");
    }
    setLoading(false);
    formRef.current.reset();
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={formRef}
      className="w-full flex flex-col gap-5 mt-8 md:px-5 px-2"
    >
      <div className="grid gap-2">
        <Label htmlFor="emailFrom">Email address</Label>
        <Input
          type="email"
          name="email_from"
          id="emailFrom"
          placeholder="example@something.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          id="message"
          placeholder="Ask me anything..."
          required
        />
      </div>
      <Button type="submit" disabled={loading}>
        <span>Send</span>{" "}
        {!loading ? <Send /> : <Loader2 className="animate-spin" />}
      </Button>
    </form>
  );
};

export default ContactForm;
