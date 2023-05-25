import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './SignUp.tsx';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import Login from './LoginPage.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
