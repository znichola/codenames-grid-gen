"use client"

import { useEffect, useState } from "react";
import { Elem, genGrid, Grid } from "./genGrid";

export default function Home() {
  const [seed, setSeed] = useState<number | null>(null);
  const [grid, setGrid] = useState<Grid>([]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (seed !== null) {
      setGrid(genGrid(seed));
    }
  }, [seed]); // Runs every time seed changes

  // Generate new seed when button is clicked
  const genSeed = () => {
    setSeed(Math.floor(Math.random() * 10000));
  };

  // Map color classes based on element type
  const getColorClass = (elem: Elem): string => {
    switch (elem) {
      case "R":
        return "bg-red-500 hover:bg-red-600";
      case "B":
        return "bg-blue-500 hover:bg-blue-600";
      case "Y":
        return "bg-yellow-400 hover:bg-yellow-500";
      case "X":
        return "bg-black hover:bg-gray-800";
      default:
        return "";
    }
  };

  // Map text color based on element type
  const getTextClass = (elem: Elem): string => {
    return elem === "X" || elem === "B" ? "text-white" : "text-gray-800";
  };

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
              >
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={genSeed}
        className="px-3 py-2 sm:px-4 sm:py-2 mt-6 sm:mt-8 text-sm sm:text-base font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Generate New Grid
      </button>
    </div>
  )
}
