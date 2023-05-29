import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collection from './pages/collection';
import Art from './pages/art'
import reportWebVitals from './reportWebVitals';
import Header from './layouts/header';
import Search from './pages/search';
import Footer from './layouts/footer';
import Scan from './pages/scan';
import './style/normalize.css';
import './style/global.css';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
        <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Collection />} />
                    <Route path="/art/:artId" element={<Art />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/scan" element={<Scan />} />
                </Routes>
            </main>
        <Footer />
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
reportWebVitals();
