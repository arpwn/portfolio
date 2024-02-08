import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import MyMemoji from '../MyMemoji';
import RadarChart from '../RadarChart/RadarChart';

import headerStyles from './Header.module.scss';
import * as icons from '../../assets/icons';

const technologies = [
  { icon: icons.reactIcon, alt: 'React icon' },
  { icon: icons.reduxIcon, alt: 'Redux icon' },
  { icon: icons.typescriptIcon, alt: 'Typescript icon' },
  { icon: icons.htmlIcon, alt: 'HTML icon' },
  { icon: icons.cssIcon, alt: 'CSS icon' },
  { icon: icons.javascriptIcon, alt: 'Javascript icon'},
  { icon: icons.fluentIcon, alt: 'Fluent UI icon' },
  { icon: icons.dotNetCoreIcon, alt: 'DotNetCore icon' },
  { icon: icons.azureIcon, alt: 'Azure icon' },
  { icon: icons.gatsbyIcon, alt: 'Gatsby icon' },
  { icon: icons.nextIcon, alt: 'Next icon'  },
  { icon: icons.planetScaleIcon, alt: 'PlanetScale icon' },
  { icon: icons.pythonIcon, alt: 'Python icon' },
];

const Header = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);

    return (
      <>
        <div className={headerStyles.header}>
            <MyMemoji />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2 className={headerStyles.title}>Hi, It´s Armando</h2>
            </motion.div>
        </div>

        <div className={headerStyles.desc}>
          <span>
            Passionate software developer with an insatiable hunger for solving complex problems 
            creatively and efficiently. In 2024, I am focused on mastering the latest technologies 
            such as React & Angular and leveraging them to build dynamic and impactful web applications.
          </span>
        </div>

        <div>
          <span className={headerStyles.habilities}>
            <b>My strongest habilities</b>
          </span>
          <RadarChart  />
        </div>

        <div className={headerStyles.skills}>
          <span>
            <span className={headerStyles.others}>
            <b>Others</b>
            </span>
            <motion.div ref={ref} initial={{ scale: 0 }} animate={controls}>
              <div className={`lista-grid ${headerStyles.iconList}`}>
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <Image src={tech.icon} alt={tech.alt} width="25" height="25" />
                  </div>
                ))}
              </div>
            </motion.div>
          </span>
        </div>
      </>
    );
  };
  
  export default Header;