import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Course from "./pages/Course.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import { getAllBooksLoader } from "./components/CourseComponent.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./userContext/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        loader: getAllBooksLoader,
        path: "/course",
        element: (
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
