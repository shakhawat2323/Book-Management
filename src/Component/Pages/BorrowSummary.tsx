import { useGetborrowQuery } from "../Redux/BooksApi/booksApi";
import Loding from "./Loding";

const BorrowSummary = () => {
  const { data, isLoading } = useGetborrowQuery(undefined);
  console.log({ data });
  if (isLoading) return <Loding />;

  return (
    <div className="mt-24 w-11/12 mx-auto min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Borrowed Books Summary</h2>

      <div className="overflow-x-auto shadow-md rounded-lg border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3 hidden sm:table-cell">ISBN</th>
              <th className="p-3 text-center">Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((datas, inx) => (
              <tr key={datas._id}>
                <td className="p-3">{inx + 1}</td>
                <td className="p-3">{datas.book?.title}</td>
                <td className="p-3 hidden sm:table-cell">{datas.book?.isbn}</td>
                <td className="p-3 text-center">{datas.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummary;
