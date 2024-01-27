import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Maintennance from "../components/Maintenance";
import Partners from "../components/Partners";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";

const Homepage = () => {
  return (
    <>
      <Maintennance />
      <Header />

      <main className="w-full pt-[60px] md:pt-[80px] font-light">
        <Section1 />

        <Section2 />

        <Section3 />

        <Section4 />
      </main>

      <ScrollToTop />

      <Partners />
      <Footer />
    </>
  );
};

export default Homepage;
