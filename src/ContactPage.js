import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './index.css';

const Information = ({ title, info }) => {
    return (
        <div className="flex flex-row">
            <h2 className="text-zinc-900 text-xl pb-8 px-4 sm:px-8 text-left">
                {title}
            </h2>
            <h2 className="text-zinc-900 text-xl pb-8 text-left">
                ·
            </h2>
            <h2 className="text-zinc-900 text-xl pl-8 pb-8 text-left">
                {info}
            </h2>
        </div>
    );
};

const SocialLinks = () => {
    return (
        <div className="flex flex-col items-end space-y-8 pr-8">
            <a href="https://github.com/dkim7405" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faGithub} size="2x" className="text-zinc-900" />
            </a>
            <a href="https://linkedin.com/in/dkim7405" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-zinc-900" />
            </a>
            <a href="https://instagram.com/l.kim0704/" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-zinc-900" />
            </a>
        </div>
    );
};

const ContactsPage = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-100 pt-8 font-sans relative">
        <h2 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-8 px-4 sm:px-8 text-right">
            Contacts
        </h2>

        <div className="flex flex-row h-96">
            <div className="flex flex-col justify-center -translate-x-2">
                <Information title="Phone" info="626 . 524 . 9685" />
                <Information title="Email" info="dongkim7405@gmail.com" />
                <Information title="Location" info="5500 Wabash Ave, Terre Haute, IN"/>
            </div>
            <div className="flex-grow flex justify-end items-center -translate-y-6">
                <SocialLinks />
            </div>
        </div>
    </section>
  );
};

export default ContactsPage;
