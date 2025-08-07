import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Productos from "./pages/Productos";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductoDetalle from './pages/ProductoDetalle';
import Categoria from "./pages/Categoria";
import NotFound from "./pages/NotFound";

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