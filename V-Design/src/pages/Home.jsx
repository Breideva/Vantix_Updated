import Squares from "../assets/Union.png";
import Main from "../assets/Main.png";
import Learning from "../assets/upload.png";
import { Boxes } from "../components/boxes";

export function Home() {
  return (
    <div className="text-text font-arimo">
      <div className="bg-bg w-full h-screen flex justify-center">
        <div className="w-1/2 h-full flex justify-center items-center relative">
          <img className="absolute h-11/12" src={Squares} alt="" />
          <div className="w-full h-full flex flex-col items-center justify-center text-center relative gap-8 z-10">
            <div className="w-full h-1/2 bg-box"></div>
            <div>
              <h1 className="text-lg-heading leading-lg-heading font-bold">
                Making your new favorite software and applications
              </h1>
              <p className="text-body leading-tight font-light text-l-text pt-2">
                Innovating the future, powering possibilities
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <button className="bg-text relative z-10 text-body p-3 rounded-full font-bold text-bg hover:scale-105">
                  View Updates
                </button>
                <button className="border-1 border-border relative z-10 text-body p-3 rounded-full font-bold">
                  Meet The Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg w-full flex justify-center min-h-screen text-text relative">
        <div className="w-3/5 flex justify-center items-center relative">
          <img className="absolute h-11/12" src={Squares} alt="" />
          <div className="flex flex-col w-full h-full justify-center relative z-10 text-center gap-8">
            <div>
              <h1 className="text-lg-heading leading-lg-heading font-bold">
                What We’re Working On Now.
              </h1>
            </div>
            <div className="w-full h-3/4 bg-box"></div>
          </div>
        </div>
      </div>
      <div className="bg-bg w-full flex justify-center min-h-screen text-text relative rounded-b-[48px]">
        <div className="w-3/4 flex justify-center items-center relative">
          <img className="absolute h-11/12" src={Squares} alt="" />
          <div className="w-full h-full flex flex-col relative z-10">
            <div className="w-full h-1/3 flex flex-col text-center items-center justify-center gap-4">
              <h1 className="text-lg-heading leading-lg-heading font-bold">
                Priding Ourselves On Development
              </h1>
              <p className="w-3/4 text-body font-light text-l-text">
                Body text for whatever like to add more to the for another Body
                texr whatever you’d like to add more to thor another Bo text for
                ver you’d liko add more the for another Body text for whatever
                you’d like to add more to the for another
              </p>
            </div>
            <div className="w-full h-2/3 grid grid-cols-3">
              <Boxes/>
              <Boxes/>
              <Boxes/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
