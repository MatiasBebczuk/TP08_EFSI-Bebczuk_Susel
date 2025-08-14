import { useState, useEffect } from "react";
import ListaProductos from "../components/ListaProductos";
import axios from "axios";
import "./Home.css";

export default function Home(){
    const [productos, setProductos] = useState([]);
    const [activeImg, setActiveImg] = useState(0);

    useEffect(() => { //funcion de los 5 productos para nuestros productos
        async function fetch(){
            await axios.get("https://dummyjson.com/products")
            .then(resp => setProductos(resp.data.products.filter(_ => Math.random() >= 0.5).slice(0, 5)))
        }

        fetch();
    }, []);

    const cambiarImg = num => {
        let nuevonum = activeImg + num;
        if(nuevonum > 2) nuevonum = 0;
        if(nuevonum < 0) nuevonum = 2;
        setActiveImg(nuevonum);
    };
    
    return (<>
        <div id="carrusel-container" className="carrusel-container" style={{marginBottom: 10}}>
            <div className="controls-and-carrusel">
                <button onClick={() => cambiarImg(-1)} style={{border: 0, backgroundColor: "rgba(0,0,0,0)"}} id="btn-previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                </svg>
                </button>

                <div id="carrusel">
                    <img className="carrusel-img" style={{display: activeImg == 0 ? "" : "none"}} src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"/>
                    <img className="carrusel-img" style={{display: activeImg == 1 ? "" : "none"}} src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"/>
                    <img className="carrusel-img" style={{display: activeImg == 2 ? "" : "none"}} src="https://img.freepik.com/fotos-premium/caja-cartones-pequenos-carrito-compras-computadora-portatil-compras-linea-concepto-comercio-electronico_50039-3181.jpg?semt=ais_items_boosted&w=740"/>
                </div>

                <button onClick={() => cambiarImg(1)} style={{"border": 0, backgroundColor: "rgba(0,0,0,0)"}} id="btn-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                </button>
            </div>
        </div>

        <div style={{display: "flex", gap: 15, paddingLeft: "15vw", marginBottom: 10}}>
            <img onClick={() => {location.pathname = "/Productos"}} className="home-card" src="/catalogo.png"/>
            <div style={{display: "flex", flexDirection: "column", gap: 15, width: "60%"}}>
                <img className="home-card" onClick={() => {location.pathname = "/QuienesSomos"}} src="/quienessomos.png"/>
                <img className="home-card" onClick={() => {location.pathname = "/Contacto"}} src="/contacto.png"/>
            </div>
        </div>

        <h2>Nuestros productos:</h2>
        <ListaProductos productos={productos}/>
    </>);
}