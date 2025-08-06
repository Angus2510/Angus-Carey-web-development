import { caseStudies } from "@/lib/caseStudies";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type CaseStudy = {
  title: string;
  images: { src: string; caption: string }[];
  breakdown: string;
  video: string | null;
  links: { label: string; href: string }[];
};
export default async function Page({ params }) {
  // Find the case study by title (case-insensitive)
  const { slug } = await params;
  const caseStudy: CaseStudy | undefined = caseStudies.find(
    (cs) =>
      cs.title
        .replace(/Headless Shopify/g, "Shopify")
        .toLowerCase()
        .replace(/\s+/g, "-") === slug
  );

  if (!caseStudy) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        {caseStudy.title.replace(/Headless Shopify/g, "Shopify")}
      </h1>
      {/* Main video(s) or first image */}
      {caseStudy.video ? (
        Array.isArray(caseStudy.video) ? (
          <div className="w-full max-w-2xl flex flex-col gap-6 mb-6">
            {caseStudy.video.map((src, idx) => (
              <video
                key={src}
                src={src}
                controls
                width={800}
                height={450}
                className="w-full h-96 object-contain rounded bg-black"
                poster={caseStudy.images?.[0]?.src}
              />
            ))}
          </div>
        ) : (
          <video
            src={caseStudy.video}
            controls
            width={800}
            height={450}
            className="w-full max-w-2xl h-96 object-contain rounded mb-6 bg-black"
            poster={caseStudy.images?.[0]?.src}
          />
        )
      ) : (
        <Image
          src={caseStudy.images?.[0]?.src}
          alt={caseStudy.title}
          width={800}
          height={450}
          className="w-full max-w-2xl h-96 object-cover rounded mb-6"
        />
      )}
      {/* All images grid */}
      {caseStudy.images?.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 w-full max-w-2xl">
          {caseStudy.images.map((img, idx) => (
            <Dialog key={img.src + idx}>
              <DialogTrigger asChild>
                <div className="flex flex-col items-center cursor-pointer group">
                  <Image
                    src={img.src}
                    alt={img.caption || caseStudy.title}
                    width={400}
                    height={225}
                    className="rounded shadow w-full object-cover mb-2 group-hover:scale-105 transition-transform"
                  />
                  {img.caption && (
                    <span className="text-sm text-gray-600 text-center">
                      {img.caption}
                    </span>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl">
                <Image
                  src={img.src}
                  alt={img.caption || caseStudy.title}
                  width={800}
                  height={450}
                  className="rounded-xl shadow-xl w-full h-auto object-contain mb-4"
                />
                {img.caption && (
                  <span className="text-base text-gray-700 text-center">
                    {img.caption}
                  </span>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
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
      {/* Bottom Back to Portfolio Button */}
      <div className="w-full flex justify-center mt-12 max-w-2xl">
        <Button className="w-full flex justify-center items-center">
          <Link href="/" className="w-full text-center">
            ← Back to Portfolio
          </Link>
        </Button>
      </div>
    </main>
  );
}
