import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Hoom from "../Home/Hoom";
import AllBooksCard from "../Pages/AllBooksCard";
import AddBooks from "../Pages/AddBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hoom />,
      },
      {
        path: "/allbooks",
        element: <AllBooksCard />,
      },
      {
        path: "/addbooks",
        element: <AddBooks />,
      },
    ],
  },
]);

export default router;
