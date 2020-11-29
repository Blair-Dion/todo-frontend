import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti';
import './Header.scss';

const Header = ({userName}) => {

    return (
        <>
            <div className="header-section">
                <div className="left-wrapper">
                    <span className="username">{userName}</span>
                    <span className="board-title">TodoBoard</span>
                </div>
                <div className="right-wrapper">
                    <div className="menu-wrapper">
                        <TiThMenuOutline/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;