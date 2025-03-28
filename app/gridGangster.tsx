"use client"

import type { Elem, Grid } from "./genGrid"

export default function GridDisplay({
  grid,
  onClick,
  setGridDimention,
  toggleStyle,
}: { grid: Grid; onClick: () => void; setGridDimention: (n: number) => void; toggleStyle: () => void }) {
  // Map color classes based on element type with urban-inspired colors
  const getColorClass = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "bg-gradient-to-br from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600"
      case "B":
        return "bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
      case "Y":
        return "bg-gradient-to-br from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500"
      case "X":
        return "bg-gradient-to-br from-gray-900 to-black hover:from-black hover:to-gray-800"
      default:
        return ""
    }
  }

  // Map text color based on element type
  const getTextClass = (elem: Elem): string => {
    return elem === "X" || elem === "B" ? "text-white" : "text-white"
  }

  // Available grid dimensions
  const dimensions = [4, 5, 6, 7, 8]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-black bg-opacity-90 bg-[url('/placeholder.svg?height=800&width=800')] bg-blend-overlay bg-center">
      <h1 className="mb-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600 drop-shadow-lg">
        STREET CODES
      </h1>

      <div className="grid gap-2 sm:gap-3 p-4 sm:p-5 bg-zinc-900 rounded-xl border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] w-full max-w-md mx-auto">
        {grid.map((line, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 sm:gap-3">
            {line.map((elem, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  ${getColorClass(elem)} 
                  ${getTextClass(elem)}
                  w-full aspect-square
                  flex items-center justify-center 
                  rounded-md border border-gray-700
                  font-bold text-base sm:text-xl
                  transition-all duration-200
                  cursor-pointer
                  shadow-md hover:shadow-lg hover:scale-105
                  transform hover:-rotate-1
                `}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <button
          onClick={onClick}
          className="px-5 py-3 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition-all duration-200 uppercase tracking-wider"
        >
          Roll New Grid
        </button>

        <button
          onClick={toggleStyle}
          className="px-5 py-3 text-base font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg transform hover:scale-105 transition-all duration-200 uppercase tracking-wider"
        >
          Flip Style
        </button>
      </div>

      <div className="mt-6">
        <div className="text-base text-green-400 mb-2 text-center font-semibold">GRID SIZE:</div>
        <div className="flex gap-2">
          {dimensions.map((dim) => (
            <button
              key={dim}
              onClick={() => setGridDimention(dim)}
              className="px-4 py-2 text-base font-bold text-white bg-zinc-800 border border-purple-500 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 shadow-md transform hover:scale-110 transition-all duration-200"
            >
              {dim}x{dim}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

