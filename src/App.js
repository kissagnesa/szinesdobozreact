import React, { useState } from 'react';

function App() {
    const [selectedColor, setSelectedColor] = useState("white");

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Színválasztó Alkalmazás</h1>

            <ColorBox color={selectedColor} />

            <ColorSelector onColorSelect={setSelectedColor} />
        </div>
    );
}

function ColorBox({ color }) {
  return (
      <div
          style={{
              width: "200px",
              height: "200px",
              margin: "20px auto",
              backgroundColor: color,
              border: "2px solid black"
          }}
      ></div>
  );
}

function ColorSelector({ onColorSelect }) {
  const colors = ["red", "green", "blue", "yellow", "purple"];

  return (
      <div>
          <h3>Válassz egy színt:</h3>
          {colors.map((color) => (
              <button
                  key={color}
                  onClick={() => onColorSelect(color)}
                  style={{
                      backgroundColor: color,
                      color: "white",
                      padding: "10px 15px",
                      margin: "5px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                  }}
              >
                  {color}
              </button>
          ))}
      </div>
  );
}

export default App;
