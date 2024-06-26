import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateItemPage from './pages/CreateItemPage';
import UpdateItemPage from './pages/UpdateItemPage';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreateItemPage />} />
                    <Route path="/update/:id" element={<UpdateItemPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
