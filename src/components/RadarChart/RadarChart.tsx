import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styles from '../RadarChart/RadarChart.module.scss'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillsData: Record<string, number[]> = {
  frontend: [50, 75, 40, 90, 85, 65],
  backend: [70, 65, 75, 65, 45],
  tools: [70, 80, 75, 10, 25, 45],
  communication: [90, 95, 75, 80, 65, 75],
};

const labelsData: Record<string, string[]> = {
  frontend: ['React', 'Gatsby', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['C#', 'SQL Server', 'ASP .NET', 'Data Structures', 'Algorithms'],
  tools: ['Git', 'VS Code', 'Github', 'Jest', 'GraphQL', 'Storybook'],
  communication: ['Teamwork', 'Communication', 'Problem Solving', 'Adaptability', 'Leadership', 'Creativity'],
};

const colors: Record<string, { borderColor: string; backgroundColor: string }> = {
  frontend: { borderColor: 'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235, 0.2)' },
  backend: { borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.2)' },
  tools: { borderColor: 'rgba(85, 112, 192, 1)', backgroundColor: 'rgba(85, 112, 192, 0.2)' },
  communication: { borderColor: 'rgba(255, 206, 86, 1)', backgroundColor: 'rgba(255, 206, 86, 0.2)' },
};

const RadarChart: React.FC = () => {
  const [activeSection, setActiveSection] = useState('frontend');

  const options = {
    // Opciones del gráfico
  };

  useEffect(() => {
    ChartJS.defaults.font.size = 16;
  }, []);

  const skills = skillsData[activeSection];
  const labels = labelsData[activeSection];
  const { borderColor, backgroundColor } = colors[activeSection];

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.chartWrap}>
      <div className={styles.wrapTwo}>
        <Radar data={{
          labels: labels,
          datasets: [
            {
              label: `${activeSection} Skills`,
              data: skills,
              borderColor: borderColor,
              backgroundColor: backgroundColor,
              borderWidth: 1,
              pointBackgroundColor: borderColor,
              pointBorderColor: borderColor,
              pointRadius: 6,
              fill: true,
            },
          ],
        }} options={options} />
      </div>
      <div className={styles.buttonContainer}>
        {Object.keys(skillsData).map(section => (
          <button
            key={section}
            onClick={() => handleSectionChange(section)}
            className={`${styles.responsiveButton} ${
              activeSection === section ? styles.activeButton : ''
            }`}
            style={{
              color: colors[section].borderColor, 
              borderColor: colors[section].borderColor, 
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <div className={styles.labelContainer}>
        {labels.map((label, index) => (
          <div key={index} className={styles.responsiveLabel}>
            <div className={styles.colorSquare}
                    style={{ backgroundColor: colors[activeSection].borderColor }} 
                    ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );

};

export default RadarChart;