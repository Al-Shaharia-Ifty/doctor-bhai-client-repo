import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "./Components/ServiceDetails";
import Main from "./Layout/Main";
import Home from "./Page/Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Services from "./Page/Services";
import AddReview from "./Components/AddReview";
import RequireAuth from "./Authentication/RequireAuth";
import MyReview from "./Page/MyReview";
import Blog from "./Page/Blog";
import AddService from "./Page/AddService";
import ErrorPage from "./Page/ErrorPage";

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
        path: "/add-review/:id",
        element: (
          <RequireAuth>
            <AddReview />
          </RequireAuth>
        ),
        loader: ({ params }) =>
          fetch(`https://doctor-server-ruddy.vercel.app/service/${params.id}`),
      },
      {
        path: "/my-review",
        element: (
          <RequireAuth>
            <MyReview />
          </RequireAuth>
        ),
      },
      {
        path: "/add-service",
        element: (
          <RequireAuth>
            <AddService />
          </RequireAuth>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
