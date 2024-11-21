import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Research Officer',
      image: 'https://source.unsplash.com/800x600/?professional,woman',
      bio: 'Leading AI researcher with 15+ years of experience in machine learning and industrial applications.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@aithinktank.com'
      }
    },
    {
      name: 'James Wilson',
      role: 'Industry Integration Director',
      image: 'https://source.unsplash.com/800x600/?professional,man',
      bio: 'Expert in implementing AI solutions across manufacturing and logistics sectors.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@aithinktank.com'
      }
    },
    {
      name: 'Dr. Maya Patel',
      role: 'AI Ethics Lead',
      image: 'https://source.unsplash.com/800x600/?business,woman',
      bio: 'Specializes in ethical AI implementation and responsible innovation practices.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maya@aithinktank.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Technology Strategy Lead',
      image: 'https://source.unsplash.com/800x600/?business,man,asian',
      bio: 'Strategic advisor with expertise in AI transformation and technology assessment.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@aithinktank.com'
      }
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Research Director',
      image: 'https://source.unsplash.com/800x600/?professional,latina',
      bio: 'Leads research initiatives in deep learning and neural networks.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'elena@aithinktank.com'
      }
    },
    {
      name: 'Marcus Johnson',
      role: 'Innovation Lead',
      image: 'https://source.unsplash.com/800x600/?professional,black,man',
      bio: 'Drives innovation strategy and oversees implementation of cutting-edge AI solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'marcus@aithinktank.com'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A diverse group of experts dedicated to advancing AI implementation
              across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals passionate about AI and
              its industrial applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;