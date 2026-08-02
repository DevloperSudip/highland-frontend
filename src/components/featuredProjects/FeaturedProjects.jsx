import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">

          <div>

            <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">

              Featured Projects

            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#081B33]">

              Discover Luxury Living

            </h2>

            <p className="mt-5 text-gray-500 max-w-2xl leading-8">

              Explore our premium residential and commercial
              developments located at the fastest growing
              destinations.

            </p>

          </div>

          <button
            className="
            group
            bg-[#081B33]
            hover:bg-[#102D55]
            text-white
            px-8
            py-4
            rounded-xl
            flex
            items-center
            gap-3
            transition-all
            duration-300
            shadow-xl
            "
          >

            View All Projects

            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition"
            />

          </button>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProjects;