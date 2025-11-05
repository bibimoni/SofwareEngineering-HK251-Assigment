import { useRoutes } from "react-router-dom";
import path from "../constants/path";

import MenteeLayout from "../layouts/MenteeLayout";

import Home from "../pages/public/Home/Home";
import Tutor from "../pages/mentee/Tutor/Tutor";
import Calendar from "../pages/mentee/Calendar";

export default function useRoutesConfig() {
  const routes = [
    {
      path: "/",
      element: <MenteeLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: path.TUTOR, element: <Tutor /> },
        { path: path.CALENDAR, element: <Calendar /> },
      ],
    },
  ];
  return useRoutes(routes);
}
