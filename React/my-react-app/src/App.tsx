import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header title="My React App" />
      <main style={{ flex: 1, padding: '2rem', background: '#f5f5f5' }}>
        <Card
          title="Welcome to My React App"
          description="This is a simple card component. You can reuse it with different titles and descriptions."
        />
        <Card
          title="Another Card"
          description="You can add as many cards as you like. Customize them with your own content."
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;