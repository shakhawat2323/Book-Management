// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
// } from "@/components/ui/card";

// import { Fade } from "react-awesome-reveal";
// import { useGetBooksQuery } from "../Redux/BooksApi/booksApi";
// import Loding from "./Loding";

// const BooksCards = () => {
//   const { data: books, isLoading } = useGetBooksQuery();
//   if (isLoading) {
//     return <Loding />;
//   }

//   const datas = [...books.data].reverse();
//   return (
//     <div className="w-11/12 mx-auto py-10">
//       <div className="flex justify-between items-center">
//         <p className="text-3xl text-black font-bold ">
//           Discover Your Next Book
//         </p>

//         <Button className="text-sm font-bold hover:bg-purple-600 hover:text-black transition duration-500">
//           View All Book
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//         {datas.slice(0, 6).map((datas, index) => {
//           return (
//             <Fade direction="up" delay={index * 100}>
//               <div key={index} className="mt-5 flex justify-center">
//                 <Card className="w-full h-[500px] max-w-md bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
//                   <div className="relative">
//                     <img
//                       src={datas.img}
//                       alt={datas.title}
//                       className="w-full  min-h-[220px] max-h-[220px] object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
//                     />

//                     <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded shadow">
//                       ${datas.price}
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <CardContent className="p-5 flex flex-col justify-between flex-1">
//                     <CardTitle className="text-xl font-bold text-gray-800 mb-1">
//                       {datas.title}
//                     </CardTitle>

//                     <CardDescription className="text-sm text-gray-500 mb-3">
//                       {datas.author} | {datas.genre}
//                     </CardDescription>

//                     <p className="text-gray-700 text-sm mb-2">
//                       <span className="font-semibold">Description:</span>{" "}
//                       {datas.description?.slice(0, 40)}...
//                     </p>

//                     {/* Availability Info */}
//                     <p className="text-sm mb-3">
//                       <span className="font-semibold text-gray-700">
//                         Available:
//                       </span>{" "}
//                       {datas.available ? (
//                         <span className="text-green-600 font-medium">Yes</span>
//                       ) : (
//                         <span className="text-red-500 font-medium"> No</span>
//                       )}
//                     </p>

//                     {/* Details Button */}
//                     <div className="flex justify-end">
//                       <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white text-sm px-6 py-2 rounded-full shadow-md transition duration-300">
//                         Details
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </Fade>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BooksCards;
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { Fade } from "react-awesome-reveal";
import { useGetBooksQuery } from "../Redux/BooksApi/booksApi";
import Loding from "./Loding";

const BooksCards = () => {
  const { data: books, isLoading } = useGetBooksQuery(undefined);
  console.log({ books });
  if (isLoading) {
    return <Loding />;
  }

  const datas = [...(books?.data || [])].reverse().slice(0, 6);

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex justify-between items-center">
        <p className="text-3xl text-black font-bold ">
          Discover Your Next Book
        </p>

        <Button className="text-sm font-bold hover:bg-purple-600 hover:text-black transition duration-500">
          View All Book
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {datas.map((datas, index) => (
          <Fade direction="up" delay={index * 100} key={datas.isbn || index}>
            <div className="mt-5 flex justify-center">
              <Card className="w-full h-[500px] max-w-md bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={datas.img}
                    alt={datas.title}
                    className="w-full min-h-[220px] max-h-[220px] object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded shadow">
                    ${datas.price}
                  </div>
                </div>

                <CardContent className="p-5 flex flex-col justify-between flex-1">
                  <CardTitle className="text-xl font-bold text-gray-800 mb-1">
                    {datas.title}
                  </CardTitle>

                  <CardDescription className="text-sm text-gray-500 mb-3">
                    {datas.author} | {datas.genre}
                  </CardDescription>

                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-semibold">Description:</span>{" "}
                    {datas.description?.slice(0, 40)}...
                  </p>

                  <p className="text-sm mb-3">
                    <span className="font-semibold text-gray-700">
                      Available:
                    </span>{" "}
                    {datas.available ? (
                      <span className="text-green-600 font-medium">Yes</span>
                    ) : (
                      <span className="text-red-500 font-medium">No</span>
                    )}
                  </p>

                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white text-sm px-6 py-2 rounded-full shadow-md transition duration-300">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default BooksCards;
