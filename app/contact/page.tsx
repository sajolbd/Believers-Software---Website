import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us — Believers Software | Web Apps, WordPress, SEO & Security",
  description:
    "Get in touch with Believers Software. Office: House No 1787, Merul Badda, Dhaka 1212. Phone/WhatsApp: +8801716878931. Guaranteed response within 1 business day.",
  openGraph: {
    title: "Contact Believers Software — Full-Service Web & Growth Agency",
    description:
      "Have a project in mind? Tell us about your web development, SEO, digital marketing, or security needs. Office: House No 1787, Merul Badda, Dhaka 1212.",
    url: "https://believerssoftware.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
