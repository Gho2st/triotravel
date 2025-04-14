import About from "../UI/Homepage/About";
import Cta from "../UI/Homepage/Cta";
import Hero from "../UI/Homepage/Hero";
import Offer from "../UI/Homepage/Offer";
import Why from "../UI/Homepage/Why";
import Services from "../UI/Homepage/Services";
import Reviews from "../UI/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Why />
      <Services />
      <Reviews />
      <Cta />
    </>
  );
}
