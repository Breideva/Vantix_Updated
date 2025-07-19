import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Slide() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".holder section");

    gsap.to(".holder", {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",   // pin this outer container
        pin: true,             // pin the static wrapper
        scrub: 1,
        end: "+=3000",
        markers: true,
      },
    });
  }, []);

  return (
    <div className="wrapper w-full h-screen relative overflow-hidden top-0">
      {/* wrapper is pinned */}
      <div className="holder w-[300vw] h-full flex">
        <section className="w-[100vw] h-full bg-black flex items-center justify-center text-white text-6xl">f</section>
        <section className="w-[100vw] h-full bg-green-300 flex items-center justify-center text-6xl">l</section>
        <section className="w-[100vw] h-full bg-orange-700 flex items-center justify-center text-6xl">g</section>
      </div>
    </div>
  );
}
