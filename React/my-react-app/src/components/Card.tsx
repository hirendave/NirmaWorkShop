import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  const handleClick = () => {
    alert(`Card title: ${title}`);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      background: '#fff',
      maxWidth: '400px'
    }}>
      <h2 style={{ margin: '0 0 0.5rem 0' }}>{title}</h2>
      <p style={{ margin: 0 }}>{description}</p>
      <button
        onClick={handleClick}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Show Title
      </button>
    </div>
  );
};

export default Card;