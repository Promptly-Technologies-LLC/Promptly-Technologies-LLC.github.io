import { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import eventsJSON from '../customizations/events.json';

// Put location information in the event's title
// { title: 'Meeting at Jim's Deli',
// start: '2024-03-16T10:30:00',
// end: '2024-03-16T12:30:00',
// url: 'http://zoom.com/roomxyz' }

export const Events = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      const calendar = new Calendar(calendarRef.current, {
        plugins: [listPlugin],
        initialView: 'listMonth',
        events: eventsJSON,
      });
      calendar.render();

      // Optional: Return a cleanup function to destroy the calendar when the component unmounts
      return () => calendar.destroy();
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <section className="flex flex-col place-items-center py-20 font-sans lg:w-2/3" id="events">
      <div className="headercontainer">
        <h1 className="pt-12 pb-8">Events</h1>
      </div>
      <div className="w-full p-0 h-64" ref={calendarRef} id='calendar'></div>
    </section>
  );
};
