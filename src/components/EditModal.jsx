import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { IoMdClose } from "react-icons/io";

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

const EditModal = ({ event, onClose, onSubmit }) => {
  const [eventDate, setEventDate] = useState(
    event.date ? new Date(event.date) : null
  );
  const [formData, setFormData] = useState({
    title: event.title || "",
    description: event.description || "",
    image: event.image || "",
    location: event.location || "",
    date: event.date || "",
    eventType: event["event-type"] || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      title: formData.title,
      description: formData.description,
      "event-type": formData.eventType,
      image: formData.image,
      location: formData.location,
      date: eventDate?.toISOString().split("T")[0],
    };
    onSubmit(updatedEvent);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className="relative bg-white w-full max-w-xl rounded-lg p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-[#493628] text-center">
          Update Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Type
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Select Event Type
              </option>
              <option>Cleanup</option>
              <option>Plantation</option>
              <option>Donation</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              customInput={<CustomInput />}
              required
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="btn  bg-[#AB886D] font-medium text-white hover:bg-[#493628] transition w-full"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
