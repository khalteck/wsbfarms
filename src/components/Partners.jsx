// import { useNavigate } from "react-router-dom";

const Partners = () => {
  //   const navigate = useNavigate();
  return (
    <section
      id="partners"
      className="w-full h-[400px] md:mb-0 bg-part bg-cover bg-center relative text-white"
    >
      <div className="absolute w-full h-full bg-gradient-to-t from-[#0f172a] to-[#0f172a]/40 px-3 py-[70px] lg:px-[200px]">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-bold text-[1.5rem]"
        >
          OUR PARTNERS
        </h1>
        <p className="mt-3 text-[1.25rem]">
          Click to navigate to each of our partners page.
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="w-full md:w-[60%] grid grid-cols-3 gap-4 md:gap-8 mt-5"
        >
          <a href="https://www.afis.ng/" target="_blank" rel="noreferrer">
            <img
              alt=""
              src="/images/afis-logo.jpeg"
              className="w-full h-auto hover:scale-125 transition-all duration-300"
            />
          </a>

          <a href="https://irokoevents.ng/" target="_blank" rel="noreferrer">
            <img
              alt=""
              src="/images/iroko-logo.png"
              className="w-full h-auto hover:scale-125 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
