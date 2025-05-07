import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
};

const ProjectCard = ({ title, description, image, link, delay = 0}: ProjectCardProps) => {
  return (
    <FadeInSection delay={delay}>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true, amount: 0.2 }}
        className="block w-full"
      >
        <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 will-change-transform"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
          <div className="relative z-10 h-full w-full flex flex-col justify-end p-4 text-white rounded-b-xl">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </motion.a>
    </FadeInSection>
  );
};

export default ProjectCard;
