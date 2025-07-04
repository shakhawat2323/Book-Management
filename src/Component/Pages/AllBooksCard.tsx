import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Fade } from "react-awesome-reveal";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useGetBooksQuery } from "../Redux/BooksApi/booksApi";
import Loding from "./Loding";
import { NavLink } from "react-router";

const AllBooksCard = () => {
  const { data: books, isLoading } = useGetBooksQuery(undefined);

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return <Loding />;
  }

  const allBooks = [...(books?.data || [])].reverse();
  const booksPerPage = 9;
  const totalPages = Math.ceil(allBooks.length / booksPerPage);
  const indexOfLast = currentPage * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = allBooks.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-11/12 mx-auto py-10 mt-20">
      <div className="text-center mb-6">
        <p className="text-xl font-bold">All Books</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBooks.map((book, idx) => (
          <Fade key={book.isbn || idx} direction="up" delay={idx * 100}>
            <div className="flex justify-center">
              <Card className="w-full h-[500px] max-w-md bg-[#fdfdfd] rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full min-h-[220px] max-h-[220px] object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded shadow">
                    ${book.price}
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col justify-between flex-1">
                  <CardTitle className="text-lg font-bold text-gray-800 mb-1">
                    {book.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500 mb-3">
                    {book.author} | {book.genre}
                  </CardDescription>
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Description:</span>{" "}
                    {book.description?.slice(0, 40)}...
                  </p>
                  <p className="text-sm mb-3">
                    <span className="font-semibold">Available:</span>{" "}
                    {book.available}
                  </p>
                  <div className="flex justify-end">
                    <NavLink
                      to={`/booksdetails/${book._id}`}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white text-sm px-6 py-2 rounded-full shadow-md transition duration-300"
                    >
                      Details
                    </NavLink>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Fade>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 6 && currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllBooksCard;
