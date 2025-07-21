
import Header from "./components/header";

import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main>

      {/* Blur Effect */}
      <div
        className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#8F00FF] -rotate-[30deg] -z-10"
      ></div>

      <Header />
      <Hero />
    </main>
  );
}