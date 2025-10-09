import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <div className="card p-8 h-full">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${color} text-white mb-6 group-hover:scale-110 transition-transform duration-200`}
        >
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-bold brand-h mb-4 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="brand-sub leading-relaxed">
          {description}
        </p>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
