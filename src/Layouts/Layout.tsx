import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import CartContextProvider from "../contexts/CartContext.tsx";

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