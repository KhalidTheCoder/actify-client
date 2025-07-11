import { Outlet } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
