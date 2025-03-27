"use client"

import { useState } from "react";
import { Elem, genGrid, Grid } from "./genGrid";

export default function Home() {
  const [grid, setGrid] = useState<Grid>(genGrid())

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Codenames Grid</h1>

      <div className="grid gap-4 p-6 bg-white rounded-lg shadow-lg">
        {grid.map((line, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {line.map((elem, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  ${getColorClass(elem)} 
                  ${getTextClass(elem)}
                  w-20 h-20 
                  flex items-center justify-center 
                  rounded-md shadow-md 
                  font-bold text-xl
                  transition-colors duration-200
                  cursor-pointer
                `}
              >
                
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={() => setGrid(genGrid())}
        className="px-4 py-2 mt-8 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Generate New Grid
      </button>
    </div>
  )
}
