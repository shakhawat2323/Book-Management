import { BallTriangle } from "react-loader-spinner";
const Loding = () => {
  return (
    <div className="flex justify-center items-center ">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loding;
