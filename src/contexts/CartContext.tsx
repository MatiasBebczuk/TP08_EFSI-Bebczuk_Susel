import { useState, createContext, useEffect } from "react";
import { JSX } from "react";

type IChildren = {
    children: JSX.Element[]
}

interface IProducto{
    id: number,
    thumbnail?: string,
    title: string,
    price: number,
    quantity?: number
};

interface IContext{
    productosCarrito?: IProducto[],
    setProductosCarrito?: React.Dispatch<React.SetStateAction<IProducto[]>>,
    addToCard?: (producto?: IProducto) => void,
    removeFromCart?: (IdProducto: number) => void,
    clearCart?: () => void,
    getTotal?: () => number
}

export const CartContext = createContext<IContext>({});

export default function CartContextProvider({ children }: IChildren){
    const [productosCarrito, setProductosCarrito] = useState<IProducto[]>(JSON.parse(localStorage.getItem("state") || "[]"));

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(productosCarrito));
    }, [productosCarrito]);

    function addToCart(producto: IProducto){
        if(productosCarrito.filter(p => p.id == producto.id).length != 0){
            let aux = productosCarrito;
            aux = aux.map(p => {
                if(p.id == producto.id) p.quantity = (p.quantity || 0) + 1;
                return p;
            });
            setProductosCarrito(aux);
            return;
        }

        setProductosCarrito([...productosCarrito, producto]);
    }
    
    function removeFromCart(IdProducto: number){
        let aux = [...productosCarrito];
        aux = aux.map(producto => {if(producto.id != IdProducto) return producto; producto.quantity = (producto.quantity || 1) - 1; return producto;});
        setProductosCarrito(aux.filter(producto => producto.quantity != 0));
    }
    
    function clearCart(){
        setProductosCarrito([]);
    }
    
    function getTotal(){
        let total = 0;
        for(const producto of productosCarrito){
            total += Math.round((producto.quantity || 1) * producto.price * 100) / 100;
        }
        return total;
    }

    const values = {state: [productosCarrito, setProductosCarrito], addToCart, removeFromCart, clearCart, getTotal};

    return (<CartContext.Provider value={values}>{children}</CartContext.Provider>);
}