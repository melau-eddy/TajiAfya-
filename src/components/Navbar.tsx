import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-xl shadow-medical">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ChronicCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button variant="outline" className="transition-all hover:shadow-card">
              Sign In
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-all shadow-medical">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <div className="pt-2 space-y-2">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;