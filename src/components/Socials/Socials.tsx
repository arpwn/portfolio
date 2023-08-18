import React from 'react';
import Image from 'next/image';
import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import styles from './Socials.module.scss';
import Link from 'next/link';

interface IconSize {
  width: number;
  height: number;
}

const redirectTo = (url: string) => {
  window.open(url, '_blank');
};

const iconSize: IconSize = {
  width: 20,
  height: 20,
};

const socialIcons = [
  {
    id: 1,
    icon: Github,
    alt: 'Github icon',
    url: 'https://github.com/tu-usuario',
  },
  {
    id: 2,
    icon: Linkedin,
    alt: 'Linkedin icon',
    url: 'https://www.linkedin.com/in/armandonery34/',
  },
];

const Socials = () => {
  return (
    <>
      {socialIcons.map((icon) => (
      <div key={icon.id} className={styles.socials}>
        <Image
          className={styles.image}
          src={icon.icon}
          alt={icon.alt}
          width={iconSize.width}
          height={iconSize.height}
          onClick={() => redirectTo(icon.url)}
        />
      </div>
    ))}
    </>    
  );
};

export default Socials;