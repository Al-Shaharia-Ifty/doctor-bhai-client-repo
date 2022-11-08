import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "./Components/ServiceDetails";
import Main from "./Layout/Main";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Services from "./Page/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://doctor-server-ruddy.vercel.app/services"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("https://doctor-server-ruddy.vercel.app/services"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("https://doctor-server-ruddy.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`https://doctor-server-ruddy.vercel.app/service/${params.id}`),
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
