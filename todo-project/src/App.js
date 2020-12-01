import React, {useState, useEffect} from 'react';
import './App.scss';
import './reset.scss';
import Header from "./Common/Header/Header";
import List from "./Component/List/List";


function App() {

    return (
        <>
            <div className="App">
                <Header userName={"Bladi"}/>
                <div className="body-section">
                        <List/>
                        <List/>
                        <List/>
                </div>
            </div>
        </>
    );
}

export default App;
