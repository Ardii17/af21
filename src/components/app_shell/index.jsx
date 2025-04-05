import About from "../views/about";
import Hero from "../views/hero";
import Navbar from "../views/navbar";
import { Roboto } from "next/font/google";
import WhoServe from "../views/who";
import Advantages from "../views/advantages";
import Pricing from "../views/pricing";
import { useEffect, useRef } from "react";
import Aos from "aos";
import Footer from "../views/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

function AppShell() {
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const whoServerRef = useRef(null);
  const advantagesRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Atur durasi animasi
  }, []);

  return (
    <section className={`${roboto.className} overflow-hidden`}>
      <Navbar
        heroRef={heroRef}
        howItWorksRef={howItWorksRef}
        whoServerRef={whoServerRef}
        advantagesRef={advantagesRef}
        pricingRef={pricingRef}
      />
      <Hero heroRef={heroRef} />
      <About howItWorksRef={howItWorksRef} />
      <WhoServe whoServerRef={whoServerRef} />
      <Advantages advantagesRef={advantagesRef} />
      <Pricing pricingRef={pricingRef} />
      <Footer
        heroRef={heroRef}
        howItWorksRef={howItWorksRef}
        whoServerRef={whoServerRef}
        advantagesRef={advantagesRef}
        pricingRef={pricingRef}
      />
    </section>
  );
}

export default AppShell;
