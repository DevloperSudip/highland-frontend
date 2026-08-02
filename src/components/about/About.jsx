import { CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Images */}

          <div className="relative">

            <img
              src="/images/about1.jpg"
              alt="HighLand Builders"
              className="rounded-3xl shadow-2xl h-[550px] w-full object-cover"
            />

            <div className="absolute -bottom-10 -right-10 bg-white rounded-3xl shadow-xl p-8">

              <h2 className="text-5xl font-bold text-[#081B33]">
                15+
              </h2>

              <p className="text-gray-500 mt-2">
                Years Experience
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">

              About Us

            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#081B33] leading-tight">

              Building Trust
              <br />
              Creating Future

            </h2>

            <p className="mt-8 text-gray-600 leading-8">

              HighLand Builders & Developers is one of the leading
              real estate developers delivering premium residential
              and commercial projects with complete legal transparency,
              modern infrastructure and excellent investment value.

            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex items-start gap-3">

                <CheckCircle
                  className="text-[#D4AF37] mt-1"
                  size={22}
                />

                <div>

                  <h4 className="font-semibold">

                    Premium Locations

                  </h4>

                  <p className="text-gray-500 text-sm mt-1">

                    Fast developing investment zones.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle
                  className="text-[#D4AF37] mt-1"
                  size={22}
                />

                <div>

                  <h4 className="font-semibold">

                    RERA Approved

                  </h4>

                  <p className="text-gray-500 text-sm mt-1">

                    Fully legal documentation.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle
                  className="text-[#D4AF37] mt-1"
                  size={22}
                />

                <div>

                  <h4 className="font-semibold">

                    Easy EMI

                  </h4>

                  <p className="text-gray-500 text-sm mt-1">

                    Flexible payment options.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle
                  className="text-[#D4AF37] mt-1"
                  size={22}
                />

                <div>

                  <h4 className="font-semibold">

                    24×7 Support

                  </h4>

                  <p className="text-gray-500 text-sm mt-1">

                    Dedicated customer support.

                  </p>

                </div>

              </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>

                <h3 className="text-4xl font-bold text-[#081B33]">

                  2000+

                </h3>

                <p className="text-gray-500">

                  Happy Families

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#081B33]">

                  5000+

                </h3>

                <p className="text-gray-500">

                  Plots Sold

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#081B33]">

                  15+

                </h3>

                <p className="text-gray-500">

                  Awards

                </p>

              </div>

            </div>

            {/* Button */}

            <button
              className="
              mt-12
              bg-[#081B33]
              hover:bg-[#14345F]
              text-white
              px-8
              py-4
              rounded-xl
              flex
              items-center
              gap-3
              transition
              "
            >

              Know More

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;