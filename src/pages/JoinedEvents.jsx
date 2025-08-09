import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
import UpComingEventsCard from "../components/UpComingEventsCard";
import NotJoined from "../components/NotJoined";
import AOS from "aos";
import "aos/dist/aos.css";

const JoinedEvents = () => {
  const { user } = useContext(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = user?.accessToken;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: false,
    });

    if (!user?.email) return;

    axios
      .get(
        `https://actify-server.vercel.app/joined-events?email=${user.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setJoinedEvents(res.data);
        setLoading(false);
        AOS.refresh();
      })
      .catch((err) => {
        console.error("Error fetching joined events", err);
        setLoading(false);
      });
  }, [user?.email, token]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          data-aos="fade-down"
          className="text-4xl font-extrabold text-center mb-10"
        >
          Events You've Joined
        </h1>

        {joinedEvents.length === 0 ? (
          <NotJoined />
        ) : (
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch"
          >
            {joinedEvents.map((event, index) => (
              <div
                key={event._id}
                data-aos="flip-up"
                data-aos-delay={index * 150}
                className="flex justify-center w-full h-full"
              >
                <UpComingEventsCard event={event} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvents;
