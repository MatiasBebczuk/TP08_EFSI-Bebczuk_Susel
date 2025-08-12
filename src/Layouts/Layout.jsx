import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CartContextProvider from "../contexts/CartContext.jsx";

export default function Layout(){
    return (
        <CartContextProvider>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </CartContextProvider>
    )
};