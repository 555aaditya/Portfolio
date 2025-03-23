import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-left w-[200px] ml-2"
    >
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="group"
        >
          <h2 className="text-2xl text-white font-medium tracking-tight mb-0.5 group-hover:text-gray-300 transition-colors">Accenture</h2>
          <p className="text-xs text-gray-400 mb-0.5">Feb 2025</p>
          <p className="text-xs text-gray-400 mb-3">Remote</p>
          <div className="space-y-1 mb-2">
            <p className="text-xs text-gray-400">Data Analytics</p>
            <p className="text-xs text-gray-400">and Visualization</p>
            <p className="text-xs text-gray-400">Job Simulation</p>
          </div>
          <motion.a
            href="public/Accenture.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="group flex items-center"
          >
            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">View Certificate</span>
            <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors font-bold leading-none -mt-1 ml-[3px]">↗</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience; 