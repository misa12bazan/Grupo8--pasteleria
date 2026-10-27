// src/data/productos.js
// Los datos viven en un archivo aparte: luego vendrán de una API o de Neon.
export const productos = [
  { id: 1, nombre: "Torta de chocolate", categoria: "Tortas", precio: 65, unidad: "1 kg", imagen: "/img/torta-chocolate.svg" },
  { id: 2, nombre: "Torta tres leches", categoria: "Tortas", precio: 58, unidad: "1 kg", imagen: "/img/tres-leches.svg" },
  { id: 3, nombre: "Cheesecake de maracuyá", categoria: "Tortas", precio: 60, unidad: "8 porciones", imagen: "/img/cheesecake.svg" },
  { id: 4, nombre: "Pan de yema", categoria: "Panes", precio: 5, unidad: "bolsa de 6", imagen: "/img/pan-yema.svg" },
  { id: 5, nombre: "Keke de naranja", categoria: "Panes", precio: 22, unidad: "molde mediano", imagen: "/img/keke-naranja.svg" },
  { id: 6, nombre: "Alfajores de maicena", categoria: "Bocaditos", precio: 12, unidad: "caja de 6", imagen: "/img/alfajores.svg" },
  { id: 7, nombre: "Cupcakes red velvet", categoria: "Bocaditos", precio: 18, unidad: "caja de 4", imagen: "/img/cupcakes.svg" },
  { id: 8, nombre: "Pie de manzana", categoria: "Postres", precio: 38, unidad: "8 porciones", imagen: "/img/pie-manzana.svg" },
];

// "Todos" + cada categoría una sola vez (Set elimina repetidos)
export const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];
