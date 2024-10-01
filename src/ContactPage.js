import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = ({ title, info }) => (
    <div className="flex flex-col mb-8">
        <span className="text-zinc-500 text-sm font-normal">{title}</span>
        <span className="text-zinc-900 text-lg font-normal">{info}</span>
    </div>
);

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-900 hover:text-zinc-600 transition-colors"
    >
        <FontAwesomeIcon icon={icon} size="lg" />
    </a>
);

const ContactsPage = () => {
    const contactDetails = [
        { title: "Phone", info: "626 . 524 . 9685" },
        { title: "Email", info: "dongkim7405@gmail.com" },
        { title: "Location", info: "5500 Wabash Ave, Terre Haute, IN" }
    ];

    const socialLinks = [
        { href: "https://github.com/dkim7405", icon: faGithub },
        { href: "https://linkedin.com/in/dkim7405", icon: faLinkedin },
        { href: "https://instagram.com/l.kim0704/", icon: faInstagram }
    ];

    return (
        <section className="w-full min-h-screen bg-zinc-100 p-8 font-sans flex flex-col justify-center items-center">
            <h1 className="text-zinc-900 text-4xl md:text-5xl lg:text-6xl mb-12 font-normal">
                Contacts
            </h1>

            <div className="w-full max-w-md">
                {contactDetails.map((detail, index) => (
                    <ContactInfo key={index} title={detail.title} info={detail.info} />
                ))}
            </div>

            <div className="flex justify-center space-x-8 mt-12">
                {socialLinks.map((link, index) => (
                    <SocialLink key={index} href={link.href} icon={link.icon} />
                ))}
            </div>
        </section>
    );
};

export default ContactsPage;