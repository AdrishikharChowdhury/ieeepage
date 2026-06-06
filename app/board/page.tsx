import { branchAdvisors, chairs } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChairCard } from "@/components/ui/ChairCard";
import { SectionSubHeader } from "@/components/ui/SectionSubHeader";
import SkeletonWrapper from "@/components/SkeletonWrapper";

export default function BoardPage() {
  return (
    <div className="w-full bg-light-canvas mt-50 pb-16 min-h-screen">
      <section className="mx-auto w-full max-w-7xl px-6 mb-20">
        <SectionHeader label="The" accent="Board" />
        <h1 className="text-3xl md:text-4xl font-bold leading-[0.95] tracking-[1.28px] text-ink mb-10 -mt-6">
          The Faces Of <span className="text-ieee-blue">IEEE SB</span>
        </h1>
        <SkeletonWrapper>
          <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {chairs.map((chair, idx) => (
                <ChairCard key={idx} {...chair} />
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {branchAdvisors.map((chair, idx) => (
                <ChairCard key={idx} {...chair} />
              ))}
            </div>
          </div>
        </SkeletonWrapper>
      </section>
    </div>
  );
}
