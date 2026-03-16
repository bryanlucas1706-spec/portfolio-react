import { useState } from "react";
import "./App.css"
import "./index.css"
const App = () => {

  const [numero, setNumero] = useState(1)

  const menu = [];

  const tabuada = [];

  const handleChange = (e) => {
    setNumero(Number(e.target.value));
  }

  for (let x = 1; x <= 10; x++) {
    menu.push(
      <option key={x} value={x}>
        {x}
      </option>
    )
    tabuada.push(
      <tr key={x}>
        <td>{numero}</td>
        <td>x</td>
        <td>{x}</td>
        <td>=</td>
        <td>{numero * x}</td>
      </tr>
    )
  };

  return (
    <div className="container">
      <h1>Tabuada</h1>
      
      <select onChange={handleChange} value={numero}>
        {menu}
      </select>

      <table>
        <tbody>{tabuada}</tbody>
      </table>
    </div>
  )
}
export default App;