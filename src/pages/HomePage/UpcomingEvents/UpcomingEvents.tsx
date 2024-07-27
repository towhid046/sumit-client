import React from 'react';

const events = [
  { title: 'Math Workshop', date: 'August 1, 2024', description: 'Join our intensive math workshop.' },
  { title: 'Science Fair', date: 'September 10, 2024', description: 'Showcase your science projects.' },
];

const UpcomingEvents: React.FC = () => {
  return (
    <section className="upcoming-events py-12 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {events.map((event, index) => (
            <div key={index} className="event-card p-6 border rounded">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;