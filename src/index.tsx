import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Home';
import './common.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Home />);
