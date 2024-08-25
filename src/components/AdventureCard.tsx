import { motion, AnimatePresence } from "framer-motion";

const AdventureData = {
  sentosa: {
    location: "Fort Siloso",
    name: "The Overdue Post",
    difficulty: 4,
    slug: "theoverduepost",
  },
  chinatown: {
    location: "Chinatown",
    name: "The King's Feast",
    difficulty: 2,
    slug: "thekingsfeast",
  },
  littleindia: {
    location: "Little India",
    name: "The Lost Relic",
    difficulty: 3,
    slug: "thelostrelic",
  },
  somerset: {
    location: "Somerset",
    name: "The Somerville Adventure!",
    difficulty: 3,
    slug: "",
  },
  marinabay: {
    location: "Marina Bay",
    name: "The Meltdown Menace!",
    difficulty: 3,
    slug: "themeltdownmenace",
  },
  fortcanning: {
    location: "Fort Canning",
    name: "The Piece-ful General!",
    difficulty: 4,
    slug: "thecrateescape",
  },
};

type AdventureCardProps = {
  currentAdventure:
    | "fortcanning"
    | "sentosa"
    | "chinatown"
    | "littleindia"
    | "somerset"
    | "marinabay"
    | "";
};

const AdventureCard = ({ currentAdventure }: AdventureCardProps) => {
  //   if (currentAdventure === "") {
  //     return null;
  //   }

  return (
    <AnimatePresence>
      {currentAdventure != "" && (
        <motion.div
          key="card"
          initial={{ scale: "0", translateY: "-30%", opacity: 0 }}
          animate={{ scale: "100%", translateY: "-50%", opacity: 1 }}
          exit={{ scale: "1%", opacity: 0 }}
          // transition={{ duration: 0.2 }}
          className="h-96 w-64 absolute left-6 top-1/2 rounded-lg flex flex-col items-center justify-center gap-4 border-4 border-white bg-blue-100"
        >
          <h2 className="font-poppins font-semibold text-2xl text-center">
            {AdventureData[currentAdventure].name}
          </h2>
          <h3>Location: {AdventureData[currentAdventure].location}</h3>
          <h3>Difficulty: {AdventureData[currentAdventure].difficulty}</h3>
          <a
            href={
              "https://theransack.com/" + AdventureData[currentAdventure].slug
            }
            target="_blank"
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
              Start Adventure
            </button>
          </a>
          <a href="https://www.theransack.com/contactwix">
            <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
              Enquire
            </button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdventureCard;
