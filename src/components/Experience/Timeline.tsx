import React, { useEffect, ReactNode } from 'react';
import { Timeline } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import timelineModule from './Timeline.module.scss'

interface AnimatedTimelineItemProps {
  children: ReactNode;
}

const AnimatedTimelineItem = ({ children }: AnimatedTimelineItemProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 2.5 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      style={{ marginBottom: '20px' }}
    >
      {children}
    </motion.div>
  );
};

const timelineData = [
  {
    title: 'IMSS',
    date: '2024 - Current',
    description: [
      'Angular',
      'React',
      'Java',
      'SQL',
    ],
    color: '#fee600',
  },
  {
    title: 'EY GDS',
    date: '2022 - 2023',
    description: [
      'Work with Fluent UI to create exceptional designs.',
      'Create React.js components for an internal dashboard.',
      'Code refactoring.',
      'Bug fixes in various components.',
    ],
    color: '#fee600',
  },
  {
    title: 'Consorcio Jurídico',
    date: '2020 - 2021',
    description: [
      'Designing graphical user interface.',
      'Sharing ideas for design and architecture.',
      'Creating logic and layouts for components and pages.',
      'Creating stored procedures and functions.',
    ],
    color: '#0b743c',
  },
];

const TimeLine = () => {
  return (
    <div>
      <h2 className={timelineModule.title}><b>Experience</b></h2>
      <Timeline>
        {timelineData.map((item, index) => (
          <Timeline.Item
            key={index}
          >
            <AnimatedTimelineItem>
              <p><b>{item.title} | {item.date}</b></p>
              {item.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </AnimatedTimelineItem>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;