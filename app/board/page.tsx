import { chairs } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChairCard } from "@/components/ui/ChairCard";

export default function BoardPage() {
  return (
    <div className="w-full bg-light-canvas mt-50 pb-16 min-h-screen">
      <section className="mx-auto w-full max-w-7xl px-6 mb-20">
        <SectionHeader label="The" accent="Board" />

        <h2 className="text-2xl font-bold text-ink mb-6">Chairs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {chairs.map((chair, idx) => (
            <ChairCard key={idx} {...chair} />
          ))}
        </div>
      </section>
    </div>
  );
}
