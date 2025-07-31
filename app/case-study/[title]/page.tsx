import React from "react";
import Image from "next/image";
import { caseStudies } from "@/lib/caseStudies";
import Link from "next/link";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default async function CaseStudyPage({
  params,
}: {
  params: { title: string };
}) {
  // Await params for Next.js dynamic route
  const { title } = await Promise.resolve(params);
  // Find the project by title (case-insensitive)
  const project = caseStudies.find(
    (card) =>
      card.title.replace(/\s+/g, "-").toLowerCase() === title.toLowerCase()
  );

  if (!project) {
    return <div className="p-8 text-center">Project not found.</div>;
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-6 px-2 md:py-12 md:px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        {project.title} Case Study
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 w-full max-w-5xl mx-auto">
        {project.images.map((img, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <div className="bg-white rounded-lg shadow flex flex-col items-center p-2 w-full h-auto cursor-pointer hover:ring-2 hover:ring-blue-400 transition">
                <Image
                  src={img.src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  width={600}
                  height={400}
                  className="object-cover rounded mb-2 w-full h-auto"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="text-sm md:text-base text-gray-700 text-center mt-1 px-2">
                  {img.caption}
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center justify-center max-w-3xl w-full bg-white p-6">
              <Image
                src={img.src}
                alt={`${project.title} screenshot ${idx + 1}`}
                width={1200}
                height={800}
                className="object-contain rounded shadow w-full h-auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="text-base text-gray-700 text-center mt-4 px-2">
                {img.caption}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      {project.video && (
        <div className="w-full flex justify-center mb-8">
          <video
            src={project.video}
            controls
            className="rounded-lg shadow w-full max-w-3xl"
            style={{
              background: "#000",
              width: "100%",
              height: "100%",
              display: "block",
            }}
          />
        </div>
      )}
      <div className="max-w-2xl bg-blue-50 rounded shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Project Breakdown</h2>
        <p>{project.breakdown}</p>
      </div>
      <Link href="/" className="text-blue-600 hover:underline">
        Back to Portfolio
      </Link>
    </main>
  );
}
