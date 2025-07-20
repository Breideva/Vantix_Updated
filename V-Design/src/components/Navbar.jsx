import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [linesOpen, setLinesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [background, setBackground] = useState(true);

  const checkPosition = () => {
    let screenPosition = window.scrollY;
    setBackground(screenPosition === 0);
  };
  const checkSize = () => {
    let screenWidth = window.innerWidth;
    setLinesOpen(screenWidth <= 1100);
  };
  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };
  const closedOptions = [
    { title: "Products", to: "/products" },
    { title: "Contact", to: "/contact" },
    { title: "About", to: "/about" },
  ];

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  useEffect(() => {
    console.log(scrollY);
    window.addEventListener("scroll", checkPosition);
    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, [background]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(isVisible);

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full 
        ${background ? "bg-transparent" : "bg-blur-dark-700 backdrop-blur-3xl"}
        text-white transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-30"}`}
    >
      {linesOpen ? (
        <div className="flex items-center justify-center w-full ">
          <div className="w-7/8 flex p-2">
            <div className="w-1/3"></div>
            <Link to="/" className="w-1/3 flex justify-center text-xs">
             <div>Home</div> {/* <img className="w-6 sm:w-8 h-6 sm:h-8" src={Logo} alt="" /> */}
            </Link>
            <button className="w-1/3 flex justify-end" onClick={toggleMobile}>
              <RxHamburgerMenu className=" text-xs sm:text-sm" />
            </button>
          </div>
          <div
            className={`absolute bg-dark-700 border-b border-dark-500 w-full top-0 flex justify-center transition-transform duration-300 ${
              mobileOpen ? "translate-y-0" : "-translate-y-28"
            }`}
          >
            <div className="w-7/8 top-0 flex p-2">
              <div className="w-1/3"></div>
              <ul
                onMouseLeave={toggleMobile}
                className="w-1/3 relative flex flex-col justify-center gap-1"
              >
                {closedOptions.map((item, index) => (
                  <Link
                    to={item.to}
                    key={index}
                    className="w-full flex justify-center text-xxxs font-light"
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
              <button className="w-1/3 flex justify-end">
                <RxCross1
                  onClick={toggleMobile}
                  className="text-xs sm:text-sm"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center sticky top-0 text-xxxs py-1 z-30">
          <div className="flex items-center w-3/4 justify-center font-light">
            <div className="flex w-1/3 justify-start gap-8">
              <Link to="/products">Products</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="flex w-1/3 justify-center text-body">
              <Link to="/">
                <div>Home</div>{/* <img className="w-12" src={Logo} alt="" /> */}
              </Link>
            </div>
            <div className="flex w-1/3 justify-end gap-8 text-xxs">
              <Link
                to="/test"
                className="bg-dark-500 px-4 py-1 rounded-md hover:scale-105 transition-all duration-100 hover:bg-dark-300"
              >
                {" "}
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}