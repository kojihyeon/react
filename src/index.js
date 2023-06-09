import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import NotificationList from './chapter_06/NotificationList';

import Accommodate from './chapter_07/Accommodate';

import ConfirmButton from './chapter_08/ConfirmButton';

import LandingPage from './chapter_09/LandingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

reportWebVitals();

//커밋 테스트 12345