import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    className="input input-bordered w-full text-left py-2 px-3 focus:outline-none focus:ring-2 focus:ring-neutral focus:border-transparent"
  >
    {value || "Select event date"}
  </button>
));

const CreateEvent = () => {
  const [eventDate, setEventDate] = useState(null);

  return (
    <div className="max-w-7xl mx-auto">
      <h1>Create Event</h1>

      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Event Details</legend>

          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Event Title"
          />

          <label className="label">Description</label>
          <textarea
            className="textarea"
            name="description"
            placeholder="Description"
          ></textarea>

          <label className="label">Event Type</label>
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Select Event Type</option>
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Donation</option>
          </select>

          <label className="label">Image URL</label>
          <input
            type="URL"
            className="input"
            name="image"
            placeholder="Image URL"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            placeholder="Location"
          />

          <label className="label">date</label>
          
          <label className="label">Event Date</label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              customInput={<CustomInput />}
              required
            />

            <button type="submit" className="btn w-full mt-3">Create Event</button>
          
        </fieldset>
        
      </form>
    </div>
  );
};

export default CreateEvent;
