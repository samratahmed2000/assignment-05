import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";
import { ToastContainer } from "react-toastify";
import type { TechnologyType } from "./types/Type";

const TechnologiesPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <h2 className="text-center text-[18px]">Loading Technologies</h2>
        }
      >
        <Technologies
          TechnologiesPromise={TechnologiesPromise()}
        ></Technologies>
      </Suspense>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;
