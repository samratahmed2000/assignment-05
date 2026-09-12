import { use } from "react";
import type { TechnologyType } from "../types/Type";

export interface TechnologiesProps {
  TechnologiesPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
  const technologies = use(TechnologiesPromise);
  console.log(technologies);

  return <div></div>;
};

export default Technologies;
