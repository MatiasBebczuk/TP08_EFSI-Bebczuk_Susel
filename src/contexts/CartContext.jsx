import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();
export default function CartContextProvider({ children }){
    const [productosCarrito, setProductosCarrito] = useState(JSON.parse(localStorage.getItem("state")) || []);

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(productosCarrito));
    }, [productosCarrito]);

    function addToCart(producto){
        if(productosCarrito.filter(p => p.id == producto.id).length != 0){
            let aux = productosCarrito;
            aux = aux.map(p => {
                if(p.id == producto.id) p.quantity = p.quantity + 1 || 1;
                return p;
            });
            setProductosCarrito(aux);
            return;
        }

        setProductosCarrito([...productosCarrito, producto]);
    }
    
    function removeFromCart(IdProducto){
        let aux = [...productosCarrito];
        aux = aux.map(producto => {if(producto.id != IdProducto) return producto; producto.quantity = producto.quantity - 1 || 0; return producto;});
        setProductosCarrito(aux.filter(producto => producto.quantity != 0));
    }
    
    function clearCart(){
        setProductosCarrito([]);
    }
    
    function getTotal(){
        let total = 0;
        for(const producto of productosCarrito){
            total += Math.round(parseFloat((producto.quantity || 1) * producto.price * 100)) / 100;
        }
        return total;
    }

    return (<CartContext.Provider value={{state: [productosCarrito, setProductosCarrito], addToCart, removeFromCart, clearCart, getTotal}}>{children}</CartContext.Provider>);
}