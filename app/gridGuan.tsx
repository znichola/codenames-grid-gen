"use client"

import type { Elem, Grid } from "./genGrid"

export default function GridDisplay({ grid, onClick }: { grid: Grid; onClick: () => void }) {
  // Map color classes based on element type with DBZ theme
  const getColorClass = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "bg-orange-500 hover:bg-orange-600" // Goku's gi color
      case "B":
        return "bg-blue-600 hover:bg-blue-700" // Vegeta's outfit
      case "Y":
        return "bg-yellow-300 hover:bg-yellow-400" // Super Saiyan aura
      case "X":
        return "bg-purple-900 hover:bg-purple-800" // Villain theme (like Frieza)
      default:
        return ""
    }
  }

  // Map text color based on element type
  const getTextClass = (elem: Elem): string => {
    return elem === "X" || elem === "B" ? "text-white" : "text-gray-800"
  }

  // Get DBZ character initial based on element type
  const getCharacter = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "G" // Goku
      case "B":
        return "V" // Vegeta
      case "Y":
        return "T" // Trunks
      case "X":
        return "F" // Frieza
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-gradient-to-b from-blue-900 via-blue-700 to-orange-500">
      <h1 className="mb-8 text-3xl font-bold text-yellow-300 drop-shadow-lg">Dragon Ball Z Battle Grid</h1>

      <div className="grid gap-2 sm:gap-4 p-3 sm:p-6 bg-black/70 rounded-lg shadow-lg border-2 border-yellow-400 w-full max-w-md mx-auto">
        {grid.map((line, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 sm:gap-4">
            {line.map((elem, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                                    ${getColorClass(elem)} 
                                    ${getTextClass(elem)}
                                    w-full aspect-square
                                    flex items-center justify-center 
                                    rounded-md shadow-md 
                                    font-bold text-base sm:text-xl
                                    transition-all duration-200
                                    cursor-pointer
                                    border-2 border-gray-700
                                    transform hover:scale-105
                                `}
              >
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={onClick}
        className="px-5 py-3 sm:px-6 sm:py-3 mt-8 text-sm sm:text-base font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 border-2 border-yellow-400 shadow-lg transform hover:scale-105 transition-all uppercase tracking-wider"
      >
        Summon New Grid
      </button>

      <div className="mt-4 text-xs text-yellow-200 opacity-80">Power level: Over 9000!</div>
    </div>
  )
}

