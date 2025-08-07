import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { createContext, useState } from "react";

export const CartContext = createContext();
export default function Layout(){
    const productosCarrito = useState([]);
    return (
        <CartContext.Provider value={productosCarrito}>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </CartContext.Provider>
    )
};