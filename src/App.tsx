import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

function App() {
  const container = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // use selectors...
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box", // Set the trigger element
          start: "top center", // Adjust the start position as needed
          end: "bottom center", // Adjust the end position as needed
          scrub: true, // Smoothly animates values between scroll positions
          once: false // Ensure the animation is repeated
        },
        x: 500 // Animation properties
      });
    },
    // { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <div className="App h-[300vh]">
      <div ref={container} className="container">
        <div className="bg-black h-[150vh]">selector</div>
        <div className="bg-red rounded-[50%] gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box h-64 w-8 bg-blue">box</div>
    </div>
  );
}

export default App;
