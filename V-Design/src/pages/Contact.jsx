import Squares from "../assets/Union.png";

export function Contact() {
  return (
    <div className="text-text font-inter">
      <div className="bg-bg w-full h-screen flex justify-center">
        <div className="w-10/12 flex flex-col justify-center items-center relative">
          <img className="absolute  h-full" src={Squares} alt="" />
          <h1 className="text-heading font-medium">Contact Us</h1>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
