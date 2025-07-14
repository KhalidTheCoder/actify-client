import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import UpComingEventsCard from "../components/UpComingEventsCard";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/events/upcoming")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading></Loading>;

  if (events.length === 0) {
    return <p>No Event</p>;
  }
  return (
   <div className="min-h-screen bg-[#E4E0E1]">
     <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#493628]">Upcoming Events</h1>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {events.map((event) => (
          <UpComingEventsCard
            key={event._id}
            event={event}
          ></UpComingEventsCard>
        ))}
      </div>
      </div>
    </div>
   </div>
  );
};

export default UpcomingEvents;
