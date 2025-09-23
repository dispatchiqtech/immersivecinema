import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CreatorsSection from "@/components/CreatorsSection";
import ViewersSection from "@/components/ViewersSection";
import BetaForm from "@/components/BetaForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <HowItWorks />
      <CreatorsSection />
      <ViewersSection />
      <BetaForm />
      <Footer />
    </main>
  );
};

export default Index;
