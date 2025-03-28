"use client"

import { useEffect, useState } from "react";
import { Elem, genGrid, Grid } from "./genGrid";
import { default as DefaultGrid } from "./gridDisplay";
import { default as PopArtGrid } from "./gridPopArt";
import { default as StarWarsGrid } from "./gridStarWars";
import { default as GuanGrid } from "./gridGuan";


type GridStyles = "Display" | "PopArt" | "Guan" | "StarWars";

export default function Home() {
  const [seed, setSeed] = useState<number | null>(null);
  const [dimention, setGridDimention] = useState(5);
  const [grid, setGrid] = useState<Grid>([]);
  const [gridStyle, setGridStyle] = useState<GridStyles>("Display");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (seed !== null) {
      setGrid(genGrid({ dimention, seed }));
    }
  }, [seed, dimention]); // Runs every time seed changes

  // Generate new seed when button is clicked
  const genSeed = () => {
    setSeed(Math.floor(Math.random() * 10000));
  };

  const toggleGridStyle = () => {
    const styles: GridStyles[] = ["Display", "PopArt", "StarWars", "Guan"];
    const nextStyle = styles[(styles.indexOf(gridStyle) + 1) % styles.length];
    setGridStyle(nextStyle);
  };

  const GridComponent = gridStyle === "PopArt" ? PopArtGrid : gridStyle === "StarWars" ? StarWarsGrid : gridStyle === "Guan" ? GuanGrid : DefaultGrid;

  return (
    <div>
      <GridComponent
        grid={grid}
        onClick={genSeed}
        setGridDimention={setGridDimention}
        toggleStyle={toggleGridStyle}
      />
    </div>
  );
}
