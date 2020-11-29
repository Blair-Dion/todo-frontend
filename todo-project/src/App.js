import React from 'react';
import './App.scss';
import './reset.scss';
import Header from "./Common/Header/Header";
import List from "./Component/List/List";


function App() {
    return (
        <>
            <div className="App">
                <Header userName={"Dion"}/>
                <div className="body-section">
                    <List/>
                </div>
            </div>
        </>
    );
}

export default App;
