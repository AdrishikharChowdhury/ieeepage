import { EventCard } from '@/components/ui/EventCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { events } from '@/lib/constants';

const EventsPage = () => {
  return (
    <section className="w-full py-20 bg-light-canvas mt-50" id="timeline">
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeader label="The" accent="Events" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={i} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
