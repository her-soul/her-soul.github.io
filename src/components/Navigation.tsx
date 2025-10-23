import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Soulista Text - Left */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Soulista
            </span>
          </Link>

          {/* Desktop Navigation - Center with Logo */}
          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Soulista" className="h-12 w-auto" />
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Shopping Bag - Right */}
          <div className="hidden md:block">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
