import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <header
      className={`w-full h-[60px] bg-green-50 text-black shadow-md md:h-[80px] flex md:gap-20 lg:gap-[150px] justify-between px-3 lg:px-[200px] items-center transition-all duration-700 fixed top-0 left-0 z-[100]`}
    >
      <Link to="/">
        <img
          alt=""
          src="/images/logo.png"
          className="w-[50px] md:w-[70px] h-auto rounded-sm md:rounded-b-lg"
        />
      </Link>
      <div
        onClick={handleClick}
        className="flex flex-col gap-2 w-10 md:hidden cursor-pointer"
      >
        <div className={`w-full h-1 bg-black rounded-lg`}></div>
        <div className={`w-full h-1 bg-black rounded-lg`}></div>{" "}
      </div>

      <ul className="gap-5 lg:gap-8 text-[1rem] items-center hidden md:flex">
        <li
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-green-500 transition-all duration-300"
        >
          Home
        </li>
        <li
          onClick={() => {
            const element = document.getElementById("about");
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
          className="cursor-pointer hover:text-green-500 transition-all duration-300"
        >
          About
        </li>
        <li
          onClick={() => {
            const element = document.getElementById("vision");
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
          className="cursor-pointer hover:text-green-500 transition-all duration-300"
        >
          Our Vision
        </li>
        <li
          onClick={() => navigate("/gallery")}
          className="cursor-pointer hover:text-green-500 transition-all duration-300"
        >
          Gallery
        </li>

        <li
          onClick={() => {
            const element = document.getElementById("partners");
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
          className="cursor-pointer hover:text-green-500 transition-all duration-300 whitespace-nowrap"
        >
          Our Partners
        </li>
        <li
          onClick={() => {
            const element = document.documentElement;
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
          className="cursor-pointer hover:text-green-500 transition-all duration-300"
        >
          Contact
        </li>
      </ul>

      {/* mobile dropdown */}
      {openMenu && (
        <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
          <div
            onClick={() => {
              handleClick();
            }}
            className="w-fit h-fit p-2  bg-white rounded-full cursor-pointer mr-[25px] absolute top-4 right-0"
          >
            <img
              className="w-5 h-5  text-white"
              alt=""
              src="/images/icons8-close-50.png"
            />
          </div>
          <ul className="slide float-right w-full min-h-[150px] bg-[#0f172a] py-10 text-white gap-3 items-center md:hidden flex flex-col slideD">
            <li
              onClick={() => {
                handleClick();
                navigate("/");
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              Home
            </li>

            <li
              onClick={() => {
                handleClick();
                const element = document.getElementById("about");
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              About
            </li>

            <li
              onClick={() => {
                handleClick();
                const element = document.getElementById("vision");
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              Our Vision
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/gallery");
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              Gallery
            </li>

            <li
              onClick={() => {
                handleClick();
                const element = document.getElementById("partners");
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              Our Partners
            </li>

            <li
              onClick={() => {
                handleClick();
                const element = document.documentElement;
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }}
              className="py-2 border-b border-white/50 uppercase"
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
