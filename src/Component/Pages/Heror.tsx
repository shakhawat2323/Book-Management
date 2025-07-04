import React from "react";
import HeroImg from "../../assets/Img/HeroImg.jpg";
import { Button } from "@/components/ui/button";
const Heror = () => {
  return (
    <div>
      <div
        className="hero w-full h-[90vh] bg-cover bg-center "
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-full md:w-1/2 space-y-4">
            <p className="uppercase text-sm tracking-wider text-white/90 animate__animated animate__fadeInLeft animate__delay-1s">
              Welcome to Booksbazar
            </p>
            <h1 className="text-5xl font-bold text-white leading-tight animate__animated animate__fadeInDown animate__delay-1s">
              Grab your next <br /> favorite book
            </h1>
            <p className="text-white/90 text-sm animate__animated animate__fadeInUp animate__delay-2s">
              Books are the quietest and most constant of friends; they are the
              most accessible and wisest of counselors, and the most patient of
              teachers
            </p>
            <Button className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6  rounded-full mt-4 animate__animated animate__zoomIn animate__delay-3s">
              Read to books
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heror;
