import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Next.js Nike Store"
          description="Join us on the forefront of style and performance. 
          Step into the future of online shoe shopping with the Nike Shoes Website, where Next.js brings you closer to your perfect pair, faster than ever before."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Car Rental App"
          description="Whether you're seeking luxury, fuel efficiency, or spaciousness, our website, with its advanced features, guides you seamlessly through the selection process, ensuring you find the perfect vehicle for your travels."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Music Player Website"
          description="Welcome to our Music Player Website—an immersive sonic journey at your fingertips. Stream your favorite tunes effortlessly with our sleek and intuitive interface. "
        />
      </div>
    </div>
  );
};

export default Projects;
