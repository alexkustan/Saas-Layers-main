import { Features } from "@/components/features";
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
    </div>
  );
};

export default Home;
