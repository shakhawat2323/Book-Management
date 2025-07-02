import {
  TextField,
  Button,
  Box,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

const AddBooks = () => {
  const handalfrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const isbn = form.isbn.value;
    const copies = form.copies.value;
    const available = form.available.value;
    const price = form.price.value;
    const genre = form.genre.value;
    const description = form.description.value;
    const img = form.img.value;

    const Books = {
      title,
      author,
      genre,
      isbn,
      copies,
      available,
      price,
      img,
      description,
    };
    console.log(Books);
  };

  return (
    <div className="mt-32 mb-20 w-11/12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Add New Book
      </h2>

      <form onSubmit={handalfrom}>
        <Box
          noValidate
          autoComplete="off"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <TextField fullWidth label="Title" name="title" required />
          <TextField fullWidth label="Author" name="author" required />

          <FormControl fullWidth>
            <InputLabel>Genre</InputLabel>
            <Select name="genre" required>
              <MenuItem value="FICTION">FICTION</MenuItem>
              <MenuItem value="SCIENCE">SCIENCE</MenuItem>
              <MenuItem value="HISTORY">HISTORY</MenuItem>
              <MenuItem value="BIOGRAPHY">BIOGRAPHY</MenuItem>
              <MenuItem value="NON_FICTION">NON_FICTION</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="ISBN"
            name="isbn"
            required
            type="number"
          />
          <TextField fullWidth label="Copies" name="copies" type="number" />
          <TextField
            fullWidth
            label="Available"
            name="available"
            type="number"
          />
          <TextField fullWidth label="Price ($)" name="price" type="number" />
          <TextField fullWidth label="Image URL" name="img" />
          <TextField
            className="lg:!w-[1020px]"
            label="Description"
            name="description"
            multiline
            rows={4}
          />

          <div className="md:col-span-2 flex justify-center mt-4">
            <Button type="submit" variant="contained" color="primary">
              Add Book
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default AddBooks;
