import { blogPosts } from '@/lib/constants';
import React from 'react'
import { BlogCard } from './ui/BlogCard';

const HighLights = () => {
  return (
    <section className="w-full py-20 bg-white-card" id="highlights">
        <div className="mx-auto w-full max-w-7xl px-6">
          <h2
            className="text-[40px] font-bold leading-none tracking-[0.8px] text-ink mb-10"
            style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}
          >
            Latest Updates
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default HighLights
