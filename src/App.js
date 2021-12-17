import React from 'react';
import './App.css';
import * as Spaces from 'react-spaces';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import PagesBody from './components/PagesBody';

function App() {
  return (
    <Spaces.ViewPort>
      <Container fluid>
        <Navigation />
      </Container>
      <Spaces.Fill>
        <PagesBody />
      </Spaces.Fill>
    </Spaces.ViewPort>
  );
}

export default App;
