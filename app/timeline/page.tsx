import { BlogCard } from '@/components/ui/BlogCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { blogPosts } from '@/lib/constants';

const page = () => {
  return (
    <section className="w-full py-20 bg-light-canvas mt-50" id="timeline">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionHeader label="The" accent="Timeline"  />
          <div className="flex gap-4 flex-wrap pb-4 px-6 snap-x snap-mandatory scrollbar-none">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default page
