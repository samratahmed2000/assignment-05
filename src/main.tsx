import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import type { TechnologyType } from "./types/Type";
import Technologies from "./components/Technologies";

const TechnologiesPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<h2 className="text-center text-[18px]">Loading Technologies</h2>}>
      <Technologies TechnologiesPromise={TechnologiesPromise()}></Technologies>
    </Suspense>
    <ToastContainer></ToastContainer>
  </StrictMode>,
);
