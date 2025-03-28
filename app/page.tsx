"use client"

import { useEffect, useState } from "react";
import { Elem, genGrid, Grid } from "./genGrid";
import { default as DefaultGrid } from "./gridDisplay";
import { default as PopArtGrid } from "./gridPopArt";
import { default as StarWarsGrid } from "./gridStarWars";
import { default as GuanGrid } from "./gridGuan";
import { default as GangsterGrid } from "./gridGangster";
import { default as CottageGrid } from "./gridCottage";

const gridStyles = [
  CottageGrid,
  GangsterGrid,
  PopArtGrid,
];

export default function Home() {
  const [seed, setSeed] = useState<number | null>(null);
  const [dimention, setGridDimention] = useState(5);
  const [grid, setGrid] = useState<Grid>([]);
  const [gridStyle, setGridStyle] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
    setGridStyle(Math.floor(Math.random() * 10000) % gridStyles.length);
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

    if (gridStyle + 1 > gridStyles.length)
      setGridStyle(0);
    else
      setGridStyle(gridStyle + 1);
  };

  const GridComponent = gridStyles[gridStyle] || DefaultGrid;

  if (seed == null) 
    return (<div></div>);

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
