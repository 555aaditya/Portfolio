import { motion } from 'framer-motion';

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-left w-[200px] ml-2"
    >
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="group flex items-center"
      >
        <span className="text-sm text-gray-400 font-medium hover:text-white transition-colors tracking-tight">
          Resume
        </span>
        <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors font-bold leading-none -mt-1 ml-[3px]">↗</span>
      </motion.a>
    </motion.div>
  );
}

export default Resume; 