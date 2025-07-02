import { Fade } from "react-awesome-reveal";
import Logos from "../../assets/Img/Bookslogo.jpg";

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
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Booksimg;
