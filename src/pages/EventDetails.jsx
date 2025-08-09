import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import NoEventDetails from "../components/NoEventDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    axios
      .get(`https://actify-server.vercel.app/events/${id}`)
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
      await axios.post(
        "https://actify-server.vercel.app/joined-events",
        joinedEvent,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
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
    return <NoEventDetails />;
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <h1
        className="text-4xl font-extrabold text-center mb-20"
        data-aos="fade-down"
      >
        Event Information
      </h1>

      <div className="hero" data-aos="fade-up">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <img
            src={event.image}
            alt={event.title}
            className="max-w-sm rounded-xl shadow-2xl object-cover w-full lg:w-[400px] h-auto"
            data-aos="zoom-in"
          />

          <div className="max-w-lg" data-aos="fade-right">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {event.title}
            </h1>
            <p
              className="font-medium mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              📍 {event.location}
            </p>
            <p
              className="font-medium mb-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              📅 {event.date}
            </p>
            <p
              className="font-medium italic mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Type: {event["event-type"]}
            </p>
            <p className="mb-6" data-aos="fade-up" data-aos-delay="400">
              {event.description || "No description provided."}
            </p>
            <button
              onClick={() =>
                handleJoinEvent({
                  eventId: event._id,
                  title: event.title,
                  userEmail: user.email,
                  joinedAt: new Date().toISOString(),
                  image: event.image,
                  location: event.location,
                  date: event.date,
                  "event-type": event["event-type"],
                })
              }
              className="px-6 py-2 rounded bg-[#AB886D] font-medium text-white hover:bg-[#493628] transition"
              data-aos="fade-up"
              data-aos-delay="500"
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
