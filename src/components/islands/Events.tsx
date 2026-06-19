import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import eventsJSON from '../../customizations/events.json';
import SubscribeForm from './SubscribeForm';
import '../Events.css';

interface Props {
  convertKitFormId: string;
  convertKitDataUid: string;
}

export default function Events({ convertKitFormId, convertKitDataUid }: Props) {
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
        <h2 className="pt-12 pb-8">Events</h2>
      </div>
      <div className="w-full p-0 h-64" ref={calendarRef} id="calendar" />
      <SubscribeForm convertKitFormId={convertKitFormId} convertKitDataUid={convertKitDataUid} />
    </section>
  );
}
