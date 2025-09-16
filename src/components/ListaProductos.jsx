import Producto from "./Producto";
import "./ListaProductos.css";
import { arrayOf, shape, number, string } from "prop-types";

function ListaProductos({productos}){
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

ListaProductos.propTypes = {
    productos: arrayOf(shape({
        id: number.isRequired,
        thumbnail: string,
        title: string.isRequired,
        price: number.isRequired
    })).isRequired
};

export default ListaProductos;