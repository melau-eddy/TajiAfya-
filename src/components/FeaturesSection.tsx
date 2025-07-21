import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Stethoscope, 
  Heart, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Shield,
  TrendingUp,
  Bell,
  Users
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "AI Symptom Assessment",
    description: "Get instant, accurate health assessments based on your symptoms with our advanced diagnostic engine.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Chronic Disease Monitoring",
    description: "Track diabetes, hypertension, and other conditions with personalized dashboards and insights.",
    color: "text-destructive"
  },
  {
    icon: Bell,
    title: "Smart Health Alerts",
    description: "Receive timely notifications about critical health changes via SMS, email, or in-app alerts.",
    color: "text-warning"
  },
  {
    icon: MapPin,
    title: "Healthcare Provider Locator",
    description: "Find nearby clinics, hospitals, and specialists with real-time availability and directions.",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Health Analytics",
    description: "Visualize your health trends with interactive charts and predictive health insights.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant Security",
    description: "Your health data is protected with enterprise-grade encryption and privacy controls.",
    color: "text-muted-foreground"
  },
  {
    icon: MessageSquare,
    title: "Provider Communication",
    description: "Connect directly with your healthcare team through secure messaging and video calls.",
    color: "text-accent-foreground"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock health monitoring with emergency response protocols for critical situations.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Family Care Coordination",
    description: "Manage health records for family members and coordinate care with shared access controls.",
    color: "text-secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Healthcare{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              at Your Fingertips
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ChronicCare combines cutting-edge technology with personalized care to help you 
            manage your health proactively and stay connected with healthcare providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-medical transition-all duration-300 group border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Trusted by 10,000+ patients and 500+ healthcare providers
          </div>
          <p className="text-muted-foreground">
            Join thousands of patients who have improved their health outcomes with ChronicCare
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;