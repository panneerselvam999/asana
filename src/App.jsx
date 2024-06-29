import Goals from "./components/apart/Goals";
import Brand from "./components/brand/Brand";
import Features from "./components/features/Features";
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
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* </div> */}
    </>
  );
}
