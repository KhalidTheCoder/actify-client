import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import UpComingEventsCard from "../components/UpComingEventsCard";
import NoEvent from "../components/NoEvent";

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

    fetch(`http://localhost:3000/events/upcoming?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, [triggerSearch, eventType]);

  const handleSearchClick = () => {
    setTriggerSearch((prev) => !prev);
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center">
          <div className="flex w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search Event"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input rounded-r-none bg-[#F5EFE6] focus:bg-white border-2 border-[#AB886D] text-[#493628] w-full placeholder:text-[#AB886D]"
            />
            <button
              onClick={handleSearchClick}
              className="btn rounded-l-none px-4 bg-[#AB886D] border-2 border-[#AB886D]  text-white hover:bg-[#8B6D54] focus:ring-2 focus:ring-[#AB886D]"
            >
              Search
            </button>
          </div>

          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="select w-full md:w-1/4 bg-[#F5EFE6] border-2 border-[#AB886D] text-[#493628] font-semibold placeholder-[#AB886D] focus:outline-none focus:ring-2 focus:ring-[#AB886D] focus:border-[#AB886D] transition"
          >
            <option value="All">All</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Plantation">Plantation</option>
            <option value="Donation">Donation</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {events.length === 0 ? (
          <NoEvent></NoEvent>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {events.map((event) => (
              <UpComingEventsCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
