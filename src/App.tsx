import HorizontalScroll from "./elements/scrollTrigger/HorizontalScroll";
import ParallaxHeader from "./elements/scrollTrigger/ParallaxHeader";

import ParallaxSection from "./elements/scrollTrigger/ParallaxSection";

import "./App.css";
import Gallery from "./elements/scrollTrigger/Gallery";

function App() {
  return (
    <>
      <div className="skill relative">
        <div className="absolute top-4 right-[50%] translate-x-[50%] text-black font-black">
          <h1>Parallax Coming</h1>
        </div>

        <ParallaxHeader />
      </div>
      <div className="skill relative bg-[#130d0a]">
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
      <div className="skill relative bg-[#130d0a]">
        <div className="absolute top-4 right-[50%] translate-x-[50%] z-10 font-black">
          <h1>Gallery Coming</h1>
        </div>

        <Gallery />
      </div>
      
    </>
  );
}

export default App;
