import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
import ManageEventsCard from "../components/ManageEventsCard";
import EditModal from "../components/EditModal";
import NoCreatedEvent from "../components/NoCreatedEvent";

const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [manageEvents, setManageEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = user?.accessToken;

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://actify-server.vercel.app/manage/events?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setManageEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching managed events", err);
        setLoading(false);
      });
  }, [user?.email]);

  const handleEditClick = (recipe) => {
    setSelectedEvent(recipe);
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
        <h1 className="text-4xl font-bold text-center mb-10">
          Manage Events
        </h1>

        {manageEvents.length === 0 ? (
          <NoCreatedEvent></NoCreatedEvent>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {manageEvents.map((event) => (
              <ManageEventsCard
                key={event._id}
                onEdit={() => handleEditClick(event)}
                event={event}
              />
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
