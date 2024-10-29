import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "viajes");
    let consulta = productosCollection;

    // Si hay un categoryName, aplicamos un filtro usando where
    if (categoryName) {
      consulta = query(productosCollection, where("category", "==", categoryName));
    }

    // Vaciamos items al inicio de cada consulta para evitar duplicados
    setItems([]);

    // Ejecutamos la consulta
    getDocs(consulta)
      .then((res) => {
        const productos = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(productos); // Guarda los datos en el estado
      })
      .catch((error) => console.error("Error al obtener productos:", error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;