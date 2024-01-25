const Section3 = () => {
  return (
    <section
      id="vision"
      className="w-full min-h-[300px] px-3 py-10 md:py-[80px] lg:px-[200px] bg-green-50 relative"
    >
      <div className="w-full ">
        <h1 className="font-bold text-[1.75rem] md:text-[2.5rem] text-right">
          OUR VISION
          <div className="w-full h-[2px] bg-green-500"></div>
        </h1>
        <div className="w-full flex gap-5 md:gap-10 md:flex-row flex-col mt-10 md:mt-[60px]">
          <img
            alt=""
            src="/images/chick.jpg"
            className="w-full md:w-1/2 max-w-[700px] h-auto max-h-[400px] rounded-xl object-cover"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
          />

          <div className="w-full">
            <p
              className="text-[1.25rem]"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Practicing Agriculture in an excellent way with high sense of
              integrity and having great and immeasurable positive impacts on
              mankind globally through our wholesome products and quality
              services and above all bringing glory to the name of our God
              because we believe all that we have come from Him.
            </p>

            <button
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
