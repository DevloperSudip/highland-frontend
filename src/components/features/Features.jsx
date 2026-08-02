import {
  MapPin,
  ShieldCheck,
  FileText,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: <MapPin size={34} />,
    title: "Prime Locations",
    subtitle: "Plots in fast developing areas",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Secure Investment",
    subtitle: "Legal & transparent process",
  },
  {
    icon: <FileText size={34} />,
    title: "Easy Documentation",
    subtitle: "Hassle free paperwork",
  },
  {
    icon: <Headphones size={34} />,
    title: "24/7 Support",
    subtitle: "Always available to help",
  },
];

const Features = () => {
  return (
    <section className="relative -mt-12 z-30 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-8 border-b lg:border-b-0 lg:border-r last:border-r-0 hover:bg-slate-50 transition"
            >

              <div className="w-16 h-16 rounded-full bg-[#0B1F3A] text-yellow-400 flex justify-center items-center">

                {item.icon}

              </div>

              <div>

                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.subtitle}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;