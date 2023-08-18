import React from 'react';
import Image from 'next/image';
import memoji from '../assets/images/profile.png'


const MyMemoji = () => {
  return (
    <Image 
        src={memoji} 
        alt="Mi Memoji"
        priority={false}
        placeholder= 'empty'
        width={150}
        height={150} />
  );
}

export default MyMemoji;