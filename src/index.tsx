import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './content/Home';
import './style/common.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Home />);
