import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
