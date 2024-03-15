import HorizontalScroll from "./elements/scrollTrigger/HorizontalScroll";
import ParallaxHeader from "./elements/scrollTrigger/ParallaxHeader";

import "./App.css";
import ParallaxSection from "./elements/scrollTrigger/ParallaxSection";


function App() {
  return (
    <>
      <div className="skill relative">
        <div className="absolute top-4 right-[50%] translate-x-[50%] text-black font-black">
          <h1>Parallax Coming</h1>
        </div>

        <ParallaxHeader />
      </div>
      <div className="skill relative bg-[#130d0a] bg-wheat">
        <div className="absolute top-4 right-[50%] translate-x-[50%] z-10 font-black">
          <h1>Parallax Section Coming</h1>
        </div>

        <ParallaxSection/>
      </div>
      <div className="skill relative">
        <div className="absolute top-4 right-[50%] translate-x-[50%] z-10 font-black">
          <h1>Horizontal Scroll Coming</h1>
        </div>

        <HorizontalScroll />
      </div>
      
    </>
  );
}

export default App;
