import {
  MapPin,
  ArrowRight,
  Heart,
  Star,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
      group
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-3
      "
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <img
          src={project.image}
          alt={project.name}
          className="
          w-full
          h-full
          object-cover
          group-hover:scale-110
          duration-700
          "
        />

        {/* Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/10
          to-transparent
          "
        ></div>

        {/* Badge */}

        <div
          className="
          absolute
          top-5
          left-5
          bg-[#D4AF37]
          text-white
          text-xs
          font-semibold
          px-4
          py-2
          rounded-full
          "
        >
          NEW LAUNCH
        </div>

        {/* Wishlist */}

        <button
          className="
          absolute
          top-5
          right-5
          w-11
          h-11
          rounded-full
          bg-white
          shadow-lg
          flex
          items-center
          justify-center
          hover:bg-red-500
          hover:text-white
          transition
          "
        >
          <Heart size={18} />
        </button>

        {/* Bottom */}

        <div className="absolute bottom-5 left-5 text-white">

          <div className="flex gap-1 mb-2">

            <Star fill="#FFD700" color="#FFD700" size={16} />
            <Star fill="#FFD700" color="#FFD700" size={16} />
            <Star fill="#FFD700" color="#FFD700" size={16} />
            <Star fill="#FFD700" color="#FFD700" size={16} />
            <Star fill="#FFD700" color="#FFD700" size={16} />

          </div>

          <h3 className="text-3xl font-bold">

            {project.name}

          </h3>

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <div className="flex items-center gap-2 text-gray-500">

          <MapPin
            size={18}
            className="text-[#D4AF37]"
          />

          {project.location}

        </div>

        <div className="flex items-center gap-2 mt-5">

          <ShieldCheck
            size={18}
            className="text-green-600"
          />

          <span className="text-sm">
            RERA Approved
          </span>

        </div>

        <div className="flex items-center gap-2 mt-3">

          <Ruler
            size={18}
            className="text-[#D4AF37]"
          />

          <span>
            1200 - 2400 Sq.ft
          </span>

        </div>

        <h2
          className="
          mt-6
          text-4xl
          font-bold
          text-[#081B33]
          "
        >
          {project.price}
        </h2>

        <p className="text-gray-500">

          Starting Price

        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            className="
            py-4
            rounded-xl
            bg-[#081B33]
            text-white
            font-semibold
            hover:bg-[#163A67]
            transition
            "
          >
            View Details
          </button>

          <button
            className="
            py-4
            rounded-xl
            border-2
            border-[#D4AF37]
            text-[#D4AF37]
            font-semibold
            hover:bg-[#D4AF37]
            hover:text-white
            transition
            flex
            justify-center
            items-center
            gap-2
            "
          >
            Book Visit

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;