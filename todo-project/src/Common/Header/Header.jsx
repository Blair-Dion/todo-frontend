import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti';
import './Header.scss';

const Header = ({userInfo, boardName}) => {


    return (
        <>
            <div className="header-section">
                <div className="left-wrapper">
                    <img className="btn" src={userInfo.profile_image_url} alt="image"/>
                    <span className="username">{userInfo.user_nickname}</span>
                    <span className="board-title">{boardName}</span>
                </div>
                <div className="right-wrapper">
                    <div className="menu-wrapper">
                        <TiThMenuOutline className="btn"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;