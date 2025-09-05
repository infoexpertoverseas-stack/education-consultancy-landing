"use client";
import { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  FileText,
  Plane,
  Users,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

// Config
const WHATSAPP_NUMBER = "923001234567"; // replace with your real number
const CONTACT_EMAIL = "q_i_rwp@yahoo.com";
const OFFICE_ADDRESS =
  "Office No. 1, 5th Floor, Ferooz Center, Blue Area, Islamabad, Pakistan";

export default function Page() {
  return (
    <main className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

// ---------------- Navbar ----------------
function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">
          Expert Overseas Education Consultants
        </h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#why" className="hover:text-blue-600">Why Us</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// ---------------- Hero ----------------
function HeroSection() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center text-white">
      <Image
        src="/hero.jpg"
        alt="Study Abroad"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Your Path to Global Education
        </h1>
        <p className="mb-8 text-lg">
          Professional guidance for admissions, visas, and study abroad
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

// ---------------- About ----------------
function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <Image
          src="/about.jpg"
          alt="Consulting session"
          width={600}
          height={400}
          className="rounded-xl shadow"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Expert Overseas Education Consultants, based in Islamabad, has 13+
          years of experience helping students achieve their dreams of studying
          abroad. From admissions and scholarships to visa processing and
          post-arrival support, our certified counselors provide end-to-end
          assistance.
        </p>
      </div>
    </section>
  );
}

// ---------------- Services ----------------
function ServicesSection() {
  const services = [
    { icon: <GraduationCap className="w-8 h-8 text-blue-600" />, text: "Admissions Guidance" },
    { icon: <FileText className="w-8 h-8 text-blue-600" />, text: "Visa Processing & Guidance" },
    { icon: <Plane className="w-8 h-8 text-blue-600" />, text: "Pre-departure & Post-arrival Support" },
    { icon: <Users className="w-8 h-8 text-blue-600" />, text: "Scholarship & Test Preparation" },
  ];
  return (
    <section id="services" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-600">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.text} className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{s.icon}</div>
              <p className="text-lg font-medium">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Why Choose Us ----------------
function WhyChooseUsSection() {
  const reasons = [
    "13+ years of expertise",
    "High visa success rate",
    "Certified & licensed counselors",
    "Affordable and transparent process",
  ];
  return (
    <section id="why" className="relative py-20 px-6 text-center text-white">
      <Image
        src="/hero.jpg"
        alt="Background"
        fill
        className="object-cover brightness-50"
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r} className="p-6 bg-blue-600 rounded-xl shadow">
              <CheckCircle className="w-8 h-8 mb-3 mx-auto" />
              <p className="font-medium">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Contact ----------------
function ContactSection() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${CONTACT_EMAIL}?subject=Student Inquiry&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Contact Us</h2>
        <p className="mb-6 text-gray-700">{OFFICE_ADDRESS}</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            className="p-4 border rounded-lg w-full"
            rows={5}
            placeholder="Write your details here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

// ---------------- Footer ----------------
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-white text-xl font-bold mb-3">
            Expert Overseas Education
          </h3>
          <p className="text-sm">
            Your trusted partner for admissions and visa guidance.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {OFFICE_ADDRESS}
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> {CONTACT_EMAIL}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +92 {WHATSAPP_NUMBER}
          </p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Expert Overseas Education. All rights reserved.
      </div>
    </footer>
  );
}
