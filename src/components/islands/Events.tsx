import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import eventsJSON from '../../customizations/events.json';
import SubscribeForm from './SubscribeForm';
import '../Events.css';

export default function Events() {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!calendarRef.current) return;

    const calendar = new Calendar(calendarRef.current, {
      plugins: [listPlugin],
      initialView: 'listMonth',
      events: eventsJSON,
      headerToolbar: {
        right: 'prev,next',
      },
    });
    calendar.render();

    return () => calendar.destroy();
  }, []);

  return (
    <section className="events" id="events">
      <div className="headercontainer">
        <h1 className="pt-12 pb-8">Events</h1>
      </div>
      <div className="w-full p-0 h-64" ref={calendarRef} id="calendar" />
      <SubscribeForm />
    </section>
  );
}
