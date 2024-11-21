import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, ChartBar, Brain, Factory } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: 'Manufacturing AI',
      description: 'Smart manufacturing processes and predictive maintenance systems.',
      image: 'https://source.unsplash.com/800x600/?manufacturing,robot',
      category: 'Industry'
    },
    {
      title: 'Financial Technology',
      description: 'AI-driven risk assessment and automated trading systems.',
      image: 'https://source.unsplash.com/800x600/?finance,technology',
      category: 'Finance'
    },
    {
      title: 'Healthcare Innovation',
      description: 'Medical imaging analysis and patient care optimization.',
      image: 'https://source.unsplash.com/800x600/?medical,technology',
      category: 'Healthcare'
    }
  ];

  const publications = [
    {
      title: 'The Future of Industrial AI',
      authors: 'Dr. Sarah Chen, James Wilson',
      date: 'March 2024',
      type: 'Research Paper'
    },
    {
      title: 'AI Ethics in Manufacturing',
      authors: 'Dr. Maya Patel',
      date: 'February 2024',
      type: 'White Paper'
    },
    {
      title: 'Neural Networks in Industry',
      authors: 'Dr. Elena Rodriguez',
      date: 'January 2024',
      type: 'Case Study'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Research & Industry Applications
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Exploring the frontiers of AI technology and its practical applications
              in key industrial sectors.
            </p>
            <div className="max-w-2xl mx-auto flex items-center bg-white rounded-lg p-2">
              <Search className="h-5 w-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search our research database..."
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button className="flex items-center space-x-2 bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-light transition-colors">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Key Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our research focuses on practical AI applications in major industrial sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm font-medium text-primary-light">{area.category}</span>
                  <h3 className="text-xl font-heading font-bold mt-2 mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Latest Publications</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recent research papers, white papers, and case studies from our team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6 flex items-center space-x-6 card-hover"
              >
                <div className="text-primary-light">
                  <BookOpen className="h-8 w-8" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-bold mb-2">{pub.title}</h3>
                  <p className="text-gray-600">{pub.authors}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-primary-light">{pub.type}</span>
                  <p className="text-gray-500 text-sm">{pub.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Industry Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications and success stories of our research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
            >
              <ChartBar className="h-12 w-12 text-primary-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">30%</h3>
              <p className="text-gray-600">Average Efficiency Increase</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
            >
              <Brain className="h-12 w-12 text-primary-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">AI Models Deployed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
            >
              <Factory className="h-12 w-12 text-primary-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Industry Partners</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;</content>