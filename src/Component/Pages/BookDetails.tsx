// import { useParams } from "react-router";
// import { useGetBookByIdQuery } from "../Redux/BooksApi/booksApi";

// const BookDetails = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = useGetBookByIdQuery(id);

//   if (isLoading) return <p className="text-center mt-10">Loading...</p>;
//   if (error)
//     return (
//       <p className="text-center mt-10 text-red-500">
//         Failed to load book details.
//       </p>
//     );
//   if (!data) return null;

//   const {
//     title,
//     author,
//     isbn,
//     genre,
//     img,
//     price,
//     description,
//     copies,
//     available,
//   } = data.data;
//   console.log(img);
//   return (
//     <div className="w-11/12 mx-auto mt-20">
//       <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
//         <div className="relative border p-2">
//           <img
//             src={img}
//             alt="not show"
//             className="w-[400px] h-[550px] object-cover rounded"
//           />
//         </div>

//         <div>
//           <div className="text-xl space-x-3 mb-2">
//             <span className="text-red-500 font-bold">${price}</span>
//           </div>

//           <h1 className="text-3xl font-semibold mb-4">{title}</h1>

//           <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

//           <div className="border-t pt-4 space-y-2 text-gray-700 text-sm">
//             <div className="flex justify-between">
//               <span className="text-xl font-bold">Author : </span>
//               <span> {author}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-xl font-bold">Genre :</span>
//               <span> {genre}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-xl font-bold">ISBN :</span>
//               <span> {isbn}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-xl font-bold">Total Copies :</span>
//               <span> {copies}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-xl font-bold">Available :</span>
//               <span> {available}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
import { useParams } from "react-router";
import { useGetBookByIdQuery } from "../Redux/BooksApi/booksApi";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBookByIdQuery(id);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load book details.
      </p>
    );
  if (!data) return null;

  const {
    title,
    author,
    isbn,
    genre,
    img,
    price,
    description,
    copies,
    available,
  } = data.data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-11/12 mx-auto mt-20 relative"
    >
      {/* Background Icon Decoration */}
      <FaBookOpen className="text-[200px] text-gray-100 absolute top-10 left-10 -z-10 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 bg-white rounded shadow-md relative z-10">
        {/* Left: Book Image */}
        <motion.div whileHover={{ scale: 1.03 }} className="relative  rounded">
          <img
            src={img}
            alt="not show"
            className="w-[400px] h-[550px] object-cover rounded"
          />
        </motion.div>

        <div>
          <div className="text-xl space-x-3 mb-2">
            <span className="text-red-500 font-bold">${price}</span>
          </div>

          <h1 className="text-3xl font-semibold mb-4">{title}</h1>

          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

          <div className="border-t pt-4 space-y-2 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span className="text-xl font-bold">Author:</span>
              <span>{author}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl font-bold">Genre:</span>
              <span>{genre}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl font-bold">ISBN:</span>
              <span>{isbn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl font-bold">Total Copies:</span>
              <span>{copies}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl font-bold">Available:</span>
              <span>{available}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookDetails;
