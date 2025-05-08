import ProjectCard from "./ui/ProjectCard";
import BTR from '../assets/images/BornToRide.png';
import ForeverHome from '../assets/images/ForeverHome.png';
import FadeInSection from "./ui/FadeInSection";

const projectData = [
  {
    title: 'Born To Ride 501(c)(3)',
    description: 'Born to Ride - 501(c)(3)- landing page. Frontend uses Three.js to showcase skateboards and one skater. Donates can be submitted. The site is fully responsive and works on all devices.',
    image: BTR,
    link: 'https://borntoridepleasantontx.org',
  },
  {
    title: 'Forever Home',
    description: 'Forever Home is a sleek, modern web app that connects people with adoptable pets near them. It features a user-friendly interface, allowing users to search for pets by breed, age, and location.',
    image: ForeverHome,
    link: 'https://forever-home-b1dba.web.app/',
  },
];

const Projects = () => {
  return (
    <section id="sites-that-soar" className="py-20 bg-slate-100 dark:bg-slate-800 scroll-mt-24">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-cyan-700">Sites that Soar</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          A look at web experiences we've built to soar.
        </p>
        <FadeInSection>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-full overflow-hidden">
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                delay={index * 0.2}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;