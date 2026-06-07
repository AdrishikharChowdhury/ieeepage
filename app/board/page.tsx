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
        <SkeletonWrapper>
          <div className="flex flex-col items-center gap-10">
            <div className="w-full">
              <SectionSubHeader label="The" accent="Chairs" />
              <div className="grid grid-cols-1 min-[773px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {chairs.map((chair, idx) => (
                  <ChairCard key={idx} {...chair} />
                ))}
              </div>
            </div>
            <div className="w-full">
              <SectionSubHeader label="Branch" accent="Advisors" />
              <div className="grid grid-cols-1 min-[773px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {branchAdvisors.map((chair, idx) => (
                  <ChairCard key={idx} {...chair} />
                ))}
              </div>
            </div>
          </div>
        </SkeletonWrapper>
      </section>
    </div>
  );
}
