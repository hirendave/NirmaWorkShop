import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#282c34', color: 'white', marginTop: 'auto' }}>
      &copy; {new Date().getFullYear()} My React App. All rights reserved.
    </footer>
  );
};

export default Footer;