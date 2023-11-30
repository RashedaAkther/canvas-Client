import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLyout = () => {
    return (
        <div className="max-w-screen-2xl">
            <Navber></Navber>
            <div className="mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLyout;