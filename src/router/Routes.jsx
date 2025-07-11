import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import App from "../App";
import UpcomingEvents from "../pages/UpcomingEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: SignIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/upcoming-events",
        Component: UpcomingEvents,
      },
    ],
  },
]);
