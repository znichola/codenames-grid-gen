"use client"

import type { Elem, Grid } from "./genGrid"

export default function GridDisplay({ grid, onClick }: { grid: Grid; onClick: () => void }) {
  // Map color classes based on element type with Star Wars colors
  const getColorClass = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "bg-red-600 hover:bg-red-700" // Red lightsaber (Sith)
      case "B":
        return "bg-blue-500 hover:bg-blue-600" // Blue lightsaber (Jedi)
      case "Y":
        return "bg-yellow-300 hover:bg-yellow-400" // C-3PO gold
      case "X":
        return "bg-gray-900 hover:bg-black" // Dark side
      default:
        return ""
    }
  }

  // Map text color based on element type
  const getTextClass = (elem: Elem): string => {
    return elem === "X" || elem === "B" || elem === "R" ? "text-white" : "text-gray-800"
  }

  // Star Wars themed border glow effect
  const getBorderGlow = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "shadow-[0_0_10px_rgba(239,68,68,0.7)]" // Red glow
      case "B":
        return "shadow-[0_0_10px_rgba(59,130,246,0.7)]" // Blue glow
      case "Y":
        return "shadow-[0_0_10px_rgba(252,211,77,0.7)]" // Yellow glow
      case "X":
        return "shadow-[0_0_5px_rgba(255,255,255,0.3)]" // Subtle white glow
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-[#0a0e17] bg-cover bg-center bg-blend-overlay">
      <h1 className="mb-8 text-3xl font-bold text-yellow-300 tracking-wider uppercase">Galactic Intelligence Grid</h1>

      <div className="grid gap-2 sm:gap-4 p-3 sm:p-6 bg-gray-900/80 rounded-lg border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm w-full max-w-md mx-auto">
        {grid.map((line, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 sm:gap-4">
            {line.map((elem, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                                    ${getColorClass(elem)} 
                                    ${getTextClass(elem)}
                                    ${getBorderGlow(elem)}
                                    w-full aspect-square
                                    flex items-center justify-center 
                                    rounded-md
                                    font-bold text-base sm:text-xl
                                    transition-all duration-300
                                    cursor-pointer
                                    border border-gray-700
                                `}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={onClick}
        className="px-4 py-2 sm:px-5 sm:py-3 mt-8 text-sm sm:text-base font-semibold text-yellow-300 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900 uppercase tracking-wider border border-yellow-600 transition-all duration-300 shadow-[0_0_10px_rgba(252,211,77,0.3)]"
      >
        Generate New Intelligence
      </button>

      <p className="mt-4 text-gray-400 text-sm italic">{"May the Force be with you"}</p>
    </div>
  )
}

