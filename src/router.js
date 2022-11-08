import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "./Components/ServiceDetails";
import Main from "./Layout/Main";
import Home from "./Page/Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Services from "./Page/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
