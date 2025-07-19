import Squares from "../assets/Union.png";
import Main from "../assets/Main.png";
import Learning from "../assets/Learning.png";
import { Boxes } from "../components/boxes";
import { DesignSquares } from "../components/DesignSquares";

export function Home() {
  return (
    <div className="text-text font-inter">
      <div className="bg-bg w-full h-screen flex justify-center">
        <div className="w-10/12 flex justify-center items-center relative">
          <img className="absolute left-0 h-full" src={Squares} alt="" />
          <div className="w-1/2 flex flex-col items-center relative z-10">
            <h1 className="text-title leading-title font-koh font-light">
              VANTIX AI
            </h1>
            <p className="text-large-body leading-tight font-thin">
              Innovating the future, powering possibilities
            </p>
            <div className="relative group">
              <button className="bg-button relative z-10 text-body py-2 px-12 mt-12 rounded-lg font-bold group-hover:bg-border">
                Work With Us
              </button>
              <div className="w-64 h-14 bg-button absolute top-1/2 blur-2xl group-hover:bg-border"></div>
            </div>
          </div>
          <div className="w-1/2 relative z-10">
            <img src={Main} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-bg w-full flex justify-center min-h-screen text-text font-inter relative">
        {/* <DesignSquares /> */}
        <div className="w-10/12 flex justify-center items-center relative">
          <img className="absolute right-0 h-full" src={Squares} alt="" />
          <div className="grid grid-cols-3 w-full h-3/4 justify-center relative z-10 text-center gap-8">
            <Boxes />
            <Boxes />
            <Boxes />
          </div>
        </div>
      </div>
      <div className="bg-bg w-full flex justify-center min-h-screen text-text font-inter relative">
        <div className="w-10/12 flex justify-center items-start relative">
          <img className="absolute left-0 h-full" src={Squares} alt="" />
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4 relative z-10">
            <h2 className="text-lg-heading leading-tight">
              Turning another <span className="text-border">boring day</span>{" "}
              into a <span className="text-border">learning</span> oppurtunity
            </h2>
            <p className="text-body font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              pariatur dicta commodi perferendis cupiditate nostrum, reiciendis
              iusto sint dolore quasi sequi quaerat, ad, incidunt impedit
              voluptatem soluta optio ut nam.
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4 relative z-10">
          <img src={Learning} alt="" /></div>
        </div>
      </div>
        <div className="bg-bg w-full flex justify-center min-h-screen text-text font-inter relative">
        <div className="w-10/12 flex justify-center items-start relative">
          <img className="absolute right-0 h-full" src={Squares} alt="" />
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4 relative z-10">
            <h2 className="text-lg-heading leading-tight">
              Turning another <span className="text-border">boring day</span>{" "}
              into a <span className="text-border">learning</span> oppurtunity
            </h2>
            <p className="text-body font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              pariatur dicta commodi perferendis cupiditate nostrum, reiciendis
              iusto sint dolore quasi sequi quaerat, ad, incidunt impedit
              voluptatem soluta optio ut nam.
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4 relative z-10">
          <img src={Learning} alt="" /></div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="w-1/2 h-3/4 border-border rounded-l-lg border-2 relative z-10"></div>
          <div className="w-1/2 h-3/4 border-border rounded-r-lg border-r-2 border-y-2 relative z-10"></div> */
}
