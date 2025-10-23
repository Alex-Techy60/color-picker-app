import { useState } from "react";

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
    <div
      className={`w-full h-screen flex flex-col justify-end items-center transition-all duration-700 ${bgColor}`}
    >
      {/* Bottom section container */}
      <div className="w-full flex flex-col items-center gap-4 pb-8">
        {/* Color name box */}
        <div className="px-6 py-3 bg-white/30 rounded-xl backdrop-blur-md shadow-lg">
          <p className="text-lg font-semibold text-white drop-shadow-sm">
            Color Name: {colorName}
          </p>
        </div>

        {/* Color palette box */}
        <div className="flex gap-4 p-4 bg-white/25 rounded-2xl backdrop-blur-md shadow-md">
          {colors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => {
                setBgColor(color.class);
                setColorName(color.name);
              }}
              className={`${color.class} w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-all`}
            ></button>
          ))}
        </div>

        {/* Footer */}
        <p className="text-white/90 text-sm mt-2 bg-black/25 px-4 py-2 rounded-full backdrop-blur-md">
          Made with ❤️ by <span className="font-semibold">Alex McDominey</span>
        </p>
      </div>
    </div>
  );
}

export default App;
