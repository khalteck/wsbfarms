import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-[300px] px-3 py-10 md:py-[80px] lg:px-[200px] bg-green-50 relative">
      <div className="w-full ">
        <h1 className="font-bold text-[1.75rem] md:text-[2.5rem]">
          OUR GALLERY
          <div className="w-full h-[2px] bg-green-500"></div>
        </h1>
        <p className="text-[1.25rem] mt-5">
          Check out our gallery, as we take you on a tour of our farm!
        </p>
        <div className="w-full grid gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          <img
            alt=""
            src="/images/poulty.jpg"
            className="w-full h-auto rounded-xl"
          />
          <img
            alt=""
            src="/images/chick.jpg"
            className="w-full h-auto rounded-xl"
          />
          <img
            alt=""
            src="/images/goat.jpg"
            className="w-full h-auto rounded-xl"
          />
        </div>

        <button
          onClick={() => navigate("/gallery")}
          className="w-fit bg-green-500 border border-green-500 mt-5 md:mt-10 hover:bg-white px-8 py-2 rounded-md text-[#003c1a] font-medium text-[.9rem] md:text-[1rem] transition-all duration-300"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default Section4;
