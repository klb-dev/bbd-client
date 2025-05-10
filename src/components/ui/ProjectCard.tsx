import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
};

const ProjectCard = ({ title, description, image, link, delay = 0}: ProjectCardProps) => {
  return (

      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true, amount: 0.2 }}
        className="block w-full"
      >
        <div className="relative block w-full h-72 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
          <motion.div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 will-change-transform"
            style={{
              backgroundImage: `url(${image})`,
            }}
            whileHover={{ scale: 1.01 }}
          />
          <img src={image} alt={`${title} screenshot`} className="sr-only" loading="lazy"/>
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />
          <motion.div className="relative z-10 h-full w-full flex flex-col justify-end p-4 text-white rounded-b-xl">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
          </motion.div>
        </div>
      </motion.a>
  );
};

export default ProjectCard;
