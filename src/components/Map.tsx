import { useEffect, useState } from "react";
import DowntownMap from "../assets/DowntownMap.png";
import Pin from "./Pin";
import Draco from "./Draco";
import AdventureCard from "./AdventureCard";

const pinDetails = [
  {
    x: 500,
    y: 200,
    adventure: "fortcanning",
  },
  {
    x: 450,
    y: 50,
    adventure: "somerset",
  },
  {
    x: 660,
    y: 350,
    adventure: "marinabay",
  },
  {
    x: 400,
    y: 530,
    adventure: "sentosa",
  },
  {
    x: 600,
    y: 100,
    adventure: "littleindia",
  },
  {
    x: 500,
    y: 380,
    adventure: "chinatown",
  },
];

const Map = () => {
  const [currentAdventure, setCurrentAdventure] = useState("");
  const [charPosition, setCharPosition] = useState<[number, number]>([200, 250]);

  useEffect(() => {
    const handleKeyDown = (event: { key: unknown; }) => {
      setCharPosition((prevPosition) => {
        switch (event.key) {
          case "ArrowUp":
            return [prevPosition[0], Math.max(0, prevPosition[1] - 20)];
          case "ArrowDown":
            return [prevPosition[0], Math.min(632, prevPosition[1] + 20)];
          case "ArrowLeft":
            return [Math.max(0, prevPosition[0] - 20), prevPosition[1]];
          case "ArrowRight":
            return [Math.min(770, prevPosition[0] + 20), prevPosition[1]];
          default:
            return prevPosition;
        }
      });
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [charPosition]);

  return (
    <div className="relative">

      <img src={DowntownMap} alt="Map of Downtown" height={632} width={886} className="rounded-2xl" />
      {pinDetails.map((pin, index) => (
        <Pin
          key={index}
          x={pin.x}
          y={pin.y}
          thisAdventure={pin.adventure}
          currentAdventure={currentAdventure}
          setCurrentAdventure={setCurrentAdventure}
          charPosition={charPosition}
        />
      ))}

      {/* <Pin
        x={400}
        y={200}
        currentAdventure={currentAdventure}
        setCurrentAdventure={setCurrentAdventure}
        thisAdventure="Fort Canning"
        charPosition={charPosition}
      /> */}
      <Draco charPosition={charPosition} />
      <AdventureCard currentAdventure={currentAdventure} />
    </div>
  );
};

export default Map;
