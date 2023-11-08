import { createBrowserRouter } from "react-router-dom";

import EntryView from "../pages/EntryView";
import ListView from "../pages/ListView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListView />,
  },
  {
    path: "/item/:id",
    element: <EntryView />,
  },
]);
