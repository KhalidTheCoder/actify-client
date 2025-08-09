import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import UpComingEventsCard from "../components/UpComingEventsCard";
import Loading from "../components/Loading";
import NoEvent from "../components/NoEvent";
import AOS from "aos";
import "aos/dist/aos.css";

const SomeUpComingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      anchorPlacement: "top-bottom",
    });

    setLoading(true);
    fetch("https://actify-server.vercel.app/events/upcoming")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
        AOS.refresh();
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
      <h2
        className="max-w-lg mb-6 text-4xl text-center font-bold tracking-tight sm:text-5xl md:mx-auto leading-tight"
        data-aos="zoom-in"
      >
        Upcoming Events Preview
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-center md:text-lg font-medium max-w-xl mx-auto mb-10"
      >
        Explore the latest local events and join your community in making a
        positive impact.
      </p>
      <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {displayedEvents.map((event, idx) => (
          <div
            key={event._id}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={idx * 200}
            data-aos-anchor-placement="top-bottom"
            className="w-full flex justify-center"
          >
            <UpComingEventsCard event={event} />
          </div>
        ))}
      </div>

      <div
        className="flex justify-center mt-8"
        data-aos="zoom-in"
        data-aos-delay={displayedEvents.length * 200}
      >
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
