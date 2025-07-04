import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr } from "react-icons/fa";

const BookDetails = () => {
  if (isLoading) return <Loding />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
      {/* Left: Book Image */}
      <div className="relative border p-2">
        <img
          src="https://i.ibb.co/1sWKV1F/sunset-book.jpg" // Replace with your image or dynamic path
          alt="Sunset Flower"
          className="w-full object-cover"
        />
        <span className="absolute top-2 right-2 text-xs bg-white rounded-full p-1 shadow">
          🔍
        </span>
        <p className="absolute top-2 left-4 text-white text-sm">by John Doe</p>
      </div>

      {/* Right: Book Info */}
      <div>
        {/* Price */}
        <div className="text-xl space-x-3 mb-2">
          <span className="line-through text-gray-400">$45.00</span>
          <span className="text-red-500 font-bold">$35.00</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-4">Sunset Flower</h1>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          Vel aliquet habitant mauris ultrices non libero. Sollicitudin nulla
          curae mi dui cras gravida sem blandit. Accumsan integer suspendisse
          massa per ultrices ut enim ridiculus hac nulla. Nisl tortor risus
          facilisis aenean arcu per congue purus parturient. Neque amet cras
          eros senectus duis nascetur mauris diam. Quis ac diam iaculis laoreet
          fringilla adipiscing magna.
        </p>

        {/* Social Share */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-medium">Share :</span>
          <div className="flex gap-2 text-white">
            <a href="#" className="bg-blue-600 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-sky-400 p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-500 p-2 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full">
              <FaTumblr />
            </a>
          </div>
        </div>

        {/* Book Meta Info */}
        <div className="border-t pt-4 space-y-2 text-gray-700 text-sm">
          <div className="flex justify-between">
            <span>Author</span>
            <span>: John Doe</span>
          </div>
          <div className="flex justify-between">
            <span>Category</span>
            <span>: Novelette</span>
          </div>
          <div className="flex justify-between">
            <span>Product SKU</span>
            <span>: A0003BKZ</span>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="mt-6 flex items-center gap-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-16 border px-2 py-1 text-center rounded"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
