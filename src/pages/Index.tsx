import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SymptomChecker from "@/components/SymptomChecker";
import PatientDashboard from "@/components/PatientDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SymptomChecker />
      <PatientDashboard />
      <Footer />
    </div>
  );
};

export default Index;
