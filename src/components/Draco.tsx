
import DracoImage from "../assets/dragon.gif";

const Draco = ({
  charPosition,
//   setCharPosition,
}: {
  charPosition: [number, number];
//   setCharPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
}) => {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: charPosition[0], top: charPosition[1] }}
    >
      <img src={DracoImage} alt="Draco" height={128} width={128} />
    </div>
  );
};

export default Draco;
