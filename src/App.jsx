import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("bg-gray-900");
  const [colorName, setColorName] = useState("Dark Grey");

  const colors = [
    { name: "Peach", class: "bg-[#FFD6A5]" },
    { name: "Lavender", class: "bg-[#CDB4DB]" },
    { name: "Mint", class: "bg-[#B9FBC0]" },
    { name: "Sky Blue", class: "bg-[#A0C4FF]" },
    { name: "Soft Pink", class: "bg-[#FFAFCC]" },
    { name: "Lilac", class: "bg-[#E9D8FD]" },
    { name: "Coral", class: "bg-[#FFADAD]" },
    { name: "Sand", class: "bg-[#F5E6CA]" },
    { name: "Sea Green", class: "bg-[#C4E7D4]" },
    { name: "Slate Gray", class: "bg-[#B0BEC5]" },
  ];

  return (
    <div className={`main-container ${bgColor}`}>
      <div className="bottom-section">
        <div className="color-name-box">
          <p className="color-name-text">Color Name: {colorName}</p>
        </div>

        <div className="palette-box">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => {
                setBgColor(color.class);
                setColorName(color.name);
              }}
              className={`color-btn ${color.class}`}
            ></button>
          ))}
        </div>

        <p className="footer">
          Made with ❤️ by <span>Alex McDominey</span>
        </p>
      </div>
    </div>
  );
}

export default App;
