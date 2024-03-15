import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo } from "react";

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // Images to make it look better, not related to the effect
    const size = Math.max(innerWidth, innerHeight);
    gsap.set(".gridBlock", {
      backgroundImage: (i) =>
        `url(https://picsum.photos/${size}/${size}?random=${i})`,
    });

    const bigImg = new Image();
    bigImg.addEventListener("load", function () {
      gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
    });

    bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
  });
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: ".grid",
          anticipatePin: 1,
        //   markers: true,
        },
      })
      .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
      .to(
        ".gridBlock:not(.centerBlock)",
        { duration: 0.1, autoAlpha: 1 },
        0.001
      )
      .from(".gridLayer", {
        scale: 3.3333,
        ease: "none",
      });
  });
  return (
    <>
      <h1 className="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>

      <div className="grid-container">
        <div className="grid">
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer centerPiece">
            <div className="gridBlock centerBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock">
              <a href="https://greensock.com" target="_blank"></a>
            </div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Gallery;
