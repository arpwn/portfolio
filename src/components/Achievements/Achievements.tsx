import Image, { StaticImageData } from 'next/image';
import Lifelong from '../../assets/images/lifelong.png';
import Scrum from '../../assets/images/scrum.png';
import Remote from '../../assets/images/remote.png';
import Azure from '../../assets/images/azure.png';
import Cyber from '../../assets/images/cyber.png';
import styles from './Achievements.module.scss'

interface ImageObject {
  src: StaticImageData;
  alt: string;
  link: string;
  width?: number;
  height?: number;
}

const images: ImageObject[] = [
  { src: Lifelong, alt: 'Lifelong Learning badge', link: 'https://www.credly.com/badges/47702f20-1b5c-4f93-9657-12e71cf27e4a' },
  { src: Scrum, alt: 'Scrum Foundations badge', link: 'https://www.credly.com/badges/e4db4cc1-1b7b-465d-a234-483790ef67cf' },
  { src: Remote, alt: 'Remote Work badge', link: 'https://www.credly.com/badges/1b494c32-6a0c-4aab-b482-a046a77d67f5' },
  { src: Azure, alt: 'Azure badge', link: 'https://www.credly.com/badges/d78ca971-8132-4814-beda-4c6361031acd' },
  { src: Cyber, alt: 'Cybersecurity badge', link: 'https://www.credly.com/badges/83fdf1de-2cf4-44cd-b604-10601d46a089' },
];

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 100;

const Achievements = () => {
  return (
    <>
      <h2>Achievements</h2>
      {images.map(({ src, alt, link, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT }: ImageObject) => (
        <a href={link} key={src.src} target="_blank" rel="noopener noreferrer">
          <Image className={styles.img} src={src} alt={alt} width={width} height={height} />
        </a>
      ))}
    </>
  );
};

export default Achievements;