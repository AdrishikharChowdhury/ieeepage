"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import Link from "next/link";
import { eventImages } from "@/lib/constants";
import { Carousel_005 } from "./ui/skiper-ui/skiper51";

const carouselImages = eventImages.map((img) => ({
  src: img.src,
  alt: img.alt,
}));

const HighLights = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12 md:py-20 bg-white-card" id="highlights" style={{ contain: 'layout style paint' }}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeader label="The" accent="Highlights" />
        <div className="flex justify-center w-full">
          <Carousel_005
          images={carouselImages}
          showPagination
          showNavigation
          loop
          autoplay
          spaceBetween={0}
        />
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/highlights"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink border border-ink rounded-full transition-colors hover:bg-ink hover:text-white"
          >
            <span>View All</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      </motion.section>
  );
};

export default HighLights;
