import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
import ManageEventsCard from "../components/ManageEventsCard";
import EditModal from "../components/EditModal";

const ManageEvents = () => {
  const { user } = useContext(AuthContext);
  const [manageEvents, setManageEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/manage/events?email=${user.email}`)
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
  fetch(`http://localhost:3000/events/${selectedEvent._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedEvent),
  })
    .then((res) => res.json())
    .then((data) => {
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
    <div className="min-h-screen bg-[#E4E0E1] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#493628]">
          Manage Events
        </h1>

        {manageEvents.length === 0 ? (
          <p className="text-center text-[#AB886D]">
            You haven't joined any events yet.
          </p>
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
