"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

// Placeholder for new components
// import Navbar from "../components/Navbar";
// import ContactForm from "../components/ContactForm";
// import Testimonial from "../components/Testimonial";

const skills = {
  "Core Languages": ["JavaScript", "TypeScript", "HTML", "CSS"],
  "Headless E-commerce": ["Shopify Hydrogen", "Shopify Storefront API"],
  "Frontend Frameworks": ["React", "Next.js"],
  "Backend/Databases": ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  "Tools & Methodologies": ["Git", "Jest", "CI/CD", "Agile"],
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header/Navigation Bar */}
      <header className="w-full flex items-center justify-between px-4 md:px-6 py-2 md:py-1 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center">
          <Image
            src="/logo-new.png"
            alt="Logo"
            width={48}
            height={48}
            className="h-10 w-10 md:h-[100px] md:w-[100px]"
          />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <a href="#home" className="hover:text-blue-600 text-base lg:text-xl">
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 text-base lg:text-xl"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-blue-600 text-base lg:text-xl">
            About
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 text-base lg:text-xl"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 text-base lg:text-xl"
          >
            Contact
          </a>
        </nav>
        <Button className="ml-2 md:ml-4 text-base lg:text-xl hidden md:inline-flex">
          Let&apos;s Talk
        </Button>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-8 text-xl shadow-lg animate-in fade-in duration-200">
          <button
            className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a
            href="#home"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="mt-4 w-40" onClick={() => setMenuOpen(false)}>
            Let&apos;s Talk
          </Button>
        </nav>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center py-10 md:py-16 px-2 md:px-4 text-center bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="flex flex-col items-center w-full">
          <span className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">
            Angus Carey
          </span>
          <h1 className="text-base sm:text-xl md:text-2xl font-semibold mb-4">
            Headless Shopify Developer | Next.js & React Specialist
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-md mx-auto">
          Building lightning-fast, custom Shopify storefronts that drive
          conversions.
        </p>
        <Button className="px-6 py-2 text-base md:text-lg">
          View Headless Demo
        </Button>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Headless Shopify Demo */}
          <Card>
            <Image
              src="/public/globe.svg"
              alt="Headless Shopify Demo"
              width={400}
              height={300}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Headless Shopify Demo</h3>
              <p className="mb-2">
                A lightning-fast, custom Shopify storefront built with Hydrogen
                and Next.js.
              </p>
              <Button className="w-full mb-2">View Case Study</Button>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600">
                  Live Site
                </a>
                <a href="#" className="text-blue-600">
                  GitHub
                </a>
              </div>
            </div>
          </Card>
          {/* Limpopo Chefs Academy Portal */}
          <Card>
            <Image
              src="/public/window.svg"
              alt="Limpopo Chefs Academy Portal"
              width={400}
              height={300}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">
                Limpopo Chefs Academy Portal
              </h3>
              <p className="mb-2">
                Full-stack portal for chef training and management.
              </p>
              <Button className="w-full mb-2">View Case Study</Button>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600">
                  Live Site
                </a>
                <a href="#" className="text-blue-600">
                  GitHub
                </a>
              </div>
            </div>
          </Card>
          {/* Supporting Projects */}
          <Card>
            <Image
              src="/public/next.svg"
              alt="Supporting Project"
              width={400}
              height={300}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Supporting Project</h3>
              <p className="mb-2">
                Showcase of React, Next.js, and API integrations.
              </p>
              <Button className="w-full mb-2">View Case Study</Button>
              <div className="flex gap-2">
                <a href="#" className="text-blue-600">
                  Live Site
                </a>
                <a href="#" className="text-blue-600">
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-blue-50">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="bg-white rounded shadow p-6">
              <h3 className="font-bold text-lg mb-4">{group}</h3>
              <ul className="list-disc list-inside">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-16 px-4 bg-white flex flex-col md:flex-row items-center gap-8"
      >
        <Image
          src="/public/file.svg"
          alt="Professional Headshot"
          width={160}
          height={160}
          className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0"
        />
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            A few paragraphs about your story, passion for development, and
            unique value proposition.
          </p>
          <p className="mb-4">Infuse a bit of personality here.</p>
        </div>
      </section>

      {/* Testimonials Section (Optional) */}
      <section id="testimonials" className="py-16 px-4 bg-blue-50">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Contact
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="mb-4 text-center">
            Ready to work together? Get in touch below.
          </p>
          <Textarea placeholder="Your message" className="mb-4 w-full" />
          <Button className="w-full mb-4">Send Message</Button>
          <div className="text-center">
            <p>
              Email:{" "}
              <a href="mailto:your@email.com" className="text-blue-600">
                your@email.com
              </a>
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="text-blue-600">
                LinkedIn
              </a>
              <a href="#" className="text-blue-600">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-blue-900 text-white text-center mt-auto">
        <div>
          &copy; {new Date().getFullYear()} Angus Carey. All rights reserved.
        </div>
        <nav className="mt-2">
          <a href="#home" className="mx-2 hover:underline">
            Home
          </a>
          <a href="#projects" className="mx-2 hover:underline">
            Projects
          </a>
          <a href="#about" className="mx-2 hover:underline">
            About
          </a>
          <a href="#skills" className="mx-2 hover:underline">
            Skills
          </a>
          <a href="#contact" className="mx-2 hover:underline">
            Contact
          </a>
        </nav>
      </footer>
    </main>
  );
}
