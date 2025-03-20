import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import App from "./App";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import AdminDashboard from './pages/AdminDashboard';
import ItemList from './components/ItemList';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/item-manage" element={ <ItemList />}/>
    </Routes>
</BrowserRouter>);

reportWebVitals();
