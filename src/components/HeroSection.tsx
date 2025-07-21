import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  const scrollToSymptomChecker = () => {
    const element = document.getElementById('symptom-checker');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-background min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Trusted Healthcare Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Always Protected
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Monitor chronic conditions, get instant symptom assessments, and stay connected 
                with healthcare providers. ChronicCare makes healthcare accessible, proactive, and personal.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToSymptomChecker}
                className="bg-gradient-primary shadow-medical hover:opacity-90 transition-all group"
              >
                Start Health Assessment
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:shadow-card transition-all">
                <Link to="/how-it-works">Watch Demo</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:mt-0 mt-12">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Healthcare professional using ChronicCare platform"
                className="rounded-2xl shadow-medical w-full h-auto"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-card animate-pulse-medical">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Real-time Alerts</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-card">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Connected Care</span>
                </div>
              </div>
            </div>
            
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-3xl -z-10 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;