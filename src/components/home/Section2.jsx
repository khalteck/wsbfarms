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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet.
            </p>
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
          </div>

          <img
            alt=""
            src="/images/poulty.jpg"
            className="w-full md:w-1/2 max-w-[700px] h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
