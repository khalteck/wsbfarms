// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
// import { useNavigate } from "react-router-dom";

const Slider = () => {
  const content = (
    <>
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#0f172a] to-[#0f172a]/20 px-3 pt-[100px] md:pt-[10px] lg:px-[200px] lg:pt-[120px]">
        <div className="flex flex-col gap-3 sm:mt-[100px] lg:mt-0">
          <h1 className="text-[2rem] md:text-[3.5rem] font-bold text-white leading-tight">
            WELCOME TO
            <br /> <span className="text-green-500"> WSBFARMS</span>
            <br /> SLOGAN HERE..
          </h1>
          <div className="flex gap-3 md:flex-row flex-col">
            <button
              onClick={() => {
                const element = document.getElementById("about");
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              className="w-fit bg-green-500 hover:bg-white px-8 py-2 rounded-md text-[#003c1a] font-medium text-[.9rem] md:text-[1rem] transition-all duration-300"
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                const element = document.documentElement;
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }}
              className="w-fit bg-green-500 hover:bg-white px-8 py-2 rounded-md text-[#003c1a] font-medium text-[.9rem] md:text-[1rem] transition-all duration-300"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <SwiperSlide>
          <section className="w-full min-h-[400px] md:min-h-[450px] md:h-[60vh] bg-part bg-cover bg-center relative z-0">
            {content}
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="w-full min-h-[400px] md:min-h-[450px] md:h-[60vh] bg-hero1 bg-cover bg-center relative z-0">
            {content}
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="w-full min-h-[400px] md:min-h-[450px] md:h-[60vh] bg-hero3 bg-cover bg-center relative z-0">
            {content}
          </section>
        </SwiperSlide>
        {/* <SwiperSlide>
          <section className="w-full min-h-[400px] md:min-h-[450px] md:h-[60vh] bg-hero4 bg-cover bg-center relative z-0">
            {content}
          </section>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
