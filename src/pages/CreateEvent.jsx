import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

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
  const navigate = useNavigate();
  const [eventDate, setEventDate] = useState(null);
  const { user } = useContext(AuthContext);
  const token = user?.accessToken;
  

  const handleAddEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (eventDate) {
      data.date = format(eventDate, "yyyy-MM-dd");
      data.email = user?.email;
    } else {
      return toast.error("Please select an event date.");
    }

    if (!data.title || data.title.trim().length < 3) {
      return toast.error("Title must be at least 3 characters long.");
    }

    
    axios
      .post("http://localhost:3000/events", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Event Has Been Created!!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/upcoming-events");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1>Create Event</h1>

      <form onSubmit={handleAddEvent}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs max-w-6xl border p-4">
          <legend className="fieldset-legend">Event Details</legend>

          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            name="title"
            placeholder="Event Title"
            required
          />

          <label className="label">Description</label>
          <textarea
            className="textarea"
            name="description"
            placeholder="Description"
            required
          ></textarea>

          <label className="label">Event Type</label>
          <select
            defaultValue="Pick a color"
            name="event-type"
            className="select"
            required
          >
            <option disabled={true}>Select Event Type</option>
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Donation</option>
            <option>Others</option>
          </select>

          <label className="label">Image URL</label>
          <input
            type="URL"
            className="input"
            name="image"
            placeholder="Image URL"
            required
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input"
            name="location"
            placeholder="Location"
            required
          />

          <label className="label">Event Date</label>
          <DatePicker
            selected={eventDate}
            onChange={(date) => setEventDate(date)}
            minDate={new Date()}
            customInput={<CustomInput />}
            required
          />

          <button type="submit" className="btn w-full mt-3">
            Create Event
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateEvent;
