import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Login from "./../pages/Login/Login";
import Root from "./../Root/Root";
import StudentsPage from "./../pages/StudentsPage/StudentsPage";

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
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
