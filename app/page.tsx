import Hero from "components/home/Hero";
import Stats from "components/home/Stats";
import Differentiation from "components/home/Differentiation";
import Services from "components/home/Services";
import Portfolio from "components/home/Portfolio";
import Testimonials from "components/home/Testimonials";
import WhyUs from "components/home/WhyUs";
import Process from "components/home/Process";
import Industries from "components/home/Industries";
import TechStack from "components/home/TechStack";
import Engagement from "components/home/Engagement";
import Guarantee from "components/home/Guarantee";
import FAQ from "components/home/FAQ";
import Contact from "components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Differentiation />
      <Services />
      <Testimonials />
      <Portfolio />
      <WhyUs />
      <Process />
      <Industries />
      <TechStack />
      <Engagement />
      <Guarantee />
      {/* <FAQ /> */}
      <Contact />
    </>
  );
}
