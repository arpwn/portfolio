import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link href="/">Ir a la página de inicio</Link>
    </div>
  );
};

export default NotFoundPage;