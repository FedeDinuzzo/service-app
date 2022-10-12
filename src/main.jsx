import React from 'react';
import { initializeApp } from "firebase/app";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyDCHzfqThE17uvl1WSRtnPfd2g-WicFO3A",
  authDomain: "tecnico-electrolux.firebaseapp.com",
  projectId: "tecnico-electrolux",
  storageBucket: "tecnico-electrolux.appspot.com",
  messagingSenderId: "41597758307",
  appId: "1:41597758307:web:cd894657eff73eed994156",
  measurementId: "G-DR79ES3JTY"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
