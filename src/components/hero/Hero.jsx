import { useEffect, useState } from "react";
import {
  ArrowRight,
  Search,
  MapPin,
  Building2,
  IndianRupee,
  Ruler,
  ChevronDown,
} from "lucide-react";

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Images */}

      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            transform: currentImage === index ? "scale(1.08)" : "scale(1)",
            transition: "all 6s linear",
          }}
        />
      ))}

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#06172D]/95 via-[#06172D]/70 to-[#06172D]/40"></div>

      {/* Content */}

      <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex items-center px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl">

          <span className="inline-block bg-yellow-500/20 text-yellow-400 px-5 py-2 rounded-full text-sm tracking-widest uppercase mb-6">
            Find Your Dream Property
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">

            Build Your Future

            <br />

            in the

            <span className="text-[#D4AF37]">
              {" "}Perfect Location
            </span>

          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-xl leading-8">

            Premium Residential & Commercial Plots in
            the fastest growing locations with complete
            legal transparency and modern infrastructure.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button className="bg-[#D4AF37] hover:bg-yellow-600 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2">

              Explore Projects

              <ArrowRight size={18} />

            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl text-white">

              View Available Plots

            </button>

          </div>

        </div>

      </div>

      {/* Search Box */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-30">

        <div className="bg-white rounded-2xl shadow-2xl p-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            <div>
              <label className="text-sm text-gray-500">Location</label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3">
                <MapPin size={18} className="text-yellow-500" />
                <input
                  className="ml-2 w-full outline-none"
                  placeholder="Select Location"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Plot Type</label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3">

                <Building2 size={18} className="text-yellow-500" />

                <select className="ml-2 w-full outline-none bg-transparent">

                  <option>Residential</option>

                  <option>Commercial</option>

                </select>

              </div>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Plot Size
              </label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3">

                <Ruler size={18} className="text-yellow-500" />

                <input
                  className="ml-2 w-full outline-none"
                  placeholder="1200 Sq.ft"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Budget
              </label>

              <div className="flex items-center mt-2 border rounded-xl px-4 py-3">

                <IndianRupee
                  size={18}
                  className="text-yellow-500"
                />

                <input
                  className="ml-2 w-full outline-none"
                  placeholder="15 Lakh"
                />

              </div>

            </div>

            <button className="bg-[#D4AF37] hover:bg-yellow-600 text-white rounded-xl flex items-center justify-center gap-2 font-semibold">

              <Search size={18} />

              Search

            </button>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white animate-bounce">

        <ChevronDown size={30} />

      </div>

    </section>
  );
};

export default Hero;