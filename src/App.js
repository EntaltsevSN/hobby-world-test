import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Container } from 'react-bootstrap';
import PostsList from './components/PostsList';
import Header from './components/Header';
import Title from './components/Title';

function App() {
  return (
    <>
      <Header/>
      <Container className="p-4 bg-white">
        <Title/>
        <PostsList />
      </Container>
    </>
  );
}

export default App;
