import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';
import './sass/index.scss'
import 'bootstrap/dist/css/bootstrap.css';

const RootElement = document.getElementById('root');
if (!RootElement) {
    throw new Error("Root element '#root' not found in the DOM");
}

createRoot(RootElement).render(
    <App />
)
