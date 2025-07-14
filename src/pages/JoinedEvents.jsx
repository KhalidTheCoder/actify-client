import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
import UpComingEventsCard from "../components/UpComingEventsCard";

const JoinedEvents = () => {
  const { user } = useContext(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return; 

    axios
      .get(`http://localhost:3000/joined-events?email=${user.email}`)
      .then((res) => {
        setJoinedEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching joined events", err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-[#E4E0E1] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#493628]">
          Events You've Joined
        </h1>

        {joinedEvents.length === 0 ? (
          <p className="text-center text-[#AB886D]">
            You haven't joined any events yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {joinedEvents.map((event) => (
              <UpComingEventsCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvents;
