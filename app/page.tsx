import About from "./components/About";
import Criteria from "./components/Criteria";
import IntroSection from "./components/IntroSection";
import Promo from "./components/Promo";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <About />
      <Criteria />
      <Promo />
      <Testimonial />
    </main>
  );
}
