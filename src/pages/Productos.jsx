import { useState, useEffect } from "react";
import ListaProductos from "../components/ListaProductos";
import axios from "axios";

export default function Productos(){
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        async function fetch(){
            await axios.get("https://dummyjson.com/products")
            .then(resp => setProductos(resp.data.products))
        }

        fetch();
    }, []);
    
    return (<ListaProductos productos={productos}/>);
}