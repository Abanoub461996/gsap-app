import HorizontalScroll from "./elements/scrollTrigger/HorizontalScroll";
import Parallax from "./elements/scrollTrigger/Parallax";

import "./App.css";
function App() {
  return (
    <>
      <div className="skill">
        <div className="h-32 w-full flex justify-center items-center font-black">
          <h1>Parallax Coming</h1>
        </div>

        <Parallax />
      </div>
      <div className="skill">
        <div className="h-32 w-full flex justify-center items-center font-black">
          <h1>Horizontal Scroll Coming</h1>
        </div>

        <HorizontalScroll />
      </div>
    </>
  );
}

export default App;
