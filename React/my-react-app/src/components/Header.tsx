import React from 'react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;