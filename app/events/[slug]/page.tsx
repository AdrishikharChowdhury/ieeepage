import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <div className="w-full bg-light-canvas mt-50 pb-16">
      <article className="mx-auto w-full max-w-4xl px-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Events
        </Link>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src={event.picture}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-tags bg-ieee-blue text-white">
          {event.tagLabel}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-[0.64px] text-ink mt-4">
          {event.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-ink/50">
          <span className="flex items-center gap-1.5">
            <Calendar size= {16} />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} />
            {event.time}
          </span>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-ink mb-3">About the Event</h2>
          <p className="text-base leading-relaxed text-ink/70">{event.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-ink mb-3">Agenda</h2>
          <ol className="list-decimal list-inside space-y-2 text-base text-ink/70">
            {event.agenda.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-ink mb-3">Event Details</h2>
          <p className="text-base leading-relaxed text-ink/70">{event.details}</p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-ink/50">
          <MapPin size={16} />
          <span>Organised by {event.organiser}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {event.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full bg-ink/5 text-ink/50"
            >
              {t}
            </span>
          ))}
        </div>

        {event.registrationLink && (
          <div className="mt-10">
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-ieee-blue rounded-full hover:bg-ieee-blue/90 transition-colors"
            >
              <Calendar size={18} />
              Book Your Spot
            </a>
          </div>
        )}
      </article>
    </div>
  );
}
