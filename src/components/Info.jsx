import { motion } from 'framer-motion';

const contactLinks = [
  {
    name: "Email",
    url: "mailto:555aaditya@proton.me"
  },
  {
    name: "Telegram",
    url: "https://t.me/aaditya_sinha"
  },
  {
    name: "GitHub",
    url: "https://github.com/555aaditya"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/555aaditya"
  },
  {
    name: "Kaggle",
    url: "https://kaggle.com/aaditya555"
  },
  {
    name: "Phone",
    url: "tel:+918252333606"
  }
];

function Contact() {
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
        >
          <div className="space-y-3">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center"
              >
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  {link.name}
                </span>
                <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors font-bold leading-none -mt-1 ml-[3px]">↗</span>
              </motion.a>
            ))}
            <motion.a
              href="public/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="group flex items-center"
            >
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Resume</span>
              <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors font-bold leading-none -mt-1 ml-[3px]">↗</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact; 