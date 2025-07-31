"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { projectCards } from "@/lib/projectCards";
import { caseStudies } from "@/lib/caseStudies";

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
            src="/logo-new.svg"
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
            Shopify Developer | Next.js & React Specialist
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
          {projectCards.map((card) => {
            // Try to get video from caseStudies if not present in projectCards
            const caseStudy = caseStudies.find(
              (cs) =>
                cs.title.replace(/Headless Shopify/g, "Shopify") ===
                card.title.replace(/Headless Shopify/g, "Shopify")
            );
            const videoSrc = card.video || (caseStudy && caseStudy.video);
            const title = card.title.replace(/Headless Shopify/g, "Shopify");
            const description = card.description.replace(
              /Headless Shopify/g,
              "Shopify"
            );
            return (
              <Card key={title}>
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    controls
                    width={600}
                    height={400}
                    className="w-full h-72 object-contain rounded-t bg-black"
                    poster={card.image}
                  />
                ) : (
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover rounded-t"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{title}</h3>
                  <p className="mb-2">{description}</p>
                  <Link
                    href={`/case-study/${title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="w-full mb-2"
                    passHref
                  >
                    <Button className="w-full mb-2">{card.caseStudy}</Button>
                  </Link>
                  <div className="flex gap-2">
                    {card.links.map((link) => {
                      if (link.label.toLowerCase() === "github") {
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            className="text-blue-600"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="inline-block align-middle"
                            >
                              <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
                            </svg>
                          </a>
                        );
                      }
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
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
          src="/profile-pic.png"
          alt="Professional Headshot"
          width={300}
          height={300}
          className=" rounded-full object-cover mb-6 md:mb-0"
        />
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I’m a highly motivated and adaptable Full-Stack Web Developer with
            deep expertise in the MERN stack, specializing in Next.js, React,
            TypeScript, Prisma, and Tailwind CSS. I’m also a Shopify developer
            focused on building lightning-fast, custom storefronts that are
            optimized to drive conversions and enhance user experience. As the
            sole developer behind a comprehensive educational portal for Limpopo
            Chefs Academy, I’ve delivered robust, scalable, and intuitive web
            solutions entirely from the ground up. My full-stack skill set
            includes REST API development, secure authentication with NextAuth,
            database management (MongoDB, Supabase), and AWS S3 integration.
            Whether it’s crafting a high-performing Shopify store or
            architecting full-stack applications from scratch, I thrive in
            remote, agile environments and enjoy turning complex ideas into
            impactful digital products. I’m currently open to part-time or
            freelance remote opportunities where I can bring value through
            full-stack or Shopify development, collaborate with great teams, and
            contribute to innovative, client-focused projects.
          </p>
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
              <a href="#" className="text-blue-600" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" className="text-blue-600" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block align-middle"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
                </svg>
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
