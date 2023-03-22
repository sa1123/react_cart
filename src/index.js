import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK8D5zNZ8nd3vZO0nON1exm9QYgER-nbY",
  authDomain: "cart-dff24.firebaseapp.com",
  projectId: "cart-dff24",
  storageBucket: "cart-dff24.appspot.com",
  messagingSenderId: "675094041035",
  appId: "1:675094041035:web:b06b2501a52fc6e131264e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);