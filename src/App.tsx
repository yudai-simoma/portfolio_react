import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Button variant="primary">Primary</Button>
    </div>
  );
};

export default App;

