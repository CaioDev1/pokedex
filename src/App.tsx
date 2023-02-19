import './App.scss';
import { PokemonListPage } from './pages/ListPage/PokemonListPage';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import React from 'react';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { TeamsPage } from './pages/TeamsPage/TeamsPage';
import { withRouter } from './services/HOC/withRouter';
import { PokemonPage } from './pages/PokemonPage/PokemonPage';

//? INFINITE SCROLLING

const ListPageWithRouter = withRouter(PokemonListPage)

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='/' element={<ListPageWithRouter />}></Route>
            <Route path='/teste' element={<TeamsPage />}></Route>
            <Route path='/pokemon/:id' element={<PokemonPage /* skeletonParams={{rows: 3}} */ />}></Route>
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
