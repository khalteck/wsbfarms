import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Sec1 from "../components/about/Sec1";
import Sec2 from "../components/about/Sec2";
import Sec3 from "../components/about/Sec3";

const Aboutus = () => {
  return (
    <>
      <Header />
      <main className="w-full pt-[60px] md:pt-[80px] font-light">
        <Sec1 />
        <Sec2 />
        <Sec3 />
      </main>
      <ScrollToTop />
      <Partners />
      <Footer />
    </>
  );
};

export default Aboutus;
