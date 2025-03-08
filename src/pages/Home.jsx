import Navbar from "../componenets/Navbar";
import Footer from '../componenets/Footer'
import { Outlet } from "react-router-dom";
export default function Home() {
    return (
        <div className="main-content">
            <Navbar />
            <div className="outlet-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}