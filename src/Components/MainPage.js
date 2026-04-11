import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import FeatureCars from "./Main/FeatureCars";
import Features from "./Main/Features";
import HeaderBanner from "./Main/HeaderBanner";
import Testimonials from "./Main/Testimonials";

function MainPage() {
  return (
    <>
      <Header />
      <HeaderBanner />
      <FeatureCars />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default MainPage;
