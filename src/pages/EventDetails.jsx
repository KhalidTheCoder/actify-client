import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch event:", err);
        setLoading(false);
      });
  }, [id]);

  const handleJoinEvent = async (joinedEvent) => {
    try {
      await axios.post("http://localhost:3000/joined-events", joinedEvent);
      Swal.fire("Joined!", "You've successfully joined the event.", "success");
    } catch (err) {
      const status = err.response?.status;

      if (status === 409) {
        Swal.fire(
          "Already Joined",
          "You've already joined this event.",
          "info"
        );
      } else {
        Swal.fire("Error", "Something went wrong. Please try again.", "error");
      }
    }
  };

  if (loading) return <Loading />;

  if (!event) {
    return <p>Empty</p>;
  }

  return (
    <div className="min-h-screen bg-[#F5F1F0] px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-20 text-[#493628]">
        Event Information
      </h1>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <img
            src={event.image}
            alt={event.title}
            className="max-w-sm rounded-xl shadow-2xl object-cover w-full lg:w-[400px] h-auto"
          />

          {/* Left Side: Text Content */}
          <div className="text-[#493628] max-w-lg">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {event.title}
            </h1>
            <p className="text-[#AB886D] font-medium mb-2">
              📍 {event.location}
            </p>
            <p className="text-[#AB886D] font-medium mb-2">📅 {event.date}</p>
            <p className="text-[#AB886D] font-medium italic mb-4">
              Type: {event["event-type"]}
            </p>
            <p className="mb-6">
              {event.description || "No description provided."}
            </p>
            <button
              onClick={() =>
                handleJoinEvent({
                  eventId: event._id,
                  title: event.title,
                  userEmail: user.email,
                  joinedAt: new Date().toISOString(),
                })
              }
              className="px-6 py-2 rounded bg-[#AB886D] text-white hover:bg-[#493628] transition"
            >
              Join Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
