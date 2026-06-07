"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { chairs } from "@/lib/constants";
import { ChairCard } from "@/components/ui/ChairCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Board = () => {
  return (
    <section id="board" className="w-full py-12 md:py-20 bg-light-canvas" style={{ contain: 'layout style paint' }}>
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeader label="The" accent="Board" />

        <h2 className="text-2xl font-bold text-ink mb-6">Chairs</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 min-[773px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {chairs.map((chair, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
              }}
            >
              <ChairCard {...chair} />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link
            href="/board"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink border border-ink rounded-full transition-colors hover:bg-ink hover:text-white"
          >
            <span>Know More</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Board;
