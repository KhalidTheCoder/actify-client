import React from 'react';

const ManageEventsCard = ({ event, onEdit }) => {

      const { title, image, location, date, description, ["event-type"]: type } = event;
    return (
         <div className="card bg-[#E4E0E1] w-96 shadow-md text-[#493628] transition transform hover:scale-[1.02] hover:shadow-2xl duration-300">
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt={title}
          className="rounded-xl h-52 w-full object-cover" 
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{title}</h2>

        <p className="text-[#493628] font-medium">📍 {location}</p>
        <p className="text-[#493628] font-medium">📅 {date}</p>
        <p className="italic text-[#493628] font-medium mb-2">Type: {type}</p>

        <p className="text-sm text-[#493628] font-medium mb-4">{description || "No description provided."}</p>

        <div className="card-actions">
          <button
            onClick={onEdit}
            className="btn bg-[#AB886D] text-white hover:bg-[#493628] border-none"
          >
            Edit Event
          </button>
        </div>
      </div>
    </div>
    );
};

export default ManageEventsCard;