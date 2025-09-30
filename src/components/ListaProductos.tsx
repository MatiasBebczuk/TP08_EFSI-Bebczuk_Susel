import Producto from "./Producto.tsx";
import "./ListaProductos.css";

interface IProducto{
    id: number,
    thumbnail?: string,
    title: string,
    price: number
};
  
type ListaProductosProps = {
    productos: IProducto[]
};

function ListaProductos({productos}: ListaProductosProps){
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

export default ListaProductos;