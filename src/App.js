import React from 'react'; 
import {Routes, Route, Link} from "react-router-dom"; 


import { Navbar, Cryptocurrencies, Exchanges, News, CryptoDetails, Homepage } from './components';

import "./app.css";

const App = () => {
    return (
        <div className = "app">
            <div className = "navbar">
                <Navbar/>
            </div>
            <div className = "main">
                <Routes>
                    <Route path = "/" element = {<Homepage/>}/>
                    <Route path ="/cryptocurrencies" element = {<Cryptocurrencies/>} />
                    <Route path ="/exchanges" element = {<Exchanges/>} />
                    <Route path= "/crypto/:coinId" element={<CryptoDetails />} />
                    <Route path ="/news" element = {<News/>} />
                </Routes>
            </div>
            <div className = "footer">

            </div>
        </div>
    )
}

export default App

//https://www.youtube.com/watch?v=9DDX3US3kss&list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR&index=3