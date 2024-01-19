import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Section2 from "../components/gallery/Section2";
import Section1 from "../components/gallery/section1";

const Gallery = () => {
  return (
    <>
      <Header />

      <main className="w-full pt-[60px] md:pt-[80px] font-light">
        <Section1 />

        <Section2 />
      </main>

      <ScrollToTop />

      <Partners />
      <Footer />
    </>
  );
};

export default Gallery;
