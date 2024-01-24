import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[300px] px-3 py-10 md:py-[80px] lg:px-[200px] bg-green-50 relative"
    >
      <div className="w-full ">
        <h1 className="font-bold text-[1.75rem] md:text-[2.5rem]">
          ABOUT WSBFARMS
          <div className="w-full h-[2px] bg-green-500"></div>
        </h1>
        <div className="w-full flex gap-5 md:gap-10 md:flex-row flex-col-reverse mt-10 md:mt-[60px]">
          <div className="w-full">
            <p className="text-[1.25rem]">
              Wonderful Springboard Farms was birthed many years ago but started
              operations fully in the year 2002. Due to his passion for
              livestock farming, self-sustenance, entrepreneurship and making
              impact to mankind, Mr. Abiodun Michael Abiola, who is the founder,
              with the help of God, singlehandedly started the farm with
              successful fish farming operations as well as poultry farming (Egg
              Production) before diversifying to crop production and some other
              farming practices.
            </p>
            <div className="flex gap-3 md:flex-row flex-col">
              <button
                onClick={() => {
                  const element = document.documentElement;
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
                }}
                className="w-fit bg-green-500 border border-green-500 mt-5 hover:bg-white px-8 py-2 rounded-md text-[#003c1a] font-medium text-[.9rem] md:text-[1rem] transition-all duration-300"
              >
                GET IN TOUCH
              </button>
              <Link to={"/about"}>
                <button className="w-fit bg-green-500 border border-green-500 mt-5 hover:bg-white px-8 py-2 rounded-md text-[#003c1a] font-medium text-[.9rem] md:text-[1rem] transition-all duration-300">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          <img
            alt=""
            src="/images/poulty.jpg"
            className="w-full md:w-1/2 max-w-[700px] max-h-[400px] h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
