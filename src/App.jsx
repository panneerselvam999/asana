import Goals from "./components/apart/Goals";
import Brand from "./components/brand/Brand";
import CarouselMain from "./components/carousel/CarouselMain";
import Features from "./components/features/Features";
import Firms from "./components/firms/Firms";
import FooterBottom from "./components/footer/FooterBottom";
import FooterMain from "./components/footer/FooterMain";
import FooterTop from "./components/footer/FooterTop";
import GetStarted from "./components/getStarted/GetStarted";
import Hero from "./components/hero/Hero";
import Integrations from "./components/integrations/Integrations";
import Navbar from "./components/nav/Navbar";
import Security from "./components/security/Security";

export default function App() {
  return (
    <>
      {/* <div className="w-full xl:px-24"> */}
      <Navbar />
      <Hero />
      <Brand />
      <Features />
      <Goals />
      <Security />
      <Integrations />
      <CarouselMain />
      <Firms />
      <GetStarted />
      <FooterTop />
      <FooterMain />
      <FooterBottom />
     
      {/* </div> */}
    </>
  );
}
