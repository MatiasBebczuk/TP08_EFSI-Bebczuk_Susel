import Layout from "./Layouts/Layout.tsx";
import Home from "./pages/Home.tsx";
import QuienesSomos from "./pages/QuienesSomos.tsx";
import Contacto from "./pages/Contacto.tsx";
import Productos from "./pages/Productos.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductoDetalle from './pages/ProductoDetalle.tsx';
import Categoria from "./pages/Categoria.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/ProductoDetalle/:IdProducto" element={<ProductoDetalle />} />
          <Route path="/Categoria/:IdCategoria" element={<Categoria />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}