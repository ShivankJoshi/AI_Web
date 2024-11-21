import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Lightbulb, Factory, Cpu } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Research',
      description: 'Cutting-edge research in artificial intelligence and machine learning'
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Industry Integration',
      description: 'Implementing AI solutions across major industrial sectors'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation Strategy',
      description: 'Strategic consulting for AI-driven transformation'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Technology Assessment',
      description: 'Evaluating and benchmarking AI technologies'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center gradient-bg">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Shaping the Future of Industry Through AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              We're a leading think tank focused on implementing AI advancements
              across key economic sectors.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-teal text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-opacity-90 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driving innovation and transformation across industries through
              advanced AI implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md card-hover"
              >
                <div className="text-primary-light mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Latest Updates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest research and industry insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              >
                <img
                  src={`https://source.unsplash.com/800x600/?artificial-intelligence,${index}`}
                  alt="AI Technology"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Advancing AI in Manufacturing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploring the latest developments in AI-powered manufacturing
                    processes and their impact on industry efficiency.
                  </p>
                  <a
                    href="#"
                    className="text-primary-light font-medium hover:text-primary transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;