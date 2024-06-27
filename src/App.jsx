import Brand from "./components/brand/Brand";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";

export default function App() {
  return (
    <div className="w-full xl:px-24">
      <Navbar />
      <Hero />
      <Brand />
    </div>
  )
}