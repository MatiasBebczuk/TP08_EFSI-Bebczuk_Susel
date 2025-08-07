import { Link } from "react-router-dom";
import "./Producto.css";

export default function ProductoCarrito({producto}){

    return (<div className="card">
    <div className="card-body" style={{display: "flex", gap: 3}}>
      <p className="card-text">${producto.price}</p>
      <Link to={"/ProductoDetalle/" + producto.id}><h5 className="card-title">{producto.title}</h5></Link>
    </div>
  </div>);
}