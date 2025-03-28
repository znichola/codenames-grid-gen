"use client"

import type { Elem, Grid } from "./genGrid"

export default function GridDisplay({ grid, onClick }: { grid: Grid; onClick: () => void }) {
  // Map color classes based on element type with pop art vibrant colors
  const getColorClass = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "bg-rose-500 hover:bg-rose-600"
      case "B":
        return "bg-cyan-500 hover:bg-cyan-600"
      case "Y":
        return "bg-amber-300 hover:bg-amber-400"
      case "X":
        return "bg-purple-900 hover:bg-purple-950"
      default:
        return ""
    }
  }

  // Map text color based on element type
  const getTextClass = (elem: Elem): string => {
    return elem === "X" || elem === "B" ? "text-white" : "text-gray-900"
  }

  // Pop art pattern for each cell type
  const getPattern = (elem: Elem, rowIndex: number, colIndex: number): string => {
    // Create different patterns based on position and element type
    const isEven = (rowIndex + colIndex) % 2 === 0

    switch (elem) {
      case "R":
        return isEven ? "bg-[radial-gradient(circle,_transparent_20%,_#f43f5e_20%,_#f43f5e_80%,_transparent_80%)]" : ""
      case "B":
        return isEven ? "bg-[linear-gradient(45deg,_transparent_45%,_#0ea5e9_45%,_#0ea5e9_55%,_transparent_55%)]" : ""
      case "Y":
        return isEven ? "bg-[repeating-linear-gradient(45deg,_#fcd34d,_#fcd34d_5px,_#fbbf24_5px,_#fbbf24_10px)]" : ""
      case "X":
        return "bg-[radial-gradient(circle,_#581c87_30%,_#4c1d95_70%)]"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200">
      <h1 className="mb-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 drop-shadow-sm">
        Codenames Grid
      </h1>

      <div className="grid gap-3 sm:gap-5 p-4 sm:p-8 bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto border-4 border-black">
        {grid.map((line, rowIndex) => (
          <div key={rowIndex} className="flex gap-3 sm:gap-5">
            {line.map((elem, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                                    ${getColorClass(elem)} 
                                    ${getTextClass(elem)}
                                    ${getPattern(elem, rowIndex, colIndex)}
                                    w-full aspect-square
                                    flex items-center justify-center 
                                    rounded-lg
                                    border-4 border-black
                                    font-extrabold text-base sm:text-xl
                                    transition-all duration-200
                                    cursor-pointer
                                    transform hover:scale-105
                                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                                    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                                `}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={onClick}
        className="px-5 py-3 mt-8 text-lg font-extrabold text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl 
                border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                hover:translate-y-1 hover:translate-x-1
                transition-all duration-200 transform"
      >
        Generate New Grid
      </button>
    </div>
  )
}

