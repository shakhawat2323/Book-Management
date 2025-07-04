import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
