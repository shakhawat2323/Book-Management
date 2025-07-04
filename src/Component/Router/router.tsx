import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Hoom from "../Home/Hoom";
import AllBooksCard from "../Pages/AllBooksCard";
import AddBooks from "../Pages/AddBooks";
import BooksList from "../Pages/BooksList";
import BorrowSummary from "../Pages/BorrowSummary";
import BookDetails from "../Pages/BookDetails";

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
      {
        path: "/bookslist",
        element: <BooksList />,
      },
      {
        path: "/borrowsummary",
        element: <BorrowSummary />,
      },
      {
        path: "/booksdetails:id",
        element: <BookDetails />,
      },
    ],
  },
]);

export default router;
