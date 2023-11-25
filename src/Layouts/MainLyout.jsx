import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLyout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLyout;