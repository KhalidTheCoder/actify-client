import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
import ManageEventsCard from "../components/ManageEventsCard";
import EditModal from "../components/EditModal";
import NoCreatedEvent from "../components/NoCreatedEvent";
import AOS from "aos";
import "aos/dist/aos.css";

const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [manageEvents, setManageEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = user?.accessToken;

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });

    if (!user?.email) return;

    axios
      .get(
        `https://actify-server.vercel.app/manage/events?email=${user.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setManageEvents(res.data);
        setLoading(false);
        AOS.refresh();
      })
      .catch((err) => {
        console.error("Error fetching managed events", err);
        setLoading(false);
      });
  }, [user?.email, token]);

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleUpdateSubmit = (updatedEvent) => {
    fetch(`https://actify-server.vercel.app/events/${selectedEvent._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => res.json())
      .then(() => {
        const updatedList = manageEvents.map((e) =>
          e._id === selectedEvent._id ? { ...e, ...updatedEvent } : e
        );
        setManageEvents(updatedList);
        setShowModal(false);
        setSelectedEvent(null);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          data-aos="fade-down"
          className="text-4xl font-bold text-center mb-10"
        >
          Manage Events
        </h1>

        {manageEvents.length === 0 ? (
          <NoCreatedEvent />
        ) : (
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch"
          >
            {manageEvents.map((event, index) => (
              <div
                key={event._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex justify-center w-full h-full"
              >
                <ManageEventsCard
                  event={event}
                  onEdit={() => handleEditClick(event)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && selectedEvent && (
        <EditModal
          event={selectedEvent}
          onClose={() => {
            setShowModal(false);
            setSelectedEvent(null);
          }}
          onSubmit={handleUpdateSubmit}
        />
      )}
    </div>
  );
};

export default ManageEvents;
