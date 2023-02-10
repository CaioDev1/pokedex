import './App.scss';
import { ListPage } from './pages/ListPage/ListPage';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import React from 'react';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { TeamsPage } from './pages/TeamsPage/TeamsPage';
import { withRouter } from './services/HOC/withRouter';

//? INFINITE SCROLLING

const ListPageWithRouter = withRouter(ListPage)

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='/' element={<ListPageWithRouter />}></Route>
            <Route path='/teste' element={<TeamsPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
