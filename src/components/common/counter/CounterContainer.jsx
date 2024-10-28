import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [contador, setContador] = useState(1);
  const maxCount = 4; // Máximo permitido
  const minCount = 0; // Mínimo permitido

  const sumar = () => {
    if (contador < maxCount) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > minCount) {
      setContador(contador - 1);
    }
  };

  let childProps = {
    contador,
    sumar,
    restar,
  };

  return <Counter {...childProps} />;
};

export default CounterContainer;
