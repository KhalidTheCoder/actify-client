import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import UpComingEventsCard from "../components/UpComingEventsCard";
import Loading from "../components/Loading";
import NoEvent from "../components/NoEvent";

const SomeUpComingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    fetch("https://actify-server.vercel.app/events/upcoming")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => {
        setEvents([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (events.length === 0) return <NoEvent />;

  const displayedEvents = events.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="max-w-lg mb-6 text-4xl text-center font-bold tracking-tight sm:text-5xl md:mx-auto leading-tight">
        Upcoming Events Preview
      </h2>
      <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {displayedEvents.map((event) => (
          <UpComingEventsCard key={event._id} event={event} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/upcoming-events"
          className="btn bg-[#AB886D] border-none hover:bg-[#8B6D54] text-white px-6 py-2 rounded-md font-semibold transition"
        >
          See All Upcoming Events
        </Link>
      </div>
    </section>
  );
};

export default SomeUpComingEvents;
