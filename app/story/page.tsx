import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentCard } from "@/components/ui/ContentCard";
import { milestones, milestoneTagColors, collegeLogos } from "@/lib/constants";
import Image from "next/image";

function MilestoneCard({ date, title, description, idx }: { date: string; title: string; description: string; idx: number }) {
  return (
    <div className="bg-white-card rounded-2xl p-6 border border-ink/10 flex flex-col gap-3">
      <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-tags self-start ${milestoneTagColors[idx % milestoneTagColors.length]}`}>
        {date}
      </span>
      <h2
        className="text-[26px] font-bold leading-[1.1] tracking-[0.52px] text-ink"
        style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}
      >
        {title}
      </h2>
      <p className="text-base leading-relaxed text-ink/70">
        {description}
      </p>
    </div>
  );
}

export default function StoryPage() {
  return (
    <div className="w-full bg-light-canvas mt-50 pb-16">
      <section className="mx-auto w-full max-w-7xl px-6 mb-20">
        <SectionHeader label="About" accent="IEEE STCET SB" />

        <div className="grid gap-6 md:gap-8">
          {milestones.map(({ date, title, description }, idx) => (
            <MilestoneCard key={idx} date={date} title={title} description={description} idx={idx} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 mb-20">
        <SectionHeader label="About" accent="STCET" />

        <ContentCard>
          <p className="text-base leading-relaxed text-ink/70">
            St. Thomas&apos; College of Engineering & Technology in Kolkata is a
            prestigious institution renowned for its academic excellence and
            holistic student development. With a wide range of engineering
            programs, experienced faculty, state-of-the-art infrastructure, and
            emphasis on research and innovation, the college provides a
            comprehensive education. It also offers a vibrant campus life,
            encouraging extracurricular activities and industry interactions,
            shaping students into competent professionals and responsible
            citizens, ready to make significant contributions to society.
          </p>
        </ContentCard>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 mb-20">
        <SectionHeader label="Brief" accent="History" />

        <div className="grid gap-6 md:gap-8 mb-12">
          <ContentCard>
            <p className="text-base leading-relaxed text-ink/70">
              In a bid to supplement the efforts of the West Bengal Government
              College and the All India Council for Technical Education (AICTE) in
              expanding the infrastructure of technical education in this region
              it was contemplated in 2000 to establish an Engineering College for
              the benefit of students in West Bengal and also in the region. To
              give the idea a shape, St. Thomas&apos; College of Engineering &
              Technology was established with the intention to impart quality
              technical education to the students and imbibe confidence into the
              young talents graduating from the institution to stand up to the
              challenges of life with confidence. To ensure this, a plan was made
              so that it could become a seat of excellence in due course of time.
              Based on this preamble, St. Thomas&apos; College of Engineering &
              Technology at 4, Diamond Harbour Road, Kidderpore, Kolkata 700023,
              West Bengal came into being on 29th August 2000.
            </p>
          </ContentCard>

          <ContentCard>
            <p className="text-base leading-relaxed text-ink/70">
              The college is affiliated to Maulana Abul Kalam Azad University of
              Technology, West Bengal (MAKAUT, WB), formerly known as West Bengal
              University of Technology (WBUT).
            </p>
          </ContentCard>

          <ContentCard>
            <p className="text-base leading-relaxed text-ink/70">
              The college is approved by the All India Council for Technical
              Education (AICTE). All the courses are approved by AICTE and
              affiliated to MAKAUT,WB. The college also offers NBA accredited
              programmes.
            </p>
          </ContentCard>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-white-card rounded-2xl p-4 border border-ink/10 flex items-center justify-center">
              <Image
                src="/STCET-Building.webp"
                alt="STCET Building"
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="flex justify-center flex-row md:flex-col gap-4">
            {collegeLogos.map((logo) => (
              <div
                key={logo.alt}
                className="bg-white-card rounded-xl p-6 border border-ink/10 flex items-center justify-center"
              >
                <Image src={logo.src} alt={logo.alt} width={80} height={40} className="object-cover aspect-square size-25" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
