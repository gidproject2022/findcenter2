import AuthPage from "./pages/AuthPage";
import BasketPage from "./pages/BasketPage";
import CreateEventPage from "./pages/CreateEventPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import CreateTypePage from "./pages/CreateTypePage";
import EventPage from "./pages/EventPage";
import EventsPage from "./pages/EventsPage";
import InfoPage from "./pages/InfoPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import RegPage from "./pages/RegPage";
import TypesPage from "./pages/TypesPage";
import {
  BASKET_ROUTE,
  CREATE_EVENT_ROUTE,
  CREATE_PROJECT_ROUTE,
  CREATE_TYPE_ROUTE,
  EVENTS_ROUTE,
  EVENT_ROUTE,
  INFO_ROUTE,
  LOGIN_ROUTE,
  PROJECTS_ROUTE,
  PROJECT_ROUTE,
  REGISTRATION_ROUTE,
  TYPES_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: CREATE_EVENT_ROUTE,
    Component: <CreateEventPage />,
  },
  {
    path: CREATE_TYPE_ROUTE,
    Component: <CreateTypePage />,
  },

  {
    path: CREATE_PROJECT_ROUTE,
    Component: <CreateProjectPage />,
  },
  {
    path: BASKET_ROUTE,
    Component: <BasketPage />,
  },
];
export const publicRoutes = [
  {
    path: INFO_ROUTE,
    Component: <InfoPage />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <AuthPage />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <RegPage />,
  },
  {
    path: PROJECTS_ROUTE,
    Component: <ProjectsPage />,
  },
  {
    path: EVENTS_ROUTE,
    Component: <EventsPage />,
  },
  {
    path: PROJECT_ROUTE + "/:id",
    Component: <ProjectPage />,
  },
  {
    path: EVENT_ROUTE + "/:id",
    Component: <EventPage />,
  },
  {
    path: TYPES_ROUTE,
    Component: <TypesPage />,
  },
];
