/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-[#0f172a] pt-[50px] text-[.95rem] text-slate-200">
      <div className="w-full mb-[60px] px-4 sm:px-[30px] lg:px-[80px] flex flex-col md:flex-row gap-8 justify-center">
        <ul className="w-[fit-content] md:w-[250px]">
          <li className="mb-4">
            {/* <div className="flex gap-2 items-center w-[150px] h-[60px] border-2 border-white">
              LOGO HERE
            </div> */}
            <img
              alt=""
              src="/images/logo.png"
              className="w-[50px] md:w-[70px] h-auto"
            />
          </li>
          {/* <li className="">WSBFARMS SLOGAN HERE...</li> */}
          <li className="mt-3">
            No. 3, Fatabete Village, Isokan Area, Lagelu Local Government,
            Ibadan
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex-col gap-3 md:hidden flex">
          <li className="w-[fit-content] font-bold">Socials</li>
          <a href="#" target="_blank" rel="noreferrer">
            <li className="w-[fit-content] cursor-pointer hover:text-green-500 flex gap-2 items-center">
              Whatsapp{" "}
              <img
                alt=""
                src="/images/icons8-whatsapp-48.png"
                className="w-4 h-4"
              />
            </li>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <li className="w-[fit-content] cursor-pointer hover:text-green-500 flex gap-2 items-center">
              Facebook{" "}
              <img
                alt=""
                src="/images/icons8-facebook-48.png"
                className="w-4 h-4"
              />
            </li>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <li className="w-[fit-content] cursor-pointer hover:text-green-500 flex gap-2 items-center">
              Instagram{" "}
              <img
                alt=""
                src="/images/icons8-instagram-50.png"
                className="w-4 h-4"
              />
            </li>
          </a>
        </ul>

        <ul className="w-full md:w-[200px] flex flex-col gap-3">
          <li className="w-[fit-content] font-bold">Browse</li>
          <li
            onClick={() => navigate("/")}
            className="w-[fit-content] cursor-pointer hover:text-green-500"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/gallery")}
            className="w-[fit-content] cursor-pointer hover:text-green-500"
          >
            Gallery
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex flex-col gap-3">
          <li className="w-[fit-content] font-bold">Contact Information</li>
          {/* <li className="w-[fit-content] cursor-pointer hover:text-green-500">
            <a href="#">Tel: NUMBER HERE</a>
          </li> */}
          <li className="w-[fit-content] cursor-pointer hover:text-green-500">
            <a href="tel:+234 808 505 0500">Mob: +234 808 505 0500</a>
          </li>
          <li className="w-[fit-content] cursor-pointer hover:text-green-500">
            <a href="#">
              Email: abiodun_abiola02@yahoo.com, wsbexcellence@gmail.com
            </a>
          </li>
          <li
            onClick={() => navigate("/")}
            className="w-[fit-content] cursor-pointer hover:text-green-500"
          >
            wsbfarms.ng
          </li>
        </ul>

        <ul className="w-full md:w-[250px] flex-col gap-3 hidden md:flex">
          <li className="w-[fit-content] font-bold">Socials</li>
          <a href="#" target="_blank" rel="noreferrer">
            <li className="w-[fit-content] cursor-pointer hover:text-green-500 flex gap-2 items-center">
              Whatsapp{" "}
              <img
                alt=""
                src="/images/icons8-whatsapp-48.png"
                className="w-4 h-4"
              />
            </li>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <li className="w-[fit-content] cursor-pointer hover:text-green-500 flex gap-2 items-center">
              Facebook{" "}
              <img
                alt=""
                src="/images/icons8-facebook-48.png"
                className="w-4 h-4"
              />
            </li>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <li className="w-[fit-content] cursor-pointer hover:text-green-500 flex gap-2 items-center">
              Instagram{" "}
              <img
                alt=""
                src="/images/icons8-instagram-50.png"
                className="w-4 h-4"
              />
            </li>
          </a>
        </ul>
      </div>
      <div className="w-full h-[80px] flex justify-center items-center border-t border-[#a359fb]/30 text-[.75rem]">
        Copyright @2024 Wsbfarms. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
