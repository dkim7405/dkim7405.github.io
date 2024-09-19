import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const ContactInfo = ({ title, info }) => (
  <motion.div
    variants={itemVariants}
    className="flex flex-col mb-8"
  >
    <span className="text-zinc-500 text-sm font-normal">{title}</span>
    <span className="text-zinc-900 text-lg font-normal">{info}</span>
  </motion.div>
);

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
    whileHover={{ scale: 1.1 }}
    className="text-zinc-900 hover:text-zinc-600 transition-colors"
  >
    <FontAwesomeIcon icon={icon} size="lg" />
  </motion.a>
);

const ContactsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="w-full min-h-screen bg-zinc-100 p-8 font-sans flex flex-col justify-center items-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        className="text-zinc-900 text-4xl md:text-5xl lg:text-6xl mb-12 font-normal"
      >
        Contacts
      </motion.h1>

      <div className="w-full max-w-md">
        <ContactInfo title="Phone" info="626 . 524 . 9685" />
        <ContactInfo title="Email" info="dongkim7405@gmail.com" />
        <ContactInfo title="Location" info="5500 Wabash Ave, Terre Haute, IN" />
      </div>

      <motion.div
        variants={itemVariants}
        className="flex justify-center space-x-8 mt-12"
      >
        <SocialLink href="https://github.com/dkim7405" icon={faGithub} />
        <SocialLink href="https://linkedin.com/in/dkim7405" icon={faLinkedin} />
        <SocialLink href="https://instagram.com/l.kim0704/" icon={faInstagram} />
      </motion.div>
    </motion.section>
  );
};

export default ContactsPage;