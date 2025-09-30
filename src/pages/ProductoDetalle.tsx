import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductoDetalle.css";
import { CartContext } from "../contexts/CartContext.tsx";

interface IProducto{
    id: number,
    thumbnail?: string,
    title: string,
    price: number,
    category: string
};

export default function ProductoDetalle(){
    let { IdProducto } = useParams();
    const [producto, setProducto] = useState([]);
    const cartContext = useContext(CartContext);
    useEffect(() => {
        async function fetch(){
            await axios.get(`https://dummyjson.com/products/${IdProducto}`)
            .then(resp => setProducto(resp.data))
        }

        fetch();
    }, []);
    
    return (<div className="productodetalle">
        {producto.images && producto.images.length != 0 && <img src={producto.images[0]}/>}
        <div>
            <h1>{producto.title}</h1>
            <h2>${producto.price}</h2>
            <p>{producto.description}</p>
            {producto.reviews && <div className="reviews">
                <h2>Opiniones</h2>
                {
                    producto.reviews.map((review, i) => <div className="review" key={i}>
                        <div style={{display: "flex", gap: 5, alignItems: "center"}}>
                            <h3>{review.reviewerName} | {review.rating}/5</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <p>{review.comment}</p>
                    </div>)
                }
            </div>}

            <div className="botonescompra">
                <button>Comprar</button>
                <button onClick={() => cartContext.addToCart(producto)}>Añadir al carrito</button>
            </div>
        </div>
    </div>);
}