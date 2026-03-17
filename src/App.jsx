import { useState } from "react";
import Menu from "./SelectNumeros";
import Tabuada from "./Tabela";

import "./App.css"
const App = () => {

  const [numero, setNumero] = useState(1)

  const handleChange = (e) => {
    setNumero(Number(e.target.value));
  };


  return (

    <div className="container">
      <h1>Tabuada</h1>
      <Menu onChange={handleChange} numero={numero} />
      <Tabuada numero={numero} />

    </div>
  )
}
export default App;