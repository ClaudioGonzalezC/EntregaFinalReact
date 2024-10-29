import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ className }) => {
  const [contador, setContador] = useState(1);
  const minCount = 0; // Mínimo permitido
  const maxCount = 4; // Máximo permitido

  const restar = () => {
    if (contador > minCount) {
      setContador(contador - 1);
    }
  };

  const sumar = () => {
    if (contador < maxCount) {
      setContador(contador + 1);
    }
  };

  let childProps = {
    contador,
    sumar,
    restar,
  };

  return (
    <div className={`counter-container`}>
      <Counter {...childProps} />
    </div>
  );
};

export default CounterContainer;
