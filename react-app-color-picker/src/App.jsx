import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const colors = [
    "#DFFF00",
    "#FFBF00",
    "#FF7F50",
    "#DE3163",
    "#9FE2BF",
    "#40E0D0",
    "#6495ED",
  ];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Color Picker</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>

      <div className="custom-color-picker">
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => {
            handleColorChange(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
