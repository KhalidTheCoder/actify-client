import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import UpComingEventsCard from "../components/UpComingEventsCard";
import NoEvent from "../components/NoEvent";
import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("All");
  const [triggerSearch, setTriggerSearch] = useState(false);

  const fetchEvents = () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (searchTerm) params.append("search", searchTerm);
    if (eventType !== "All") params.append("type", eventType);

    fetch(
      `https://actify-server.vercel.app/events/upcoming?${params.toString()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
        AOS.refresh();
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });

    fetchEvents();
  }, [triggerSearch, eventType]);

  const handleSearchClick = () => {
    setTriggerSearch((prev) => !prev);
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1
          data-aos="fade-down"
          className="text-4xl font-extrabold text-center mb-10"
        >
          Upcoming Events
        </h1>

        <div
          className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="flex w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <input
              type="text"
              placeholder="Search Event"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input rounded-r-none bg-[#F5EFE6] focus:bg-white border-2 border-[#AB886D] text-[#493628] w-full placeholder:text-[#AB886D]"
            />
            <button
              onClick={handleSearchClick}
              className="btn rounded-l-none px-4 bg-[#AB886D] border-2 border-[#AB886D] text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]"
            >
              Search
            </button>
          </div>

          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="select w-full md:w-1/4 bg-[#F5EFE6] border-2 border-[#AB886D] text-[#493628] font-semibold focus:outline-none focus:ring-2 focus:ring-[#AB886D] transition"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <option value="All">All</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {events.length === 0 ? (
          <NoEvent />
        ) : (
          <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch">
            {events.map((event, index) => (
              <div
                key={event._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex justify-center w-full h-full"
              >
                <UpComingEventsCard event={event} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
