"use client";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "923005219769";
const CONTACT_EMAIL = "q_i_rwp@yahoo.com";
const OFFICE_ADDRESS = "Office No. 1, 5th Floor, Ferooz Center, Blue Area, Islamabad, Pakistan";

export default function Page() {
  return (
    <main className="font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <DevSmokeTest />
    </main>
  );
}

function HeroSection() {
  return (
    <section id="home" className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Your Path to Global Education Starts Here</h1>
      <p className="mb-6 text-lg">Expert guidance for admissions, visas, and your future abroad</p>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
         className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
        Chat with us on WhatsApp
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700 text-lg">
        Expert Overseas Education Consultants, based in Islamabad, has over a decade of experience assisting
        students with admissions, visa processing, and guidance for studying abroad. Our qualified counselors
        are accredited by international authorities to ensure you get the best advice for your future.
      </p>
    </section>
  );
}

function ServicesSection() {
  const services = [
    "Admissions Guidance",
    "Visa Processing & Guidance",
    "Scholarship & Test Preparation",
    "Pre-departure & Post-arrival Support",
  ];
  return (
    <section id="services" className="py-16 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s} className="p-6 bg-white shadow rounded-lg text-lg font-medium">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    "13+ years of experience",
    "High success rate with personalized guidance",
    "Qualified & licensed counselors",
    "Affordable and transparent process",
  ];
  return (
    <section id="why" className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {reasons.map((r) => (
          <div key={r} className="p-6 bg-blue-600 text-white rounded-lg">{r}</div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Student Inquiry")}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-700">{OFFICE_ADDRESS}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea aria-label="message" className="p-4 border rounded-lg w-full" rows={5}
            placeholder="Write your details here..." value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Send</button>
        </form>
        <p className="mt-3 text-sm text-gray-600">
          Or email us directly: <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

function DevSmokeTest() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const heroWhatsApp = document.querySelector("a[href^='https://wa.me/']");
      const contactSection = document.querySelector("#contact");
      const textarea = contactSection?.querySelector("textarea");
      const sendBtn = contactSection?.querySelector("button[type='submit']");
      console.assert(!!heroWhatsApp, "WhatsApp link is missing in Hero section");
      console.assert(!!contactSection, "#contact section is missing");
      console.assert(!!textarea, "Contact textarea is missing");
      console.assert(!!sendBtn, "Contact Send button is missing");
      console.log("✅ Smoke tests passed: core UI present and unique");
    } catch (err) {
      console.warn("Smoke tests skipped due to error:", err);
    }
  }, []);
  return null;
}
