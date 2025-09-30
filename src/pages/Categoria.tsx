import { useState, useEffect } from "react";
import ListaProductos from "../components/ListaProductos.tsx";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IProducto{
    id: number,
    thumbnail?: string,
    title: string,
    price: number,
    category: string
};

export default function Categoria(){
    const { IdCategoria } = useParams(); // Se llama ID categoria pero es un string con el nombre de ésta
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetch(){
            await axios.get("https://dummyjson.com/products")
            .then(resp => {
                let productosCategoria = resp.data.products.filter((el: IProducto) => el.category == IdCategoria);
                if(productosCategoria.length == 0){
                    setError(true);
                    return;
                }

                setProductos(productosCategoria);
                setError(false);
            });
        }

        fetch();
    }, [IdCategoria]);
    
    return (<>
        {!error && <>
            <h1 style={{marginBottom: 10}}>Categoría: {IdCategoria}</h1>
            <ListaProductos productos={productos}/>
        </>}
        {error && <h2>No hay ningún producto en la categoría {IdCategoria}</h2>}
    </>);
}