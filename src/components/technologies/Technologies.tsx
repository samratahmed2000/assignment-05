import { use, useState } from "react";
import type { TechnologyType } from "../../types/Type";
import Technology from "./TechnologyCard";
import { toast } from "react-toastify";

export interface TechnologiesProps {
  TechnologiesPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
  const technologies = use(TechnologiesPromise);

  const [stack, setStack] = useState<TechnologyType[]>([]);

  // Add to Stack
  const handleAddToStack = (technology: TechnologyType) => {
    setStack([...stack, technology]);
    toast.success(`${technology?.name} Added to Stack!`);
  };

  // Remove one
  const handleRemoveFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((technology) => technology.id !== id));

    toast.info(`${technology?.name} Removed from Stack!`);
  };

  // Remove All
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All Technologies Removed from Stack!");
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-[36px] font-extrabold text-center lg:text-left">
        Explore the
        <span className=" bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[16px] text-[#64748B] mt-2 font-normal text-center lg:text-left">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 justify-center lg:grid-cols-12 lg:h-fit lg:gap-6 mt-10">
        <div className="col-span-1 md:col-span-9">
          <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {technologies.map((technology) => (
              <Technology
                key={technology.id}
                technology={technology}
                onAddToStack={handleAddToStack}
                isSelected={stack.some((item) => item.id === technology.id)}
              ></Technology>
            ))}
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3 border p-4 h-fit border-gray-200 rounded-2xl">
          <h3 className="text-[18px]">Your Stack</h3>

          {stack.length === 0 ? (
            <div>
              <p className="text-[12px] text-[#94A3B8] mt-1">
                No technologies selected yet.
              </p>

              <div className="border border-dashed border-[#DCE3ED] rounded-xl h-16.5 flex items-center justify-center mt-4">
                <p className="text-[12px] text-[#94A3B8]">
                  Your stack is empty.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[12px] text-[#94A3B8] mt-1">
                {stack.length}{" "}
                {stack.length === 1 ? "Technology" : "Technologies"} Selected
              </p>

              <div className="mt-4 space-y-2">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="border border-[#DCE3ED] rounded-xl p-3 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-8 h-8"
                      />

                      <div>
                        <p className="text-[12px] font-semibold">
                          {technology.name}
                        </p>

                        <p className="text-[8px] text-[#94A3B8]">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="text-[#D82C20] text-2xl font-bold cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {stack.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="text-[14px] text-[#D82C20] rounded-[10px] w-full py-1 mt-4 border border-[#ED8C85] cursor-pointer"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
