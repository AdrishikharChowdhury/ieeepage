import { EventCard } from '@/components/ui/EventCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { events } from '@/lib/constants';
import type { EventCardProps } from '@/components/ui/EventCard';

const page = () => {
  return (
    <section className="w-full py-20 bg-light-canvas mt-50" id="timeline">
        <div className="mx-auto w-full max-w-7xl px-6">
          <SectionHeader label="The" accent="Events"  />
          <div className="flex gap-4 flex-wrap pb-4 px-6 snap-x snap-mandatory scrollbar-none">
            {events.map((post, i) => (
              <EventCard key={i} {...post as EventCardProps} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default page
