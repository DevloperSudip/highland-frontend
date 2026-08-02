import {
  ShieldCheck,
  Trees,
  Car,
  Wifi,
  Dumbbell,
  School,
  Hospital,
  Camera,
} from "lucide-react";

const amenities = [
  {
    id: 1,
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "24x7 Security",
    desc: "Gated community with CCTV surveillance.",
  },
  {
    id: 2,
    icon: <Trees className="w-10 h-10" />,
    title: "Green Parks",
    desc: "Beautiful landscaped gardens & open spaces.",
  },
  {
    id: 3,
    icon: <Car className="w-10 h-10" />,
    title: "Wide Roads",
    desc: "40ft & 60ft RCC internal roads.",
  },
  {
    id: 4,
    icon: <Wifi className="w-10 h-10" />,
    title: "High Speed Internet",
    desc: "Fiber internet connectivity.",
  },
  {
    id: 5,
    icon: <Dumbbell className="w-10 h-10" />,
    title: "Club House",
    desc: "Modern gym & indoor games.",
  },
  {
    id: 6,
    icon: <School className="w-10 h-10" />,
    title: "Nearby Schools",
    desc: "Top schools within 5 KM.",
  },
  {
    id: 7,
    icon: <Hospital className="w-10 h-10" />,
    title: "Hospital",
    desc: "Emergency healthcare nearby.",
  },
  {
    id: 8,
    icon: <Camera className="w-10 h-10" />,
    title: "CCTV Monitoring",
    desc: "Complete surveillance system.",
  },
];

const Amenities = () => {
  return (
    <section className="py-28 bg-[#081B33]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">

            Amenities

          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white">

            Luxury Lifestyle

          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">

            Every HighLand project comes with thoughtfully planned
            amenities to ensure a luxurious and comfortable lifestyle.

          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {amenities.map((item) => (

            <div
              key={item.id}
              className="
                group
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                backdrop-blur-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:bg-[#D4AF37]
                hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)]
              "
            >

              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  text-[#D4AF37]
                  group-hover:text-white
                  group-hover:bg-white/20
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-300 group-hover:text-white leading-7">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#D4AF37]">
              15+
            </h2>

            <p className="text-gray-300 mt-3">
              Years Experience
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#D4AF37]">
              2000+
            </h2>

            <p className="text-gray-300 mt-3">
              Happy Families
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#D4AF37]">
              5000+
            </h2>

            <p className="text-gray-300 mt-3">
              Plots Sold
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-5xl font-bold text-[#D4AF37]">
              100%
            </h2>

            <p className="text-gray-300 mt-3">
              Legal Projects
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Amenities;