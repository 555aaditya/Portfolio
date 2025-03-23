import { motion } from 'framer-motion';

const projects = [
  {
    title: "Data Pipeline Automation",
    description: "Automated ETL pipeline using Apache Airflow and Python for processing large-scale data from multiple sources.",
    github: "https://github.com/yourusername/data-pipeline"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard built with React and D3.js for visualizing streaming data with WebSocket integration.",
    github: "https://github.com/yourusername/analytics-dashboard"
  },
  {
    title: "ML Model Deployment",
    description: "End-to-end machine learning pipeline with model training, evaluation, and deployment using FastAPI and Docker.",
    github: "https://github.com/yourusername/ml-deployment"
  },
  {
    title: "Cloud Data Warehouse",
    description: "Data warehouse implementation on AWS using Redshift, with automated data loading and transformation.",
    github: "https://github.com/yourusername/cloud-warehouse"
  },
  {
    title: "API Gateway Service",
    description: "Microservices API gateway built with Node.js and Express, implementing rate limiting and authentication.",
    github: "https://github.com/yourusername/api-gateway"
  },
  {
    title: "Data Quality Framework",
    description: "Framework for automated data quality checks and validation using Python and Great Expectations.",
    github: "https://github.com/yourusername/data-quality"
  },
  {
    title: "Stream Processing System",
    description: "Real-time stream processing system using Apache Kafka and Spark for high-throughput data processing.",
    github: "https://github.com/yourusername/stream-processing"
  },
  {
    title: "CI/CD Pipeline",
    description: "Automated CI/CD pipeline for data engineering projects using GitHub Actions and AWS services.",
    github: "https://github.com/yourusername/cicd-pipeline"
  }
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-left w-[200px]"
    >
      <div className="h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h2 className="text-2xl text-white font-medium tracking-tight mb-3 group-hover:text-gray-300 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm font-medium tracking-tight mb-4">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-white transition-colors inline-flex items-center"
              >
                GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects; 