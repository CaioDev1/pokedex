import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ApiProvider } from './services/api/apiProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
{/* <React.StrictMode> */} //? Executing hooks twice on load
root.render(
    <ApiProvider><App /></ApiProvider>
);
  {/* </React.StrictMode> */}
