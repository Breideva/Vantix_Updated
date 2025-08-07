import Squares from "../assets/Union.png";
import Learn from "../assets/security.png";

export function Products() {
  const App = () => {};
  return (
    <div className="text-text font-inter">
      <div className="bg-bg w-full h-screen flex justify-center">
        <div className="w-10/12 flex justify-center items-center relative">
          <img className="absolute left-0 h-full" src={Squares} alt="" />
          <div className="w-1/2 flex flex-col relative z-10">
            <h1 className="text-heading font-light">Our Work</h1>
            <p className="text-sm-body leading-tight text-l-text">
              Subheading for description or instructions{" "}
            </p>
            <div className="text-body pt-10 gap-6 flex flex-col">
              <p>
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-end relative z-10">
            <div className="border-white border-1 h-3/5 w-4/5 rounded-lg"></div>
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
          <div className="grid grid-cols-3 w-full h-[325vh] gap-8 relative z-10">
            <div className="border-border border-1 w-full h-full col-span-1 row-span-2 bg-gradient-to-tr from-stb from-50% to-lstb rounded-lg "></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-2 bg-gradient-to-br from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-4 bg-gradient-to-b from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-2 row-span-3 bg-gradient-to-tr from-stb from-50% to-lstb rounded-lg"></div>

            <div className="border-border border-1 w-full h-full col-span-1 row-span-4 bg-gradient-to-br from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-6 bg-gradient-to-b from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-5 bg-gradient-to-tr from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-4 bg-gradient-to-br from-stb from-50% to-lstb rounded-lg"></div>

            <div className="border-border border-1 w-full h-full col-span-1 row-span-3 bg-gradient-to-b from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-2 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-2 row-span-3 bg-gradient-to-b from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-1 row-span-3 bg-gradient-to-b from-stb from-50% to-lstb rounded-lg"></div>
            <div className="border-border border-1 w-full h-full col-span-2 row-span-2 bg-gradient-to-l from-stb from-50% to-lstb rounded-lg shadow-2xl"></div>
          </div>
        </div>
      </div>
      <div className="bg-bg w-full flex justify-center min-h-screen text-text font-inter relative">
        <div className="w-10/12 flex justify-center items-start relative">
          <img className="absolute left-0 h-full" src={Squares} alt="" />
         
        </div>
      </div>
    </div>
  );
}
