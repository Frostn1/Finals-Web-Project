import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Home from './components/Home'
import './style/home.css';


export default function App() {

    // Set the sign in check to false, inorder to not check each time we rerender
    useEffect(() => {
        localStorage.setItem("SIGNEDIN", false)

    }, [])
    const isSigned = localStorage.getItem("SIGNEDIN") === 'true'
    return ( 
        <Home isSigned={isSigned}></Home>
    )

}