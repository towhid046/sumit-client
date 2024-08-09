import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Root from "./../Root/Root";
import StudentsPage from "./../pages/StudentsPage/StudentsPage";
import TeacherPage from "./../pages/TeacherPage/TeacherPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Dashboard from "./../pages/Dashboard/Dashboard";
import Students from "../pages/Dashboard/Students/Students";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/students",
        element: <StudentsPage />,
      },
      {
        path: "/teachers",
        element: <TeacherPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      // {
      //   path: "/contact",
      //   element: <ContactPage />,
      // },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/students",
        element: <Students />,
      },
    ],
  },
]);

export default routes;
