import type { TechnologyType } from "../types/Type";

export interface TechnologyProps {
  technology: TechnologyType;
}

const Technology = ({ technology }: TechnologyProps) => {
  return (
    <div className="p-4 border border-gray-200 rounded-2xl min-h-75 min-w-70 grid gap-2">
      <div className="flex justify-between ">
        <img className="w-7 h-7" src={technology.icon} alt={technology.name} />
        <p className="text-[12px]">{technology.badge}</p>
      </div>

      <h3 className="text-[18px]">{technology.name}</h3>
      <p className="text-[12px] text-[#64748B]">{technology.description}</p>

      <div className="flex justify-between">
        <p className="text-[12px] text-[#64748B] p-1">{technology.category}</p>
        <p className="text-[11px] text-[#64748B]">{technology.difficulty}</p>
        <p className="text-[12px] text-[#64748B]">{technology.rating}</p>
      </div>

      <button className="text-[12px] text-white bg-[#0A0F1D] rounded-[10px]">
        Add to Stack
      </button>
    </div>
  );
};

export default Technology;
