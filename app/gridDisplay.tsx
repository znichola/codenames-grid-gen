"use client"

import type { Elem, Grid } from "./genGrid"

export default function GridDisplay({
  grid,
  onClick,
  setGridDimention,
  toggleStyle,
}: { grid: Grid; onClick: () => void; setGridDimention: (n: number) => void; toggleStyle: () => void }) {
  // Map color classes based on element type
  const getColorClass = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "bg-red-500 hover:bg-red-600"
      case "B":
        return "bg-blue-500 hover:bg-blue-600"
      case "Y":
        return "bg-yellow-400 hover:bg-yellow-500"
      case "X":
        return "bg-black hover:bg-gray-800"
      default:
        return ""
    }
  }

  // Map text color based on element type
  const getTextClass = (elem: Elem): string => {
    return elem === "X" || elem === "B" ? "text-white" : "text-gray-800"
  }

  // Available grid dimensions
  const dimensions = [4, 5, 6, 7, 8];

  const foo = grid.flat(1);
  const startPlayer = foo.filter(e => e == 'B').length > foo.filter(e => e == 'R').length ? 'B' : 'R';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Codenames Grid</h1>

      <div className="grid gap-2 sm:gap-4 p-3 sm:p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
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
                  transition-colors duration-200
                  cursor-pointer
                `}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
        <div className="flex gap-3 justify-center items-center">Start player : <div
          className={`
                  ${getColorClass(startPlayer)}
                  h-10 w-10 aspect-square
                  flex items-center justify-center 
                  rounded-md shadow-md 
                  font-bold text-base sm:text-xl
                  transition-colors duration-200
                  cursor-pointer
                `}
        ></div></div>
        <button
          onClick={onClick}
          className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Generate New Grid
        </button>

        <button
          onClick={toggleStyle}
          className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Toggle Grid Style
        </button>
      </div>

      <div className="mt-4">
        <div className="text-sm text-gray-600 mb-2 text-center">Grid Dimension:</div>
        <div className="flex gap-2">
          {dimensions.map((dim) => (
            <button
              key={dim}
              onClick={() => setGridDimention(dim)}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
            >
              {dim}x{dim}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

