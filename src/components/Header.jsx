import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section based on current route
  useEffect(() => {
    const pathToSectionId = {
      '/': 'home',
      '/home': 'home',
      '/about': 'about',
      '/products': 'products',
      '/customers': 'customers',
      '/contactus': 'contactus'
    };

    const sectionId = pathToSectionId[location.pathname];
    if (sectionId && sectionId !== 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname]);

  const handleNavClick = (path, sectionId) => {
    // Navigate to the route
    navigate(path);
    
    // If clicking HOME, scroll to the very top of the page
    if (path === "/home" || path === "/") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    
    // Close mobile menu
    setMenuOpen(false);
  };

  return (
    <header className="bg-black shadow-sm fixed w-full top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home">
              <img
                src={Logo}
                alt="Logo"
                className="w-16 h-auto hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Center Hamburger Icon (mobile only) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <button
              className="text-white transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Center Menu (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {[
              { name: "HOME", path: "/home", sectionId: "home" },
              { name: "ABOUT", path: "/about", sectionId: "about" },
              { name: "PRODUCTS", path: "/products", sectionId: "products" },
              { name: "CUSTOMERS", path: "/customers", sectionId: "customers" },
              { name: "CONTACTUS", path: "/contactus", sectionId: "contactus" }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.sectionId)}
                className="text-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-black hover:bg-[#BC9667] rounded-md transform hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-[#BC9667] transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-[#BC9667] transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (outside nav but inside header) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-16 left-0 w-full bg-[#f1ede6] py-4 flex flex-col items-center space-y-3 shadow-md z-40 md:hidden"
          >
            {[
              { name: "HOME", path: "/home", sectionId: "home" },
              { name: "ABOUT", path: "/about", sectionId: "about" },
              { name: "PRODUCTS", path: "/products", sectionId: "products" },
              { name: "CUSTOMERS", path: "/customers", sectionId: "customers" },
              { name: "CONTACTUS", path: "/contactus", sectionId: "contactus" }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.sectionId)}
                className="text-black text-base font-semibold tracking-wide hover:bg-[#BC9667] px-4 py-2 hover:text-white rounded-md transform hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
