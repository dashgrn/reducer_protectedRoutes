import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Counter from '../components/Counter'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'

const RoutesApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}

export default RoutesApp