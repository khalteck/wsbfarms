import data from "../../data/gallery.json";

const Section2 = () => {
  return (
    <section className="w-full min-h-[300px] px-3 py-10 md:py-[80px] lg:px-[200px] bg-green-50 relative">
      <div className="w-full grid gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((x, idx) => {
          return (
            <div
              key={idx}
              className="w-full h-[250px] rounded-xl border border-green-500 bg-green-500/10"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <img
                alt=""
                src={x}
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section2;
