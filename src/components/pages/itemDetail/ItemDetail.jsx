import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css"; // Importa el archivo CSS (o SASS)

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail-container">
      {/* Contenedor de la imagen */}
      <div className="item-detail-image">
        <img src={item.imageUrl} alt={item.title} />
      </div>

      {/* Contenedor de los detalles */}
      <div className="item-detail-info">
        {/* Columna izquierda: título y descripción */}
        <div className="item-detail-left">
          <h1>{item.title}</h1>
          <p>{item.detail}</p>
        </div>

        {/* Columna derecha: precio y contador */}
        <div className="item-detail-right">
          <p>{item.description}</p>
          <p className="item-price">{item.price}</p>
          <CounterContainer />
          <p className="info-detail">Este destino tiene una capacidad máxima de 4 turistas, sin contar bebés.</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
