import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Login from "./../pages/Login/Login";
import Root from "./../Root/Root";
import StudentsPage from "./../pages/StudentsPage/StudentsPage";
import TeacherPage from "./../pages/TeacherPage/TeacherPage";
import AboutPage from "../pages/AboutPage/AboutPage";

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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
