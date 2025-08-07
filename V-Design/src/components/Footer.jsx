import { Link } from "react-router-dom";
import Logo from "../assets/Logo-V-Transparent.png"
// import Logo from "../assets/Cropped-V_processed.png";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaFacebook,
//   FaYoutube,
// } from "react-icons/fa6";

export function Footer() {
  const sections = [
    {
      id: 0,
      title: "Team",
      content: [
        { title: "Tamim Dostyar", link: "/about" },
        { title: "Evan Breidecker", link: "/about" },
        { title: "Madhav Khanal", link: "/about" },
      ],
    },
    {
      id: 1,
      title: "Support",
      content: [
        { title: "Getting Started", link: "/" },
        { title: "Troubleshooting", link: "/contact" },
        { title: "Contact", link: "/contact" },
        { title: "FAQ", link: "/contact" },
      ],
    },

    {
      id: 2,
      title: "Legal",
      content: [
        { title: "Privacy Policy", link: "/privacy" },
        { title: "Terms of Service", link: "/terms" },
        { title: "Cookie Policy", link: "/cookies" },
      ],
    },
  ];

  return (
    <div>
      <div className="bg-footer w-full flex justify-center min-h-screen text-text fixed top-0 left-0 -z-10">
        <div className="w-3/4 flex justify-center items-center relative"></div>
      </div>
      <div className="bg-footer w-full h-[33%] flex justify-center text-text font-arimo">
        <div className="w-3/4 text-light flex flex-col justify-center items-center gap-8 pt-8">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
              {sections.map((items, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-center gap-4"
                >
                  <h3 className="text-sub-body font-bold">{items.title}</h3>
                  <div className="flex flex-col gap-2 text-gray">
                    {items.content.map((item, itemIndex) => (
                      <span className="font-light text-sm-body" key={itemIndex}>
                        {typeof item === "string" ? (
                          <a
                            className="hover:text-l-text transition-all duration-300"
                            href="/person"
                          >
                            {item}
                          </a>
                        ) : (
                          <a
                            className="hover:text-l-text transition-all duration-300"
                            href={item.link}
                          >
                            {item.title}
                          </a>
                        )}{" "}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 border-t-[1px] border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center w-full text-center">
              <div className="order-2 sm:order-1 w-full sm:w-1/3 justify-start mb-4 sm:mb-0">
                <p className="text-gray sm:text-xxxs md:text-xxs font-light">
                  {" "}
                  © 2025 Vantix. All rights reserved.
                </p>
              </div>
              <div className="w-full sm:w-1/3 flex justify-center order-1">
                <Link to="/">
                  {" "}
                  <img
                  className="w-10 sm:w-12 md:w-16 lg:w-30 mb-2"
                  src={Logo}
                  alt="Logo"
                />
                </Link>
              </div>
              {/* <div className="flex gap-4 text-xs sm:text-sm text-gray w-full sm:w-1/3 justify-center sm:justify-end order-3">
              <FaFacebook className="hover:text-light transition-all duration-300"/>
              <a href="https://www.instagram.com/vantix_ai/">
                <FaInstagram className="hover:text-light transition-all duration-300"/>
              </a>
              <a href="https://www.linkedin.com/company/vantixai/">
                <FaLinkedin className="hover:text-light transition-all duration-300"/>
              </a>
              <FaYoutube className="hover:text-light transition-all duration-300"/>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
