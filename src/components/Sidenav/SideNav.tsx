import React, { useRef, useState, useEffect } from 'react';
import Socials from '../Socials/Socials'
import styles from './SideNav.module.scss'
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const links = [
  { to: 'home', label: '/home' },
  { to: 'projects', label: '/projects' },
  { to: 'experience', label: '/experience' },
  { to: 'achievements', label: '/achievements' },
];

const SideNav = () => {

  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef(null); // Reference to the navigation element

  const handleLinkClick = (linkTo: string) => {
    setActiveLink(linkTo);
    const audio = new Audio('/sounds/click2.wav');
    audio.play();
    console.log('Active Link:', linkTo);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-70px', // Adjust this margin to trigger the intersection earlier
      }
    );

    // Observe each section element
    links.forEach((link) => {
      const section = document.getElementById(link.to);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Only run once on component mount

  //Socials events
  const handleHover = () => {
      const audio = new Audio('/sounds/bubble.wav');
      audio.play();

  };

  return (
    <ul className={styles.sidenav} ref={navRef}>
      {links.map((link) => (
        <li key={link.to}>
          <Link
            activeClass="active"
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={link.to === activeLink ? `${styles.cursor} ${styles.active}` : styles.cursor}
            onClick={() => handleLinkClick(link.to)}
          >
            {link.label}
          </Link>
        </li>
      ))}

      {/* <Socials /> */}
      <ul className={styles.socials}>
        <li className={styles.bounce} onMouseEnter={handleHover}>
          <a href="https://github.com/arpwn" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <AiFillGithub />
          </a>
        </li>
        <li className={styles.bounce} onMouseEnter={handleHover}>
          <a href="https://www.linkedin.com/in/armandonery34/?locale=en_US" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin />
          </a>
        </li>
        <li className={styles.bounce} onMouseEnter={handleHover} >
          <a href="mailto:armandogune25@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
            <AiFillMail />
          </a>
        </li>
      </ul>
    </ul>
  );
}

export default SideNav;