import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";
import { ToastContainer } from "react-toastify";
import type { TechnologyType } from "./types/Type";
import Footer from "./components/Footer";

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
          <h2 className="text-center font-bold text-[18px] m-8 brand-gradient bg-clip-text text-transparent">
            Loading Technologies...
          </h2>
        }
      >
        <Technologies
          TechnologiesPromise={TechnologiesPromise()}
        ></Technologies>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;
