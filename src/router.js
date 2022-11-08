import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Page/Home";
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
        path: "/service",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
    ],
  },
]);
