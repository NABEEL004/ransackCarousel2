

import PinImage from "../assets/Pin.png";

const Pin = ({
  x,
  y,
  currentAdventure,
  setCurrentAdventure,
  thisAdventure,
  charPosition,
}: {
  x: number;
  y: number;
  currentAdventure: string;
  setCurrentAdventure: (adventure: string) => void;
  thisAdventure: string;
  charPosition: [number, number];
}) => {
  if (
    Math.abs(charPosition[0] - x) < 30 &&
    Math.abs(charPosition[1] - y) < 50
  ) {
    setCurrentAdventure(thisAdventure);
  } else if (currentAdventure === thisAdventure) {
    setCurrentAdventure("");
  }

  return (
    <div
      className="absolute -translate-y-1/2 -translate-x-1/2"
      style={{ top: y, left: x }}
    >
      <img src={PinImage} alt="Pin Image" />
    </div>
  );
};

export default Pin;
