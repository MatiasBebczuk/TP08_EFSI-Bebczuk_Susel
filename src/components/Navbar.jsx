import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Navbar(){
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        async function fetch(){
            await axios.get("https://dummyjson.com/products")
            .then(resp => setCategorias([...new Set(resp.data.products.map(el => el.category))]));
        }

        fetch();
    }, []);

    return(
        <nav>
            <img onClick={_ => {location.pathname = "/"}} className="logo" src="/logo.png"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/QuienesSomos">Quiénes somos</Link></li>
                <li>
                    <div className="dropdown">
                        <p className="dropbtn"><b>v</b> Productos</p>
                        <div className="dropdown-content">
                            <Link to="/Productos">Ver todos</Link>
                            {
                                categorias.map((el, i) => <Link key={i} to={"/Categoria/" + el}>{el}</Link>)
                            }
                        </div>
                    </div>
                </li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;