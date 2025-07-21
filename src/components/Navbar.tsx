import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="p-2 bg-gradient-primary rounded-xl shadow-medical">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ChronicCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Button variant="outline" asChild className="transition-all hover:shadow-card">
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-primary hover:opacity-90 transition-all shadow-medical">
              <Link to="/get-started">Get Started</Link>
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
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Features
              </button>
              <Link
                to="/how-it-works"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <div className="pt-2 space-y-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/sign-in" onClick={toggleMenu}>Sign In</Link>
                </Button>
                <Button asChild className="w-full bg-gradient-primary">
                  <Link to="/get-started" onClick={toggleMenu}>Get Started</Link>
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