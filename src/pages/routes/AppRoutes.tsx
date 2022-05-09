import { RouteProps } from "react-router-dom";
import { Commits } from "../commits";
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
    path: "/commits/:username/:repoName",
    element: <Commits />,
  },
];
