// Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '@/Components/Layouts/Layout';
import MainPage from '@/Pages/Main';
import Profile from '@/Pages/Profile';

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
    </Router>
);

export default AppRouter;
