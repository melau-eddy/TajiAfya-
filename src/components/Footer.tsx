import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-xl">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ChronicCare</span>
            </div>
            <p className="text-sm text-background/70">
              Empowering patients with proactive healthcare monitoring and instant access to medical guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-CHRONIC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@chroniccare.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Available nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2024 ChronicCare. All rights reserved. | Improving lives through technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;