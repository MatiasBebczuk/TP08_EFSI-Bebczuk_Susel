import Producto from "./Producto";
import "./ListaProductos.css";

export default function ListaProductos({productos}){
    if(productos.length == 0){
        return <></>;
    }
    
    return (
        <div className="listaproductos">
            {
                productos.map((producto, i) => <Producto key={i} producto={producto}/>)
            }
        </div>
    );
}