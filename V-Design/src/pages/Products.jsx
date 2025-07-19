import Squares from "../assets/Union.png";
import Learn from "../assets/Learning.png";

export function Products() {
  const App = () => {
    
  };
  return (
    <div className="text-text font-inter">
      <div className="bg-bg w-full h-screen flex justify-center">
        <div className="w-10/12 flex justify-center items-center relative">
          <img className="absolute left-0 h-full" src={Squares} alt="" />
          <div className="w-1/2 h-full flex justify-center items-center relative z-10">
            <div className="border-border rounded-lg bg-gradient-to-br from-box from-50% to-lbox border-[1px] h-3/5 w-3/4 flex">
              <img src={Learn} alt="" />
            </div>
            <div className="border-border rounded-lg bg-gradient-to-br from-box from-50% to-lbox border-[1px] h-3/5 w-3/4 flex absolute rotate-6">
              <img src={Learn} alt="" />
            </div>
            <div className="border-border rounded-lg bg-gradient-to-br from-box from-50% to-lbox border-[1px] h-3/5 w-3/4 flex absolute rotate-12">
              <img src={Learn} alt="" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col relative z-10">
            <h1 className="text-heading font-light">Our Work</h1>
            <p className="text-body leading-tight text-light-text">
              Subheading for description or instructions{" "}
            </p>
            <div className="text-sm-body pt-10 gap-6 flex flex-col">
              <p>
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might
              </p>
              <p>
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might look: Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
                numquam. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg w-full min-h-screen flex justify-center relative">
        <div
          id="box"
          className="w-full h-1/3 bg-gradient-to-br from-box from-50% to-lbox absolute z-10 border-t-[1px] border-border flex items-center justify-center overflow-hidden"
        >
          <h1 className="text-slide">VANTIX</h1>
        </div>
        {/* <div className="w-full h-1/3 bg-gradient-to-br from-box from-50% to-lbox absolute z-10 top-1/3 border-t-[1px] border-border flex items-center justify-center overflow-hidden">
          <h1 className="text-slide animate-slide">VANTIX</h1>
        </div>
        <div className="w-full h-1/3 bg-gradient-to-br from-box from-50% to-lbox absolute z-10 top-2/3 border-t-[1px] border-border flex items-center justify-center overflow-hidden">
          <h1 className="text-slide animate-slide">VANTIX</h1>
        </div> */}
        <div className="w-10/12 flex justify-center items-center relative">
          <img className="absolute right-0 h-full" src={Squares} alt="" />
          <div className="grid grid-cols-3 w-full h-[325vh] gap-4 relative z-10">
            <div className="border-border border-2 w-full h-full col-span-1 row-span-2 bg-gradient-to-tr from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-2 bg-gradient-to-br from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-4 bg-gradient-to-b from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-2 row-span-3 bg-gradient-to-tr from-stb from-50% to-lstb"></div>

            <div className="border-border border-2 w-full h-full col-span-1 row-span-4 bg-gradient-to-br from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-6 bg-gradient-to-b from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-5 bg-gradient-to-tr from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-4 bg-gradient-to-br from-stb from-50% to-lstb"></div>

            <div className="border-border border-2 w-full h-full col-span-1 row-span-3 bg-gradient-to-b from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-2 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-2 row-span-3 bg-gradient-to-b from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-1 row-span-3 bg-gradient-to-b from-stb from-50% to-lstb"></div>
            <div className="border-border border-2 w-full h-full col-span-2 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb"></div>
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
            <img src={Learn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
