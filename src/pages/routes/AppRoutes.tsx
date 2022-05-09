import { RouteProps } from "react-router-dom";
import { Commits } from "../Commits";
import { Home } from "../home";
import { Repositories } from "../repositories";

export const AppRoutes: Array<RouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/repositories/:username",
    element: <Repositories />,
  },
  {
    path: "/commits/:username/:repository",
    element: <Commits />,
  },
];
