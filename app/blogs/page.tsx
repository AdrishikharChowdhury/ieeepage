import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogs } from "@/lib/constants";
import { BlogCard } from "@/components/ui/BlogCard";

const tagColors: Record<string, string> = {
  Announcement: "bg-ieee-blue text-white",
  Research: "bg-ieee-teal text-white",
  Standard: "bg-ieee-green text-white",
  Award: "bg-ieee-navy text-white",
  Workshop: "bg-ieee-green text-white",
  Summit: "bg-ieee-purple text-white",
  Report: "bg-ieee-blue text-white",
  Lecture: "bg-ieee-teal text-white",
};

export default function BlogsPage() {
  return (
    <div className="w-full bg-light-canvas mt-50 pb-16">
      <section className="mx-auto w-full max-w-7xl px-6">
        <SectionHeader label="Our" accent="Blogs" />
        <div className="flex justify-end mb-6">
          <a
            href="mailto:ieeestcet@stcet.ac.in?subject=New Blog Submission"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-ieee-blue rounded-full hover:bg-ieee-blue/90 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14" /><path d="M5 12h14" />
            </svg>
            Create a Blog
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {blogs.map((post, idx) => (
            <BlogCard
              key={idx}
              title={post.title}
              date={post.date}
              tagLabel={post.tagLabel}
              tagColor={tagColors[post.tagLabel] ?? "bg-ink/10 text-ink/70"}
              author={post.author!}
              email={post.email}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
