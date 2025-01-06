
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    return (
        <BrowserRouter >
            <div className="app">
                <Header />
                <main className="main-content">
                    <Routes >
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create" element={<CreatePostPage />} />
                        <Route path="/edit/:id" element={<EditPostPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;

