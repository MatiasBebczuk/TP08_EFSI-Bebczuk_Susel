import { Link } from "react-router-dom";
import "./Producto.css";

export default function Producto({producto}){

    return (<div className="card">
    <Link to={"/ProductoDetalle/" + producto.id}><img src={producto.thumbnail || ""} className="card-img-top"/></Link>
    <div className="card-body">
      <Link to={"/ProductoDetalle/" + producto.id}><h5 className="card-title">{producto.title}</h5></Link>
      <p className="card-text">${producto.price}</p>
    </div>
  </div>);
}