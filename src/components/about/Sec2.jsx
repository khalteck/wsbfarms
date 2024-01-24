const Sec2 = () => {
  return (
    <section className="w-full px-3 py-10 md:py-[80px] lg:px-[150px]">
      <div className="w-full flex gap-5 md:gap-10 md:flex-row flex-col mt-10 md:mt-[60px]">
        <div className="relative w-full">
          <div className="bg-part w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-cover bg-center absolute top-3 md:left-10 z-[1]"></div>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] absolute top-0 left-5 md:left-20 bg-green-500 rounded-full"></div>
        </div>
        <div className="w-full flex flex-col mt-40 md:mt-0">
          <h1 className="font-bold text-[1.5rem] md:text-[2rem]">About Us</h1>
          <p className="text-[1rem]">
            Wonderful Springboard Farms was birthed many years ago but started
            operations fully in theyear 2002. Due to his passion for livestock
            farming, self-sustenance, entrepreneurship and making impact to
            mankind, Mr. Abiodun Michael Abiola, who is the founder, with the
            help of God, singlehandedly started the farm with successful fish
            farming operations as well as poultryfarming (Egg Production) before
            diversifying to crop production and some other farming practices. In
            the year 2011, the company was registered with the Corporate Affairs
            Commission. Our successes over the years didn’t go unnoticed, as the
            company has received many major awards in Nigeria for her
            contribution to the Agricultural sector and food security.
            Currently, our poultry farm produces over thousands of crates of
            eggs daily, Broiler and Pullet Day Old Chicks. The company also has
            branches in Okeho, Kajola Local Government Areaof Oyo State,
            Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
