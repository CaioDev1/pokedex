import React from 'react';
import './App.scss';
import { ListPage } from './components/ListPage/ListPage';
import { NavBar } from './components/NavBar/NavBar';

//? APLICAR SKELETONS
//? SPINNING LOAD
//? INFINITE SCROLLING

function App() {
  return (
    <>
      <ListPage />
      <NavBar />
    </>
  );
}

export default App;
