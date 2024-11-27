import { CalToAction } from "@/components/cal-to-action";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Integration } from "@/components/integration";
import { Introducing } from "@/components/introducing";
import { LogoTicker } from "@/components/logo-ticker";
import { Navbar } from "@/components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introducing />
      <Features />
      <Integration />
      <Faq />
      <CalToAction />
      <Footer />
    </div>
  );
};

export default Home;
