import { useRoutes } from "react-router-dom";
import path from "../constants/path";

import MenteeLayout from "../layouts/MenteeLayout";
import MentorLayout from "../layouts/MentorLayout";

import Home from "../pages/public/Home/Home";
import Tutor from "../pages/mentee/Tutor/Tutor";
import Calendar from "../pages/mentee/Calendar";
import Document from "../pages/mentee/Document";
import Group from "../pages/mentee/Group";
import Response from "../pages/mentee/Response";
import Notification from "../pages/mentee/Notification";
import MyCalendar from "../pages/mentee/MyCalendar";

import Login from "../pages/public/Login";

export default function useRoutesConfig() {
  const routes = [
    {
      path: path.LOGIN,
      element: <Login />,
    },
    {
      path: "/",
      element: <MenteeLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: path.TUTOR, element: <Tutor /> },
        { path: path.CALENDAR, element: <Calendar /> },
        { path: path.DOCUMENT, element: <Document /> },
        { path: path.GROUP, element: <Group /> },
        { path: path.RESPONSE, element: <Response /> },
        { path: path.NOTIFICATION, element: <Notification /> },
        { path: path.MYCALENDAR, element: <MyCalendar /> },
      ],
    },
    {
      path: "/mentor",
      element: <MentorLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ];
  return useRoutes(routes);
}
