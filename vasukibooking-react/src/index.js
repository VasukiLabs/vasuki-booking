import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completion from './components/Stripe/Completion';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
  // passing the client secret obtained from the server
  clientSecret: 'pi_1MpcArJAJfZb9HEB0LYMwiyV_secret_nepnZ2h9znboFfTAsawgfbhYp',
};

root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise} options={options}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/completion' element={<Completion/>} />
      </Routes>
    </BrowserRouter>
    </Elements>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
