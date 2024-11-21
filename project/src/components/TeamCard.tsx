import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamCard: React.FC<TeamMemberProps> = ({ name, role, image, bio, social }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-1">{name}</h3>
        <p className="text-primary-light font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-4">
          {social.linkedin && (
            <a
              href={social.linkedin}
              className="text-gray-400 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              className="text-gray-400 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;