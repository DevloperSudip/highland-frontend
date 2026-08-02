import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  "Home",
  "Projects",
  "Plots",
  "About Us",
  "Amenities",
  "Gallery",
  "Contact",
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0B1F3A]">
              HighLand
            </h1>

            <p className="uppercase text-[10px] tracking-[4px] text-[#D4AF37]">
              Builders & Developers
            </p>

          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {menuItems.map((item) => (

              <a
                key={item}
                href="#"
                className="relative text-[15px] font-medium text-[#0B1F3A] hover:text-[#D4AF37] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {item}
              </a>

            ))}

          </nav>

          {/* Desktop Button */}

          <button
            className="hidden lg:block bg-[#D4AF37] hover:bg-yellow-600 transition-all duration-300 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
          >
            Book a Visit
          </button>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >

        <div className="bg-white shadow-lg">

          {menuItems.map((item) => (

            <a
              key={item}
              href="#"
              className="block px-6 py-4 border-b hover:bg-gray-50"
              onClick={() => setMobileMenu(false)}
            >
              {item}
            </a>

          ))}

          <div className="p-5">

            <button className="w-full bg-[#D4AF37] text-white py-3 rounded-xl font-semibold">
              Book a Visit
            </button>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;