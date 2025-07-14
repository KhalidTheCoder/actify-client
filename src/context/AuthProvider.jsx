import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      toast.success("Signed Out Successfully");
    } catch (error) {
      toast.error("Sign out failed: " + error.message);
    }
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
    setUser(loggedInUser);

    if (loggedInUser) {
      
      axios.get("http://localhost:3000", {
        headers: {
          Authorization: `Bearer ${loggedInUser.accessToken}`,
        },
      })
      .catch((err) => {
        console.error("Token verification failed:", err);
      });
    }

    setLoading(false); 
  });

  return () => unsubscribe();
}, []);

  const userInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
