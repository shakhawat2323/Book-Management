import Logoss from "../../assets/Img/Authorbooks.jpg";
import Logos from "../../assets/Img/bookslogos.jpg";
import {
  RocketIcon,
  ShoppingCartIcon,
  NewspaperIcon,
  UsersIcon,
} from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";

const Authorbooks = () => {
  return (
    <div className="px-4 md:px-10 lg:px-0">
      {/* Author About Section */}
      <Fade direction="up" triggerOnce>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 bg-[#f3e4c7] rounded-2xl p-6 md:p-12 max-w-6xl mx-auto shadow-md">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-widest">
              About Author
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Writing books makes the <br /> world go round
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="text-gray-800 font-semibold text-sm md:text-base">
              Interdum donec fringilla consectetur senectus proin odio ultrices
              tincidunt. Leo molestie bibendum eget aenean vulputate taciti
              proin volutpat purus.
            </p>
            <button className="mt-4 bg-red-500 text-white font-bold text-sm py-2 px-5 rounded-full hover:bg-red-600 transition">
              DISCOVER MORE
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <img
              src={Logoss}
              alt="Author writing"
              className="rounded-xl object-cover w-full h-auto max-h-[400px]"
            />
          </div>
        </div>
      </Fade>

      {/* Book Info Section */}
      <Slide direction="up" triggerOnce>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 md:p-12 gap-10 mt-10">
          {/* Image with Play Button */}
          <div className="relative w-full md:w-1/2">
            <img
              src={Logos}
              alt="Writing books"
              className="rounded-2xl object-cover w-full h-auto max-h-[420px]"
            />
          </div>

          {/* Text and Icons */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              It is more than just writing books
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <RocketIcon className="text-red-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Publishing</h4>
                  <p className="text-gray-600 text-sm">
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <ShoppingCartIcon className="text-red-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Selling Book</h4>
                  <p className="text-gray-600 text-sm">
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <NewspaperIcon className="text-red-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Editing</h4>
                  <p className="text-gray-600 text-sm">
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <UsersIcon className="text-red-500 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-black">Community</h4>
                  <p className="text-gray-600 text-sm">
                    Maecenas etiam platea et hac viverra aliquam magnis sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Authorbooks;
