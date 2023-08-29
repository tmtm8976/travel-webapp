import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Error';
import Accounts from './pages/auth/Accounts'

import { BrowserRouter } from 'react-router-dom';
import Context from './context/Context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: "account/",
    element: <Accounts/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
