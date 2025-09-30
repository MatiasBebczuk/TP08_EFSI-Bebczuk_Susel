import { Link } from "react-router-dom";
import "./Producto.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext.tsx";

interface IProductoCarrito{
    id: number,
    thumbnail?: string,
    title: string,
    price: number,
	quantity?: number
};

type ProductoCarritoProps = {
  producto: IProductoCarrito;
};

function ProductoCarrito({producto}: ProductoCarritoProps){
  const cartContext = useContext(CartContext);

  return (
  <div className="card">
    <div className="card-body" style={{display: "flex", gap: 3}}>
      <p className="card-text">${Math.round((producto.quantity || 1) * producto.price * 100) / 100}</p>
      <Link to={"/ProductoDetalle/" + producto.id}><h5 className="card-title">{producto.quantity || 1}x{producto.title}</h5></Link>
      <button onClick={() => cartContext.removeFromCart(producto.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
      </button>
    </div>
  </div>
  );
}

export default ProductoCarrito;