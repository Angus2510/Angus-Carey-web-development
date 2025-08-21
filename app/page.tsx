"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { projectCards } from "@/lib/projectCards";
import { testimonials } from "@/lib/testimonials";

// Placeholder for new components
// import Navbar from "../components/Navbar";
// import ContactForm from "../components/ContactForm";
// import Testimonial from "../components/Testimonial";

const skills = {
  "Core Languages": ["JavaScript", "TypeScript", "HTML", "CSS", "tailwindcss"],
  "Frontend Frameworks": ["React", "Next.js"],
  "Backend/Databases": ["Node.js", "Express", "MongoDB", "Supabase"],
  "Tools & Methodologies": ["Git", "Jest", "CI/CD", "Agile"],
  "E-commerce & Shopify": [
    "Shopify Development",
    "Theme Customization",
    "Storefront API",
    "Custom Apps",
  ],
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:angiscarey1@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailto;
    setMessage("");
  };
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header/Navigation Bar */}
      <header className="w-full flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 md:py-1 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center">
          <Image
            src="/logo-new.svg"
            alt="Logo"
            width={48}
            height={48}
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-[100px] md:w-[100px]"
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
        <Button
          className="ml-2 md:ml-4 text-base lg:text-xl hidden md:inline-flex"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
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
        className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Angus Carey
          </span>
          <h1 className="text-xl sm:text-2xl font-semibold mb-6 px-4 leading-relaxed">
            Shopify Developer | Next.js & MERN Specialist
          </h1>
        </div>
        <p className="text-lg sm:text-xl mb-8 max-w-sm sm:max-w-md mx-auto px-4 leading-relaxed">
          Building lightning-fast, custom Shopify storefronts that drive
          conversions.
        </p>
        <a
          href="https://08nzx5-kb.myshopify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-64 py-3 text-lg font-medium">
            View Shopify Demo
          </Button>
        </a>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projectCards.map((card) => {
            // Try to get video from caseStudies if not present in projectCards
            const title = card.title.replace(/Headless Shopify/g, "Shopify");
            const description = card.description.replace(
              /Headless Shopify/g,
              "Shopify"
            );
            return (
              <Card
                key={title}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  {"video" in card &&
                  typeof card.video === "string" &&
                  card.video ? (
                    <video
                      src={card.video}
                      controls
                      width={600}
                      height={400}
                      className="w-full h-56 object-contain rounded-t bg-black"
                      poster={card.image}
                    />
                  ) : (
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={600}
                      height={400}
                      className="w-full h-56 object-contain rounded-t bg-white"
                    />
                  )}
                  <div className="p-4 sm:p-6 min-h-[120px] flex flex-col">
                    <h3 className="font-bold text-xl sm:text-2xl mb-3">
                      {title}
                    </h3>
                    <p className="text-base sm:text-lg mb-4 flex-1 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col gap-3 mt-auto">
                  <Link
                    href={`/case-study/${title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="w-full"
                    passHref
                  >
                    <Button className="w-full py-3 text-base sm:text-lg">
                      {card.caseStudy}
                    </Button>
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
      <section
        id="skills"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Skills
        </h2>
        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 max-w-7xl mx-auto">
          {Object.entries(skills)
            .slice(0, 3)
            .map(([group, items]) => (
              <div
                key={group}
                className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
                }}
              >
                <h3 className="font-bold text-lg mb-4 text-blue-900">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        {/* Bottom row: 2 cards centered below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
          {Object.entries(skills)
            .slice(3, 5)
            .map(([group, items]) => (
              <div
                key={group}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
                }}
              >
                <h3 className="font-bold text-lg mb-4 text-blue-900">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 sm:w-64 md:w-80 flex-shrink-0 mb-6 md:mb-0">
              <Image
                src="/profile-pic.png"
                alt="Professional Headshot"
                width={300}
                height={300}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
                About Me
              </h2>
              <div className="text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  I&apos;m a highly motivated and adaptable Full-Stack Web
                  Developer with deep expertise in the MERN stack, specializing
                  in Next.js, React, TypeScript, Prisma, and Tailwind CSS.
                </p>
                <p>
                  I&apos;m also a Shopify developer focused on building
                  lightning-fast, custom storefronts that are optimized to drive
                  conversions and enhance user experience.
                </p>
                <p>
                  As the sole developer behind a comprehensive educational
                  portal for Limpopo Chefs Academy, I&apos;ve delivered robust,
                  scalable, and intuitive web solutions entirely from the ground
                  up.
                </p>
                <p>
                  My full-stack skill set includes REST API development, secure
                  authentication with NextAuth, database management (MongoDB,
                  Supabase), and AWS S3 integration.
                </p>
                <p>
                  I&apos;m currently open to part-time or freelance remote
                  opportunities where I can bring value through full-stack or
                  Shopify development, collaborate with great teams, and
                  contribute to innovative, client-focused projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-blue-50"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          What Clients Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {testimonials.length > 3 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8 py-2">
              View More Testimonials
            </Button>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 px-3 sm:px-4 md:px-6 bg-white"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Contact
        </h2>
        <form
          className="max-w-lg mx-auto w-full px-3 sm:px-0"
          onSubmit={handleSend}
        >
          <p className="mb-4 text-center text-base sm:text-lg">
            Ready to work together? Get in touch below.
          </p>
          <Textarea
            placeholder="Your message"
            className="mb-4 w-full text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-center mb-4">
            <Button className="px-8 py-3" type="submit">
              Send Message
            </Button>
          </div>
          <div className="text-center">
            <p>
              Email:{" "}
              <a href="mailto:anguscarey1@gmail.com" className="text-blue-600">
                anguscarey1@gmail.com
              </a>
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/angus-carey-426817268/"
                className="text-black"
                aria-label="LinkedIn"
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
              <a
                href="https://github.com/Angus2510"
                className="text-black"
                aria-label="GitHub"
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
            </div>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 bg-blue-900 text-white text-center mt-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm sm:text-base mb-4">
            &copy; {new Date().getFullYear()} Angus Carey. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base">
            <a href="#home" className="hover:text-blue-300 transition-colors">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-blue-300 transition-colors"
            >
              Projects
            </a>
            <a href="#about" className="hover:text-blue-300 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-300 transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-blue-300 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
