import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div>
        <h1>Not found – 404!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;