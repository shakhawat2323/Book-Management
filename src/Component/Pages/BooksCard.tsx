import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import AllBooksCard from "./AllBooksCard";

const BooksCard = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.reverse().slice(0, 6)));
  }, []);
  console.log(datas);
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
        {datas.map((data, index) => {
          const {
            img,
            title,
            author,
            genre,

            description,

            available,
            price,
          } = data;

          return (
            <Fade direction="up" delay={index * 100}>
              <div key={index} className="mt-5 flex justify-center">
                <Card className="w-full h-[500px] max-w-md bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={img}
                      alt={title}
                      className="w-full  min-h-[220px] max-h-[220px] object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
                    />

                    <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded shadow">
                      ${price}
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-5 flex flex-col justify-between flex-1">
                    <CardTitle className="text-xl font-bold text-gray-800 mb-1">
                      {title}
                    </CardTitle>

                    <CardDescription className="text-sm text-gray-500 mb-3">
                      {author} | {genre}
                    </CardDescription>

                    <p className="text-gray-700 text-sm mb-2">
                      <span className="font-semibold">Description:</span>{" "}
                      {description?.slice(0, 40)}...
                    </p>

                    {/* Availability Info */}
                    <p className="text-sm mb-3">
                      <span className="font-semibold text-gray-700">
                        Available:
                      </span>{" "}
                      {available ? (
                        <span className="text-green-600 font-medium">Yes</span>
                      ) : (
                        <span className="text-red-500 font-medium"> No</span>
                      )}
                    </p>

                    {/* Details Button */}
                    <div className="flex justify-end">
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white text-sm px-6 py-2 rounded-full shadow-md transition duration-300">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default BooksCard;
