import { Fade } from "react-awesome-reveal";
import Logos from "../../assets/Img/Bookslogo.jpg";
import { Button } from "@/components/ui/button";

const Booksimg = () => {
  return (
    <Fade direction="up" delay={100}>
      <div className="w-11/12 mx-auto ">
        <div
          className="hero rounded-2xl"
          style={{
            backgroundImage: `url(${Logos})`,
          }}
        >
          <div className="hero-overlay rounded-2xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">
                Hurry now limited stock available
              </h1>
              <p className="mb-5">
                <Button className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6  rounded-full mt-4 animate__animated animate__zoomIn animate__delay-3s">
                  Read to books
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Booksimg;
