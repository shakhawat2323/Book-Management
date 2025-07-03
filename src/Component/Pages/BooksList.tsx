import {
  useCreateborrowMutation,
  useDeleteBookMutation,
  useGetBooksQuery,
  useUpdateBooksMutation,
} from "../Redux/BooksApi/booksApi";
import Loding from "./Loding";
import { Trash2, Edit2, BookOpen } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

const BooksList = () => {
  const { data: books, isLoading } = useGetBooksQuery(undefined);
  const [deleteBook, { isLoading: deleteLoading }] = useDeleteBookMutation();
  const [updateBook, { isLoading: updateLoading }] = useUpdateBooksMutation();
  const [createborrow, { isLoading: loding }] = useCreateborrowMutation();
  const [selectedBook, setSelectedBook] = useState(null);
  const [borrowBook, setBorrowBook] = useState(null);

  if (isLoading) return <Loding />;

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast("Deleted successfully");
    } catch (err) {
      console.error("Delete failed", err);
      toast("Delete failed");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedBook = {
      id: selectedBook._id,
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      isbn: form.isbn.value,
      copies: parseInt(form.copies.value),
      available: form.available.value.toLowerCase() === "yes",
      price: parseFloat(form.price.value),
      img: form.img.value,
      description: form.description.value,
    };

    try {
      await updateBook(updatedBook).unwrap();
      toast("Book updated successfully");
      (document.getElementById("Updatebooks") as any).close();
      setSelectedBook(null);
    } catch (err) {
      console.error("Update failed", err);
      toast("Update failed");
    }
  };

  const handleBorrowSubmits = async (e) => {
    e.preventDefault();
    const form = e.target;

    const borrowData = {
      book: borrowBook?._id,
      quantity: parseInt(form.quantity.value),
      dueDate: form.dueDate.value,
    };
    console.log(borrowData);
    try {
      const res = await createborrow(borrowData).unwrap();
      console.log(res);
      toast("Book borrowed successfully");
      form.reset();
      setBorrowBook(null);
      (document.getElementById("BrrowBooks") as any).close();
    } catch (err) {
      console.error("Borrow failed", err);
      toast("Borrow failed");
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-8 mb-12">
      <h2 className="text-2xl font-semibold mb-4">Books List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left hidden sm:table-cell">Author</th>
              <th className="p-3 text-left hidden md:table-cell">Genre</th>
              <th className="p-3 text-left hidden lg:table-cell">ISBN</th>
              <th className="p-3 text-left hidden lg:table-cell">Copies</th>
              <th className="p-3 text-left hidden xl:table-cell">Available</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books?.data?.map((book, idx) => (
              <tr key={book._id}>
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{book.title}</td>
                <td className="p-3 hidden sm:table-cell">{book.author}</td>
                <td className="p-3 hidden md:table-cell">{book.genre}</td>
                <td className="p-3 hidden lg:table-cell">{book.isbn}</td>
                <td className="p-3 hidden lg:table-cell">{book.copies}</td>
                <td className="p-3 hidden xl:table-cell">{book.available}</td>
                <td className="p-3 text-center space-x-3">
                  <button
                    aria-label="delete"
                    onClick={() => handleDelete(book._id)}
                    disabled={deleteLoading}
                    className="p-1 hover:text-red-600 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedBook(book);
                      (
                        document.getElementById("Updatebooks") as any
                      ).showModal();
                    }}
                  >
                    <Edit2 size={16} />
                  </Button>

                  <button
                    onClick={() => {
                      setBorrowBook(book);
                      (
                        document.getElementById("BrrowBooks") as any
                      ).showModal();
                    }}
                    aria-label="borrow"
                    className="p-1 hover:text-green-600 transition"
                  >
                    <BookOpen size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog id="Updatebooks" className="modal">
        <form onSubmit={handleFormSubmit} className="modal-box p-6 grid gap-4">
          <h3 className="font-bold text-xl mb-4">Update Book</h3>

          <Box
            sx={{ minWidth: 120 }}
            noValidate
            autoComplete="off"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <TextField
              fullWidth
              name="title"
              label="Title"
              defaultValue={selectedBook?.title || ""}
              required
            />
            <TextField
              fullWidth
              name="author"
              label="Author"
              defaultValue={selectedBook?.author || ""}
              required
            />
            <select
              name="genre"
              defaultValue={selectedBook?.genre || ""}
              className="select border-2"
            >
              <option disabled value="">
                Pick a Genre
              </option>
              <option value="FICTION">FICTION</option>
              <option value="SCIENCE">SCIENCE</option>
              <option value="HISTORY">HISTORY</option>
              <option value="BIOGRAPHY">BIOGRAPHY</option>
              <option value="NON_FICTION">NON_FICTION</option>
            </select>
            <TextField
              fullWidth
              name="isbn"
              label="ISBN"
              defaultValue={selectedBook?.isbn || ""}
            />
            <TextField
              fullWidth
              name="copies"
              label="Copies"
              type="number"
              defaultValue={selectedBook?.copies || 0}
            />
            <TextField
              fullWidth
              name="available"
              label="Available"
              defaultValue={selectedBook?.available ? "Yes" : "No"}
            />
            <TextField
              fullWidth
              name="price"
              label="Price"
              type="number"
              defaultValue={selectedBook?.price || 0}
            />
            <TextField
              fullWidth
              name="img"
              label="Image URL"
              defaultValue={selectedBook?.img || ""}
            />
            <TextField
              fullWidth
              name="description"
              label="Description"
              multiline
              rows={4}
              defaultValue={selectedBook?.description || ""}
            />
          </Box>

          <div className="modal-action">
            <Button
              type="button"
              onClick={() => {
                (document.getElementById("Updatebooks") as any).close();
                setSelectedBook(null);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Update Book
            </Button>
          </div>
        </form>
      </dialog>
      {/* 🔧 Brrow books Modal (Always Rendered) */}
      {/* <dialog id="BrrowBooks" className="modal">
        <form className="modal-box p-6 grid gap-4">
          <h3 className="font-bold text-xl mb-4">Add New Book</h3>

          <TextField fullWidth label="Book ID" name="bookId" required />

          <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            required
            type="number"
          />

          <TextField
            fullWidth
            label="Due Date"
            name="dueDate"
            type="datetime-local"
            required
          />

          <div className="modal-action">
            <Button
              onClick={() =>
                (document.getElementById("BrrowBooks") as any).close()
              }
            >
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Book
            </Button>
          </div>
        </form>
      </dialog> */}
      <dialog id="BrrowBooks" className="modal">
        <form
          onSubmit={handleBorrowSubmits}
          className="modal-box p-6 grid gap-4"
        >
          <h3 className="font-bold text-xl mb-4">Borrow Book</h3>

          <TextField fullWidth name="book" value={borrowBook?._id} />

          <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            required
            type="number"
          />

          <TextField
            fullWidth
            label="Due Date"
            name="dueDate"
            type="datetime-local"
            required
          />

          <div className="modal-action">
            <Button
              type="button"
              onClick={() => {
                (document.getElementById("BrrowBooks") as any).close();
                setBorrowBook(null);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loding}>
              {loding ? "Processing..." : "Borrow Book"}
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default BooksList;
