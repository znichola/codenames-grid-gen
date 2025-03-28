"use client"

import { useEffect, useState } from "react";
import { Elem, genGrid, Grid } from "./genGrid";
import GridDisplay from "./gridDisplay";

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

  return (<GridDisplay grid={grid} onClick={genSeed}/>)
}
