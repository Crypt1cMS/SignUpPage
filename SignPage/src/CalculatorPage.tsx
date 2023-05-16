import { useState } from "react" 
import axios from "axios"


function Calculator() {

  const[resultado, setResultado] = useState('');

  const calculate = (valor=) => {
    setResultado((resultadoPrevio) => resultadoPrevio + valor);
  }

  const limpiarResultado = () => {
    setResultado('0')
  }
  const obtenerResultado = () => {
    axios.get('http://localhost:5174/sumar')
    .then((res) => {
      setResultado(res.data.resultado);
    })
    .catch((error) => {
      console.error('Error fetching result:', error);
    });
  }

  return (
    <main>
      <h1 id="header">Calculator</h1>
      <div className="calculator">
        <input type="text" id="result" value={resultado} />
        <button onClick={() => calculate("1")}>1</button>
        <button onClick={() => calculate("2")}>2</button>
        <button onClick={() => calculate("3")}>3</button>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("4")}>4</button>
        <button onClick={() => calculate("5")}>5</button>
        <button onClick={() => calculate("6")}>6</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("7")}>7</button>
        <button onClick={() => calculate("8")}>8</button>
        <button onClick={() => calculate("9")}>9</button>
        <button onClick={() => calculate("0")}>0</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
        <button onClick={() => limpiarResultado()}>C</button>
        <button onClick={() => obtenerResultado()}>=</button>
      </div>
    </main>
  );
}

export default Calculator;
