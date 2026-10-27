// src/App.jsx
import { useState } from "react";
import Encabezado from "./components/Encabezado.jsx";
import Catalogo from "./components/Catalogo.jsx";
import "./App.css";

export default function App() {
  // El carrito vive en el PADRE: el encabezado lo lee y el catálogo lo modifica
  const [carrito, setCarrito] = useState([]);
  const agregar = (producto) => setCarrito((anterior) => [...anterior, producto]);
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);

  return (
    <>
      <Encabezado cantidad={carrito.length} />
      <main>
        <section className="portada">
          <p className="ceja">Horneado hoy en El Tambo, Huancayo</p>
          <h1>Tortas, panes y bocaditos recién salidos del horno</h1>
          <a href="#catalogo" className="boton">Ver catálogo</a>
        </section>
        <Catalogo onAgregar={agregar} />
      </main>
      <footer id="contacto">
        <p>Pastelería Delicia · Av. Huancavelica 1250, El Tambo</p>
        <p>Total en el carrito: S/ {total.toFixed(2)}</p>
      </footer>
    </>
  );
}
