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
import { toast } from "sonner";

const ContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  console.log(
    toast("Email sent!", { description: "I will get back to you ASAP" })
  );

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
      toast.success("Email sent!", {
        description: "I will get back to you ASAP",
      });
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong", {
        description: "Could not send email, please try again.",
      });
      throw new Error("Error sending mail");
    }
    setLoading(false);
    formRef.current.reset();
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={formRef}
      className="w-full flex flex-col gap-5 mt-8 "
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
