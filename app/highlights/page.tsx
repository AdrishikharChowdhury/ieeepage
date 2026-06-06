"use client";
import Masonry from "@/components/Masonry";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { eventImages } from "@/lib/constants";
import SkeletonWrapper from "@/components/SkeletonWrapper";

const HighlightsPage = () => {
  return (
    <div className="w-full bg-light-canvas mt-50 pb-16 min-h-screen">
      <section className="mx-auto w-full max-w-7xl px-6 mb-20">
        <SectionHeader label="The" accent="Highlights" />
        <SkeletonWrapper>
          <Masonry
            items={eventImages}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </SkeletonWrapper>
      </section>
    </div>
  );
};

export default HighlightsPage;
