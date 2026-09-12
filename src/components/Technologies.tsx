import { use } from "react";
import type { TechnologyType } from "../types/Type";
import Technology from "./Technology";

export interface TechnologiesProps {
  TechnologiesPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
  const technologies = use(TechnologiesPromise);

  return (
    <div className="container mx-auto">
      <h2 className="text-[36px] font-extrabold">
        Explore the
        <span className=" bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[16px] text-[#64748B mt-2] font-normal">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1-1 md:grid-cols-12 gap-6 mt-10">
        <div className="col-span-1 md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {technologies.map((technology) => (
              <Technology
                key={technology.id}
                technology={technology}
              ></Technology>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 border p-4 w-full border-gray-200 rounded-2xl">
          <h3 className="text-[18px]">Your Stack</h3>
          <p className="text-[12px]">No technologies selected yet</p>

          <button className="text-[14px] text-[#D82C20] rounded-[10px] w-full py-1 border border-[#ED8C85]">
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
