"use client"

import { useEffect, useState } from "react"
import type { Elem, Grid } from "./genGrid"

export default function GridDisplay({
  grid,
  onClick,
  setGridDimention,
  toggleStyle,
}: {
  grid: Grid
  onClick: () => void
  setGridDimention: (n: number) => void
  toggleStyle: () => void
}) {
  const [animate, setAnimate] = useState(false)

  // Pop art inspired color palette
  const getColorClass = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
      case "B":
        return "bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700"
      case "Y":
        return "bg-gradient-to-br from-yellow-300 to-amber-500 hover:from-yellow-400 hover:to-amber-600"
      case "X":
        return "bg-gradient-to-br from-gray-900 to-black hover:from-black hover:to-gray-800"
      default:
        return ""
    }
  }

  const getTextClass = (elem: Elem): string => {
    return elem === "X" || elem === "B" ? "text-white" : "text-gray-900"
  }

  const getPatternClass = (elem: Elem, index: number): string => {
    // Create different patterns based on element type and position
    const patterns = [
      "after:absolute after:inset-0 after:bg-[radial-gradient(circle,_transparent_30%,_rgba(255,255,255,0.2)_30%)] after:bg-[length:8px_8px] after:opacity-40",
      "after:absolute after:inset-0 after:bg-[linear-gradient(45deg,_transparent_46%,_rgba(255,255,255,0.3)_46%,_rgba(255,255,255,0.3)_54%,_transparent_54%)] after:bg-[length:8px_8px] after:opacity-40",
      "after:absolute after:inset-0 after:bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_20%,_transparent_20%)] after:bg-[length:6px_6px] after:opacity-40",
      "after:absolute after:inset-0 after:bg-[linear-gradient(to_right,_transparent_46%,_rgba(255,255,255,0.3)_46%,_rgba(255,255,255,0.3)_54%,_transparent_54%)] after:bg-[length:8px_8px] after:opacity-40",
    ]

    return patterns[index % patterns.length]
  }

  // Available grid dimensions
  const dimensions = [4, 5, 6, 7, 8]

  // Trigger animation when grid changes
  useEffect(() => {
    setAnimate(true)
    const timer = setTimeout(() => setAnimate(false), 500)
    return () => clearTimeout(timer)
  }, [grid])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100">
      <h1 className="mb-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 drop-shadow-sm">
        POP CODENAMES
      </h1>

      <div
        className={`grid gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-[0_10px_0_0_#000] border-4 border-black w-full max-w-md mx-auto ${animate ? "animate-wiggle" : ""}`}
      >
        {grid.map((line, rowIndex) => (
          <div key={rowIndex} className="flex gap-3 sm:gap-4">
            {line.map((elem, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  ${getColorClass(elem)} 
                  ${getTextClass(elem)}
                  ${getPatternClass(elem, rowIndex + colIndex)}
                  w-full aspect-square
                  flex items-center justify-center 
                  rounded-lg border-2 border-black
                  font-bold text-base sm:text-xl
                  transition-all duration-300
                  cursor-pointer
                  relative overflow-hidden
                  shadow-[4px_4px_0_0_rgba(0,0,0,0.8)]
                  hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]
                  hover:translate-x-[2px] hover:translate-y-[2px]
                  active:translate-x-[4px] active:translate-y-[4px]
                  active:shadow-none
                `}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <button
          onClick={onClick}
          className="px-5 py-3 text-base font-extrabold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 focus:outline-none"
        >
          NEW GRID!
        </button>

        <button
          onClick={toggleStyle}
          className="px-5 py-3 text-base font-extrabold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 focus:outline-none"
        >
          SWITCH STYLE!
        </button>
      </div>

      <div className="mt-6">
        <div className="text-base font-bold text-center text-gray-800 mb-2">GRID SIZE:</div>
        <div className="flex gap-2">
          {dimensions.map((dim) => (
            <button
              key={dim}
              onClick={() => setGridDimention(dim)}
              className="w-10 h-10 flex items-center justify-center text-base font-bold text-gray-800 bg-white rounded-full border-2 border-black shadow-[2px_2px_0_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 focus:outline-none"
            >
              {dim}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

