import { EventCard } from './ui/EventCard';
import type { EventCardProps } from './ui/EventCard';
import Link from 'next/link';
import { SectionHeader } from './ui/SectionHeader';
import { events } from '@/lib/constants';

const Events = () => {
  return (
    <section className="w-full py-20 bg-white-card" id="events">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader label="The" accent="Events"  />
          <div className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scrollbar-none">
            {events.map((post, i) => (
              <EventCard key={i} {...post as EventCardProps} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
          <Link
            href="/events"
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
  )
}

export default Events
