import { motion } from 'framer-motion';

const skills = [
  {
    title: "Languages",
    description: ["Python", "JavaScript", "Java", "C++"]
  },
  {
    title: "Databases",
    description: ["MySQL", "MongoDB"]
  },
  {
    title: "Software Development",
    description: ["Django", "Flask", "FastAPI"]
  },
  {
    title: "Data Engineering",
    description: ["Kafka"]
  },
  {
    title: "Tools",
    description: ["Git", "Github", "VS Code", "Jupyter Notebook", "Tableau", "Prompt Engineering"]
  },
  {
    title: "Libraries",
    description: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "kafka-python", "Plotly", "Seaborn"]
  },
  {
    title: "Soft Skills",
    description: ["Communication", "Reasoning", "Learning Agility", "Problem Solving", "Learning Mindset"]
  }
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-left w-[200px] -ml-[50px]"
    >
      <div className="h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h2 className="text-2xl text-white font-medium tracking-tight mb-3 group-hover:text-gray-300 transition-colors">
                {skill.title}
              </h2>
              <div className="space-y-1">
                {skill.description.map((item, i) => (
                  <p key={i} className="text-gray-400 text-sm font-medium tracking-tight">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills; 