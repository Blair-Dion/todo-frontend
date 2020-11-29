import React from 'react';
import './Header.scss';

const Header = ({userName}) => {

    return (
        <>
            <div className="header-section">
                <div className="left-wrapper">
                    <div className="username">{userName}</div>
                    <div className="board-title">TodoBoard</div>
                </div>
                <div className="right-wrapper">
                    <div className="manu-bar">menu</div>
                </div>
            </div>
        </>
    )
}

export default Header;