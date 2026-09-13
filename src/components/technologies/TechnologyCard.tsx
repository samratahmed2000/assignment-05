import { FaStar } from "react-icons/fa6";
import type { TechnologyType } from "../../types/Type";

export interface TechnologyProps {
  technology: TechnologyType;
  onAddToStack: (technology: TechnologyType) => void;
  isSelected: boolean;
}

const Technology = ({
  technology,
  onAddToStack,
  isSelected,
}: TechnologyProps) => {
  return (
    <div className="p-4 border border-gray-200 rounded-2xl h-75 w-75 grid gap-2">
      <div className="flex justify-between ">
        <img
          className="w-10 h-10"
          src={technology.icon}
          alt={technology.name}
        />

        <p
          className={`badge badge-soft ${
            technology.badge === "Essential"
              ? "badge-info"
              : technology.badge === "Popular"
                ? "badge-primary"
                : technology.badge === "Trending"
                  ? "badge-secondary"
                  : technology.badge === "Standard"
                    ? "badge-success"
                    : "badge-warning"
          }`}
        >
          {technology.badge}
        </p>
      </div>

      <h3 className="text-[18px]">{technology.name}</h3>
      <p className="text-[12px] text-[#64748B] border-b border-gray-200">
        {technology.description}
      </p>

      <div className="flex justify-between items-center">
        <button className="text-[12px] text-[#64748B] bg-[#F1F5F9] rounded p-1">
          {technology.category}
        </button>
        <p className="text-[11px] text-[#64748B]">{technology.difficulty}</p>
        <p className="flex items-center gap-1 text-[12px] text-[#64748B]">
          <FaStar className="text-yellow-400" /> {technology.rating}
        </p>
      </div>

      <button
        onClick={() => onAddToStack(technology)}
        className={`text-[12px] text-white bg-[#0A0F1D] rounded-[10px] cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed`}
        disabled={isSelected}
      >
        {isSelected === true ? "Selected" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Technology;
