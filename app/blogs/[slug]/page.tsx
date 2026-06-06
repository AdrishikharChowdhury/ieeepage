import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  return (
    <div className="w-full bg-light-canvas mt-50 pb-16">
      <article className="mx-auto w-full max-w-3xl px-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>
        <div className="flex items-center gap-3 py-6 border-y border-ink/5">
          <img
            src={`https://api.dicebear.com/10.x/triangles/svg?seed=${post.author}`}
            alt={post.author!}
            className="size-12 rounded-full bg-ink/5 shrink-0"
          />
          <div>
            <p className="text-sm font-semibold text-ink">{post.author}</p>
            {post.email && (
              <a
                href={`mailto:${post.email}`}
                className="text-xs text-ieee-blue hover:underline"
              >
                {post.email}
              </a>
            )}
          </div>
        </div>

        <span className="inline-block text-xs font-bold px-3 py-1.5 mt-6 rounded-tags bg-ieee-blue text-white">
          {post.tagLabel}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-[0.64px] text-ink mt-4">
          {post.title}
        </h1>

        <p className="text-sm text-ink/50 mt-2">{post.date}</p>

        {post.description && (
          <p className="text-lg leading-relaxed text-ink/70 mt-8">
            {post.description}
          </p>
        )}

        
      </article>
    </div>
  );
}
