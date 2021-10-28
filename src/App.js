import { useState } from "react";
import ColorsGrid from "./components/colorsGrid";
function App() {
  const [color, changeColor] = useState("");
  const [data, changeData] = useState([]);
  const handleColorInputChange = (e) => {
    changeColor(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://api.color.pizza/v1/names/${color}`)
      .then((res) => res.json())
      .then((data) => changeData(data.colors));
  };
  return (
    <div className="App">
      <input onChange={(e) => handleColorInputChange(e)} value={color} />
      <button onClick={() => handleSearch()}>Search</button>
      <ColorsGrid data={data} />
    </div>
  );
}

export default App;
