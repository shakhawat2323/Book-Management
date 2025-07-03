import { useGetborrowQuery } from "../Redux/BooksApi/booksApi";

const BorrowSummary = () => {
  const { data, isLoading } = useGetborrowQuery(undefined);
  console.log({ data, isLoading });
  return (
    <div className="mt-24 w-11/12 mx-auto h-screen">
      <p>shakhawat</p>
    </div>
  );
};

export default BorrowSummary;
