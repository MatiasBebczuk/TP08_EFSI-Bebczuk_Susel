import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext.tsx";
import "./Producto.css";
import { useContext } from "react";

interface IProducto{
    id: number,
    thumbnail?: string,
    title: string,
    price: number
};

type ProductoProps = {
  	producto: IProducto
};

export default function Producto({producto}: ProductoProps){
  	const cartContext = useContext(CartContext);
    return (<div className="card">
	<Link to={"/ProductoDetalle/" + producto.id}><img src={producto.thumbnail || ""} className="card-img-top"/></Link>
	<div className="card-body">
		<Link to={"/ProductoDetalle/" + producto.id}><h5 className="card-title">{producto.title}</h5></Link>
		<p className="card-text">${producto.price}</p>
		<button onClick={() => cartContext.addToCart(producto)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
				<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
			</svg>
		</button>
	</div>
  </div>);
}