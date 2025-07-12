import { Outlet } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
