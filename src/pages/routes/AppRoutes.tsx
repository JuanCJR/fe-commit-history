import { RouteProps } from "react-router-dom";
import { Commits } from "../Commits";
import { Home } from "../Home";
import { Repositories } from "../Repositories";

export const AppRoutes: Array<RouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/repositories",
    element: <Repositories />,
  },
  {
    path: "/commits",
    element: <Commits />,
  },
];
