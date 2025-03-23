import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-left"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 font-medium tracking-tight text-xs md:text-sm leading-relaxed"
      >
        Detail-oriented and analytical Software Developer & Data Engineer with a strong foundation in problem-solving and building scalable solutions. Passionate about learning, adapting to new technologies, and delivering high-quality work. A keen eye for detail and a drive for innovation make me eager to contribute and grow in a dynamic environment.
      </motion.p>
    </motion.div>
  );
}

export default Home; 