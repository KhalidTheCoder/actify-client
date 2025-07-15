import React from "react";
import { Link } from "react-router";
import { FaMapLocation } from "react-icons/fa6";

const UpComingEventsCard = ({ event }) => {
  const {
    _id,
    title,
    image,
    location,
    date,
    ["event-type"]: eventType,
  } = event;
  return (
    <div className="bg-[#E4E0E1] shadow-lg rounded-xl w-full max-w-md overflow-hidden transition transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-xl"
      />
     <div className="px-10 py-10">
         <h2 className="text-xl font-semibold text-[#493628]">{title}</h2>
      <p className="text-sm font-medium text-[#493628] flex items-center gap-1 mt-1"> <span className="text-[#493628]">
        <FaMapLocation /></span> {location}</p>
      <p className="text-sm font-medium text-[#493628] italic">{eventType}</p>
      <p className="text-sm font-medium text-[#493628] mt-1">📅 {date}</p>

      <Link to={`/event/${event.eventId || event._id}`}>
        <button className="mt-4 w-full py-2 rounded bg-[#AB886D] font-medium text-white hover:bg-[#493628] transition duration-300">View Event</button>
      </Link>
     </div>
    </div>
  );
};

export default UpComingEventsCard;
