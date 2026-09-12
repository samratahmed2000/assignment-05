import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar></Navbar>
    <Banner></Banner>
    <ToastContainer></ToastContainer>
  </StrictMode>,
);
