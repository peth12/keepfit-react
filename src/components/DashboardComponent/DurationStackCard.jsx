import { useData } from "./DashboardData";

const DurationStackCard = () => {
  const { duration } = useData();

  return (
    <div className="flex flex-col align-middle justify-between h-full">
      <div className="text-4xl font-semibold text-white text-start p-2 italic">
        All time summary
      </div>
      <div className="text-center w-max-[580px]" id="scroll-container">
        <p
          className="text-4xl font-bold text-white italic"
          style={{ whiteSpace: "wrap" }}
          // id="scroll-text"
        >
          {duration.yoga +
            duration.running +
            duration.cycling +
            duration.swimming +
            duration.boxing}5555
        </p>
      </div>
      <div className="text-4xl font-semibold text-white text-end pr-4 italic">
        Minutes
      </div>
    </div>
  );
};

export default DurationStackCard;
