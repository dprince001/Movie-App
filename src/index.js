import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GenreProvider } from './contexts/genrecontext';


import './index.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GenreProvider>
        <App />
      </GenreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
