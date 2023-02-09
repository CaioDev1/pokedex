import './App.scss';
import { ListPage } from './components/ListPage/ListPage';
import { NavBar } from './components/NavBar/NavBar';

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
