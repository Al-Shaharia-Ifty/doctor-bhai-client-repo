import { createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
