"use client"

import type { Elem, Grid } from "./genGrid"

export default function GridDisplay({
    grid,
    onClick,
    setGridDimention,
    toggleStyle,
}: { grid: Grid; onClick: () => void; setGridDimention: (n: number) => void; toggleStyle: () => void }) {
    // Map color classes based on element type with pastel colors
    const getColorClass = (elem: Elem): string => {
        switch (elem) {
            case "R":
                return "bg-rose-200 hover:bg-rose-300 border-rose-300"
            case "B":
                return "bg-sky-200 hover:bg-sky-300 border-sky-300"
            case "Y":
                return "bg-amber-100 hover:bg-amber-200 border-amber-200"
            case "X":
                return "bg-gray-700 hover:bg-gray-800 border-gray-800"
            default:
                return ""
        }
    }

    // Map text color based on element type
    const getTextClass = (elem: Elem): string => {
        return elem === "X" ? "text-white" : "text-gray-700"
    }

    // Available grid dimensions
    const dimensions = [4, 5, 6, 7, 8]

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 pb-16 bg-amber-50 bg-repeat">
            <div className="w-full max-w-2xl mx-auto text-center mb-8">
                <h1 className="text-3xl font-serif italic text-rose-800 mb-2">Codenames Grid</h1>
                <div className="flex justify-center">
                    <div className="h-1 w-24 bg-rose-300 rounded-full"></div>
                </div>
            </div>

            <div className="grid gap-3 sm:gap-4 p-6 sm:p-8 bg-cream-100 rounded-xl shadow-md w-full max-w-md mx-auto border-2 border-amber-200 bg-amber-50">
                {grid.map((line, rowIndex) => (
                    <div key={rowIndex} className="flex gap-3 sm:gap-4">
                        {line.map((elem, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`
                  ${getColorClass(elem)} 
                  ${getTextClass(elem)}
                  w-full aspect-square
                  flex items-center justify-center 
                  rounded-lg
                  font-medium text-base sm:text-xl
                  transition-colors duration-200
                  cursor-pointer
                  border-2
                  shadow-sm
                `}
                            >
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                    onClick={onClick}
                    className="px-5 py-2.5 text-sm sm:text-base font-medium text-rose-800 bg-rose-100 rounded-full hover:bg-rose-200 focus:outline-none border-2 border-rose-200 shadow-sm transition-all"
                >
                    Generate New Grid
                </button>

                <button
                    onClick={toggleStyle}
                    className="px-5 py-2.5 text-sm sm:text-base font-medium text-violet-800 bg-violet-100 rounded-full hover:bg-violet-200 focus:outline-none border-2 border-violet-200 shadow-sm transition-all"
                >
                    Toggle Grid Style
                </button>
            </div>

            <div className="mt-6 bg-amber-50 p-4 rounded-lg border-2 border-amber-200 shadow-sm">
                <div className="text-sm text-rose-700 mb-3 text-center font-medium">Grid Dimension:</div>
                <div className="flex gap-2 flex-wrap justify-center">
                    {dimensions.map((dim) => (
                        <button
                            key={dim}
                            onClick={() => setGridDimention(dim)}
                            className="px-3 py-1.5 text-sm font-medium text-teal-800 bg-teal-50 rounded-full hover:bg-teal-100 focus:outline-none border border-teal-200 transition-all"
                        >
                            {dim}×{dim}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

