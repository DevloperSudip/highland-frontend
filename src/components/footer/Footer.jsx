import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
} from "lucide-react";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#050F1F] text-white pt-20">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-bold">
              HighLand
            </h2>

            <p className="uppercase tracking-[5px] text-xs text-[#D4AF37] mt-2">
              Builders & Developers
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              HighLand Builders & Developers delivers premium
              residential and commercial plots with modern
              infrastructure and complete legal transparency.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#D4AF37] transition flex items-center justify-center"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#D4AF37] transition flex items-center justify-center"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#D4AF37] transition flex items-center justify-center"
              >
                <Linkedin size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "Projects",
                "Plots",
                "Amenities",
                "Gallery",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#D4AF37] transition"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Projects */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Our Projects
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>HighLand City</li>

              <li>HighLand Greens</li>

              <li>HighLand Prime</li>

              <li>HighLand Enclave</li>

              <li>Upcoming Township</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <MapPin
                  className="text-[#D4AF37] mt-1"
                  size={20}
                />

                <div>

                  <p className="text-gray-400">
                    Durgapur,
                  </p>

                  <p className="text-gray-400">
                    West Bengal, India
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone
                  className="text-[#D4AF37]"
                  size={20}
                />

                <p className="text-gray-400">

                  +91 9876543210

                </p>

              </div>

              <div className="flex gap-4">

                <Mail
                  className="text-[#D4AF37]"
                  size={20}
                />

                <p className="text-gray-400 break-all">

                  info@highlandbuildersdevelopers.com

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-16 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-gray-400 text-center">

              © 2026 HighLand Builders & Developers.
              All Rights Reserved.

            </p>

            <button
              onClick={scrollTop}
              className="
                w-12
                h-12
                rounded-full
                bg-[#D4AF37]
                hover:bg-yellow-500
                transition
                flex
                items-center
                justify-center
              "
            >

              <ChevronUp size={20} />

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;