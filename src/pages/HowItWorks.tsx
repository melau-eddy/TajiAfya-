import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, UserPlus, Stethoscope, TrendingUp, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and provide basic health information to personalize your experience.",
      details: [
        "Quick 5-minute registration",
        "Secure health information storage",
        "HIPAA-compliant data protection"
      ]
    },
    {
      icon: Stethoscope,
      title: "Health Assessment",
      description: "Use our AI-powered symptom checker for immediate health insights.",
      details: [
        "Answer guided health questions",
        "Get instant risk assessments",
        "Receive clinic recommendations"
      ]
    },
    {
      icon: TrendingUp,
      title: "Monitor & Track",
      description: "Log daily health metrics and track your chronic conditions over time.",
      details: [
        "Blood pressure & glucose tracking",
        "Medication adherence logs",
        "Interactive health analytics"
      ]
    },
    {
      icon: Bell,
      title: "Stay Connected",
      description: "Receive alerts and maintain communication with your healthcare providers.",
      details: [
        "Critical health alerts via SMS",
        "Provider notifications",
        "Emergency contact protocols"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              How{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ChronicCare
              </span>{" "}
              Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our simple 4-step process helps you take control of your health with 
              intelligent monitoring and proactive care management.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div className="h-px bg-gradient-primary flex-1 opacity-30"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="shadow-medical border-border/50 hover:shadow-card transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-primary rounded-xl">
                            <step.icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-muted-foreground">
                              <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative">
                      {/* Placeholder for step illustration */}
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border/50 flex items-center justify-center">
                        <step.icon className="h-24 w-24 text-primary/30" />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full opacity-20"></div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full opacity-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose ChronicCare?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Medical-Grade Accuracy</h3>
              <p className="text-muted-foreground">
                Built with healthcare professionals to ensure clinical accuracy and reliability.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <Bell className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Proactive Monitoring</h3>
              <p className="text-muted-foreground">
                Get alerts before health issues become emergencies with smart monitoring.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Better Outcomes</h3>
              <p className="text-muted-foreground">
                Patients using ChronicCare show 40% better health outcomes than traditional care.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Ready to take control of your health?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary shadow-medical hover:opacity-90 transition-all">
                <Link to="/get-started">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:shadow-card transition-all">
                <Link to="/sign-in">
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;