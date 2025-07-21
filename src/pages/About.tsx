import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Award, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every feature is designed with patient needs at the heart of our platform."
    },
    {
      icon: Users,
      title: "Collaborative Health",
      description: "Bridging the gap between patients and healthcare providers for better outcomes."
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Built with medical professionals to ensure accuracy and reliability."
    },
    {
      icon: Target,
      title: "Preventive Focus",
      description: "Proactive monitoring to prevent health crises before they happen."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ChronicCare
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing chronic disease management by making healthcare 
              accessible, proactive, and personalized for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            To empower patients with chronic conditions to take control of their health through 
            intelligent monitoring, early intervention, and seamless communication with healthcare providers. 
            We believe that with the right tools and support, everyone can live a healthier, more fulfilling life.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-medical transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-xl">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            ChronicCare was founded by a team of healthcare professionals, technologists, 
            and patient advocates who experienced firsthand the challenges of managing chronic 
            conditions. We're committed to creating solutions that make a real difference 
            in people's lives.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Medical Experts</h3>
              <p className="text-muted-foreground">Doctors and nurses guiding our clinical approach</p>
            </div>
            
            <div>
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tech Innovators</h3>
              <p className="text-muted-foreground">Engineers building cutting-edge health solutions</p>
            </div>
            
            <div>
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Patient Advocates</h3>
              <p className="text-muted-foreground">Ensuring every voice is heard and valued</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;