import { caseStudies } from "@/lib/caseStudies";
import { notFound } from "next/navigation";
import Image from "next/image";

type CaseStudy = {
  title: string;
  images: { src: string; caption: string }[];
  breakdown: string;
  video: string | null;
  links: { label: string; href: string }[];
};
export default function Page({ params }) {
  // Find the case study by title (case-insensitive)
  const caseStudy: CaseStudy | undefined = caseStudies.find(
    (cs) =>
      cs.title
        .replace(/Headless Shopify/g, "Shopify")
        .toLowerCase()
        .replace(/\s+/g, "-") === params.slug
  );

  if (!caseStudy) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        {caseStudy.title.replace(/Headless Shopify/g, "Shopify")}
      </h1>
      {caseStudy.video ? (
        <video
          src={caseStudy.video}
          controls
          width={800}
          height={450}
          className="w-full max-w-2xl h-96 object-contain rounded mb-6 bg-black"
          poster={caseStudy.images?.[0]?.src}
        />
      ) : (
        <Image
          src={caseStudy.images?.[0]?.src}
          alt={caseStudy.title}
          width={800}
          height={450}
          className="w-full max-w-2xl h-96 object-cover rounded mb-6"
        />
      )}
      <p className="max-w-2xl text-lg mb-8 text-center">
        {caseStudy.breakdown.replace(/Headless Shopify/g, "Shopify")}
      </p>
      {/* Add more details here as needed, e.g. links, tech stack, etc. */}
      <div className="flex gap-4 justify-center">
        {caseStudy.links?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-blue-600 underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  );
}
