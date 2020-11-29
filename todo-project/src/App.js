import React from 'react';
import './App.scss';
import './reset.scss';
import Header from "./Common/Header/Header";


function App() {
    return (
        <>
            <div className="App">
                <Header userName={"Dion"}/>
                <div className="body-section">
                    바디내용바디내용
                </div>
            </div>
        </>
    );
}

export default App;
